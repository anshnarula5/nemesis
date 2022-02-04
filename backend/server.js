const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const adminRoutes = require("./routes/admin.js");
const userRoutes = require("./routes/user.js");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(
    "mongodb+srv://ansh:ansh123@cluster0.zwujh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("Mongoose running"))
  .catch((err) => console.log("Mongoose Error : ", err));

const app = express();

app.use(express.json({ extended: true }));
app.use(cors());

app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
