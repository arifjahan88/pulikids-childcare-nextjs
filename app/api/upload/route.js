export async function POST(request) {
  try {
    const data = await request.json();
    console.log(data);
    return Response.json({ message: "File uploaded successfully" });
  } catch (error) {
    return Response.json({ error: "An error occurred" }, { status: 500 });
  }
}
