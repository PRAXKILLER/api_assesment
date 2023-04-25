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
    const users=await userModel.find({}).sort({id:1});
    
    let result=[];
    for(let i=0;i<users.length;i++)
    {
        
        if((users[i].last_name.charAt(0) == 'M') && (users[i].email.indexOf(users[i].last_name.toLowerCase())!=-1)&&(users[i].quote.length>15))
        result.push(users[i]);
    }
    
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
    const users=await userModel.find({});
    let cities={};
    
    for(let i=0;i<users.length;i++){
        let key=users[i].city;
        if(cities[key]){
            cities[key].user+=1;
            cities[key].ti+=users[i].income;
        }
        else
        {
            cities[key] = {'user':1,'ti':users[i].income};
        }
    }
    const result = []
    Object.keys(cities).forEach((key) => result.push({...cities[key],city:key,income:cities[key].ti/cities[key].user}));
    result.sort((a,b) => b.user-a.user)


    return res.status(200).json({ status: "Success", result: result.slice(0,10)});
  } catch (error) {
      console.log(error);
    return res.status(400).json({ status: "failure", error: error.message });
  }
};
module.exports = { task1, task2, task3, task4, task5 };
