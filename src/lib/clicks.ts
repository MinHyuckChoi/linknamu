import clientPromise from "@/lib/mongodb";

const DB_NAME = "linknamu";
const COLLECTION_NAME = "linkClicks";

interface ClickDoc {
  _id: string;
  count: number;
}

async function getCollection() {
  const client = await clientPromise;
  return client.db(DB_NAME).collection<ClickDoc>(COLLECTION_NAME);
}

export async function getAllClickCounts(): Promise<Record<string, number>> {
  const collection = await getCollection();
  const docs = await collection.find().toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc._id] = doc.count;
  }
  return counts;
}

export async function incrementClickCount(linkId: string): Promise<number> {
  const collection = await getCollection();
  const result = await collection.findOneAndUpdate(
    { _id: linkId },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" }
  );
  return result?.count ?? 1;
}
