const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ msg: "User does not exist." });
  res.status(200).json(user);
};

exports.createUser = async (req, res) => {
  const body = req.body;
  if (!body.firstName || !body.lastName || !body.email || !body.gender) {
    return res.status(400).json({ msg: "All required fields must be filled." });
  }

  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
    jobTitle: body.jobTitle
  });

  res.status(201).json({ msg: "User created successfully.", result });
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true, runValidators: true
    });
    if (!user) return res.status(404).json({ msg: "User does not exist." });
    res.status(200).json({ msg: "User updated successfully.", user });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ msg: "User does not exist." });
  res.status(200).json({ msg: "User deleted successfully." });
};
