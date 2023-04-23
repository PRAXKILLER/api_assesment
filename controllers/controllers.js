const userModel = require("../models/user");

const task1 = async (req, res) => {
  try {
    const result = await userModel.find({
      income: { $lt: 5 },
      $or: [{ car: "BMW" }, { car: "Mercedes-Benz" }],
    });
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json({ status: "Success", result: result });
  } catch (error) {
    return res.status(400).json({ status: "failure", error: error.message });
  }
};
const task2 = async (req, res) => {
  try {
    const result = await userModel.find({ phone_price: { $gt: 10000 } });
    return res.status(200).json({ status: "Success", result: result });
  } catch (error) {
    return res.status(400).json({ status: "failure", error: error.message });
  }
};
const task3 = async (req, res) => {
  try {
    const result = await userModel.find({
      last_name: /^M/,
      quote: { $regex: /.{15,}/ },
      email: { $regex: /^M/, $options: "i" },
    });
    return res.status(200).json({ status: "Success", result: result });
  } catch (error) {
    return res.status(400).json({ status: "failure", error: error.message });
  }
};

const task4 = async (req, res) => {
  try {
    const result = await userModel.find({
      car: { $in: ["BMW", "Mercedes-Benz", "Audi"] },
      email: { $not: /\d/ },
    });
    return res.status(200).json({ status: "Success", result: result });
  } catch (error) {
    return res.status(400).json({ status: "failure", error: error.message });
  }
};
const task5 = async (req, res) => {
  try {
    const result = await userModel.aggregate([
      {
        $group: {
          _id: "$city",
          total_users: { $sum: 1 },
          total_income: { $sum: "$income" },
        },
      },
      { $sort: { total_users: -1 } },
      { $limit: 10 },
      {
        $project: {
          _id: 1,
          average_income: { $divide: ["$total_income", "$total_users"] },
        },
      },
    ]);
    return res.status(200).json({ status: "Success", result: result });
  } catch (error) {
    return res.status(400).json({ status: "failure", error: error.message });
  }
};
module.exports = { task1, task2, task3, task4, task5 };
