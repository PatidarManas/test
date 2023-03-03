import { user } from "./usermodel.js";

export const getallusers = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getuser = async (req, res) => {
  try {
    const users = await user.findById(req.params.id);
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const deleteuser = async (req, res) => {
  try {
    await user.findOneAndDelete(req.params.id);
    // await user.deleteMany({})
    res.status(200).json("deleted");
  } catch (error) {
    res.status(400).json(error);
  }
};
export const updateuser = async (req, res) => {
  try {
    // const user = await user.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    //   userFindAndModify: true,
    // });
    const updatedResult = await user.findByIdAndUpdate(req.params.id,req.body,{new: true,});
    res.status(200).json(updatedResult);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const createuser = async (req, res, next) => {
  // if(!req.body.name){
  //     res.status(300).json("no name")
  //     next()
  // }
  console.log(req.body.body.name)
  try {
    const users = await user.create(req.body.body);

    res.status(201).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
};
