import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
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
  const url = new URL(request.url);
  const shortKey = url.searchParams.get("id");

  if (shortKey) {
    const document = await client
      .db("links")
      .collection("urls")
      .findOne({ short: shortKey });
    if (document) {
      return new Response(JSON.stringify(document), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: "Document not found" }), {
        status: 404,
      });
    }
  } else {
    return new Response(JSON.stringify({ error: "Short key is required" }), {
      status: 400,
    });
  }
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
