import Membership from "../models/Membership.js";

export async function createMembership(req, res) {
  const { name, price, description } = req.body;

  const newMembership = new Membership({
    name,
    price,
    description,
  });

  await newMembership.save();

  res.json(newMembership);
}

export async function getMemberships(req, res) {
  const memberships = await Membership.find({}).sort({ price: 1 });

  res.json(memberships);
}

export async function deleteMembershipById(req, res) {
  const { id } = req.params;
  const deletedMembership = await Membership.findByIdAndDelete(id);

  res.json(deletedMembership);
}
