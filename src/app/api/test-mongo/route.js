import { connectToDatabase } from "@/utils/db";

export async function GET() {
  try {
    await connectToDatabase(); // Just establish a connection
    return Response.json({ message: "MongoDB connected successfully!" });
  } catch (error) {
    return Response.json({ error: "MongoDB connection failed", details: error.message }, { status: 500 });
  }
}
