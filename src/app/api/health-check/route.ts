import dbConnect from "@/lib/dbConnect";

export async function GET() {
  await dbConnect();

  return Response.json(
    {
      success: true,
      message: "Server is up and running",
    },
    {
      status: 200,
    }
  );
}
