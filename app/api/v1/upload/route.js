import dbConnect from "@/lib/dbConnect";
import { sendResponse } from "@/lib/sendResponse";
import FileUpload from "@/models/uploadModel";
import { put } from "@vercel/blob";

export async function POST(request) {
  try {
    await dbConnect();

    const formData = await request.formData();
    const title = formData.get("title");
    const upload_file = formData.get("upload_file");

    if (!title || !upload_file) {
      return sendResponse(400, "Please fill all the fields");
    }

    const blobData = await put(title, upload_file, {
      access: "public",
    });

    if (!blobData) {
      return sendResponse(500, "File not uploaded to blob storage");
    }

    const fileUploadData = await FileUpload.create({
      title,
      url: blobData.url,
    });

    if (!fileUploadData) {
      return sendResponse(500, "File not uploaded to database");
    }

    return sendResponse(true, 200, "File uploaded successfully", fileUploadData);
  } catch (error) {
    return sendResponse(500, error?.message || "An error occurred");
  }
}

// GET endpoint to fetch all files
export async function GET() {
  try {
    await dbConnect();

    const files = await FileUpload.find({}).sort({ createdAt: -1 }).select("-__v");

    return sendResponse(true, 200, "Files fetched successfully", files);
  } catch (error) {
    return sendResponse(500, error?.message || "An error occurred");
  }
}
