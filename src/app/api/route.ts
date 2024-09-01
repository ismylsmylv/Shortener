import { MongoClient, ServerApiVersion } from "mongodb";
import connect from "@/utils/startMongo";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("environment variable MONGO_URI is not defined");
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function GET(request: Request) {
  const client = await connect;
  const cursor = await client.db("links").collection("urls").find();
  const greetings = await cursor.toArray();
  return Response.json(greetings);
}

export async function POST(request: Request) {
  const client = await connect;
  const data = await request.json();
  const result = await client.db("links").collection("urls").insertOne(data);
  return Response.json({
    message: "successfully updated the document",
    insertedId: result.insertedId,
  });
}
