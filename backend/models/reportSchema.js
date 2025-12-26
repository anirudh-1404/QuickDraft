import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ["internship", "weekly", "project", "custom"],
      required: true,
    },
    rawInput: {
      type: String,
      required: true,
    },
    generatedContent: {
      type: String,
    },
    status: {
      type: String,
      enum: ["draft", "generated"],
      default: "draft",
    },
    wordCount: {
      type: Number,
      default: 0,
    },
    language: {
      type: String,
      default: "English",
    },
    aiUsed: {
      type: Boolean,
      default: false,
    },
    aiModel: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  { timestamps: true }
);

export const Report = mongoose.model("Report", reportSchema);
