import { del } from "@vercel/blob";
import FileUpload from "@/models/uploadModel";
import dbConnect from "@/lib/dbConnect";
import { sendResponse } from "@/lib/sendResponse";

export async function DELETE(request, { params }) {
  try {
    await dbConnect();

    const { id } = params;
    if (!id) {
      return sendResponse(false, 400, "Id is required");
    }

    const findData = await FileUpload.findById(id);
    if (!findData) {
      return sendResponse(false, 404, "File not found in database");
    }

    // Delete from Vercel Blob
    try {
      await del(findData.url);
    } catch (error) {
      return sendResponse(false, 500, error.message);
    }

    // Delete from database
    const deleteData = await FileUpload.findByIdAndDelete(id);
    if (!deleteData) {
      return sendResponse(false, 500, "File not deleted from database");
    }

    return sendResponse(true, 200, "File deleted successfully");
  } catch (error) {
    return sendResponse(false, 500, error.message || "An error occurred");
  }
}
