import dbConnect from "@/lib/dbConnect";
import FileUpload from "@/models/uploadModel";
import { put } from "@vercel/blob";

export async function POST(request) {
  try {
    await dbConnect();

    const formData = await request.formData();
    const title = formData.get("title");
    const upload_file = formData.get("upload_file");

    if (!title || !upload_file) {
      throw new Error("Please fill all the fields");
    }

    const blobData = await put(title, upload_file, {
      access: "public",
    });

    if (!blobData) {
      throw new Error("File not uploaded to blob storage");
    }

    const fileUploadData = await FileUpload.create({
      title,
      url: blobData.url,
    });

    if (!fileUploadData) {
      throw new Error("File not uploaded to database");
    }

    return Response.json({
      message: "File uploaded successfully",
      success: true,
      status: 200,
      data: fileUploadData,
    });
  } catch (error) {
    return Response.json({
      data: error?.message || "An error occurred",
      status: 500,
      success: false,
    });
  }
}

// GET endpoint to fetch all files
export async function GET() {
  try {
    await dbConnect();

    const files = await FileUpload.find({}).sort({ createdAt: -1 }).select("-__v");

    return Response.json({
      message: "Files fetched successfully",
      status: 200,
      success: true,
      data: files,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error?.message || "An error occurred",
      status: 500,
    });
  }
}
