import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
    {
        chatId: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },
        userId: {
            type: String,
            required: true,
            index: true,
        },
        chatTitle: {
            type: String,
            default: "New Chat",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Chat", ChatSchema);
