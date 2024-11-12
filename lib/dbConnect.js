import mongoose from "mongoose";

const connectionobj = {
  isConnected: false,
};

async function dbConnect() {
  if (connectionobj.isConnected) {
    console.log("Already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
    connectionobj.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
    process.exit(1);
  }
}

export default dbConnect;
