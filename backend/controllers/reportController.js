import { Report } from "../models/reportSchema.js";

export const createReport = async (req, res, next) => {
  try {
    const { title, type, rawInput, tags } = req.body;

    if (!title || !type || !rawInput) {
      return res.status(400).json({
        message: "All feilds are required!",
      });
    }

    const report = await Report.create({
      userId: req.user._id,
      title,
      type,
      rawInput,
      tags,
      status: "draft",
    });

    res.status(201).json({
      message: "Report created successfully",
      data: report,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong while creating report",
    });
  }
};

export const getMyReports = async (req, res, next) => {
  try {
    const reports = await Report.find({
      userId: req.user._id,
      isDeleted: false,
    }).sort({ createdAt: -1 });

    if (!reports) {
      return res.status(404).json({
        message: "No reports found!",
      });
    }

    res.status(200).json({
      message: "Reports fetched successfully!",
      data: reports,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong while fetching your reports",
    });
  }
};

export const getReportById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const report = await Report.findOne({
      _id: id,
      userId: req.user._id,
      isDeleted: false,
    });

    if (!report) {
      return res.status(404).json({
        message: "Report not found",
      });
    }

    res.status(200).json({
      message: "Report fetched successfully!",
      data: report,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

export const deleteReport = async (req, res, next) => {
  try {
    const { id } = req.params;

    const report = await Report.findOne({
      _id: id,
      userId: req.user._id,
      isDeleted: false,
    });

    if (!report) {
      return res.status(404).json({
        message: "Report not found",
      });
    }

    report.isDeleted = true;
    await report.save();

    res.status(200).json({
      message: "report deleted successfully!",
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
