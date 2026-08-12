import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5003;
console.log("MONGO_URI:", process.env.MONGO_URI);

// middleware
app.use(express.json());
app.use(express.static("views"));
app.use("/uploads", express.static("uploads"));

// routes
app.use("/api/posts", postRoutes);

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
