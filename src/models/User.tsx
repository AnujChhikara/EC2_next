import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  clerkUserId: { type: String, required: true, unique: true }, // Unique identifier from Clerk
  email: { type: String, required: true }, // Email from Clerk
  name: { type: String }, // User's name
  avatar: { type: String }, // URL to the user's profile picture
  createdAt: { type: Date, default: Date.now }, // Timestamp for user creation
  additionalData: { type: Object }, // Custom fields for your application
});

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

export { UserModel, UserSchema };
