import { Client } from "minio";

const minio = new Client({
  endPoint: process.env.MINIO_ENDPOINT,
  port: +process.env.MINIO_PORT,
  useSSL: false,
  accessKey: process.env.MINIO_ACCESS_KEY,
  secretKey: process.env.MINIO_SECRET_KEY,
});

type BucketDefinition = {
  name: string;
  access?: "public" | "private";
};
const buckets: BucketDefinition[] = [
  {
    name: "uploads",
    access: "public",
  },
];

export async function setupMinIO() {
  buckets.map(async ({ name, access }) => {
    const videosBucketExist = await minio.bucketExists(name);
    if (!videosBucketExist) {
      await minio.makeBucket(name, "us-east-1");
    }
    if (access === "public")
      minio.setBucketPolicy(
        name,
        JSON.stringify({
          Version: "2012-10-17",
          Statement: [
            {
              Sid: "AllowPublicRead",
              Effect: "Allow",
              Principal: {
                AWS: "*",
              },
              Action: "s3:GetObject",
              Resource: `arn:aws:s3:::${name}/*`,
            },
          ],
        })
      );
  });
}
export default minio;
