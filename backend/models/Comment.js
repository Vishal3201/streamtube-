import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
videoId: { type: mongoose.Schema.Types.ObjectId, ref: "Video" },
text: String
},{ timestamps:true });

export default mongoose.model("Comment", commentSchema);