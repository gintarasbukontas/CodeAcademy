import User from "./models/User.js";
import Comment from "./models/Comment.js";

export async function addUser(req, res) {
  const { name, email } = req.body;

  const newUser = new User({
    name,
    email,
  });

  await newUser.save();

  res.json(newUser);
}

export async function addComment(req, res) {
  const { user_id, date, comment } = req.body;

  const newComment = new Comment({
    user_id,
    date,
    comment,
  });

  await newComment.save();

  res.json(newComment);
}

export async function getUsers(req, res) {
  const users = await User.find({});

  res.json(users);
}

export async function getComments(req, res) {
  const comments = await Comment.find({});

  res.json(comments);
}

export async function deleteCommentById(req, res) {
  const { id } = req.params;
  const deletedComment = await Comment.findByIdAndDelete(id);

  res.json(deletedComment);
}
