import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true }, // Unique identifier from Clerk
  email: { type: String, required: true }, // Email from Clerk
  name: { type: String }, // User's name
  avatar: { type: String }, // URL to the user's profile picture
  firstName: { type: String }, // User's first name
  lastName: { type: String }, // User's last name
});

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

export { UserModel, UserSchema };
