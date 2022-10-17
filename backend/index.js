const express = require("express");
require("dotenv").config();
require("./config/db.config");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ strict: false }));
app.use(express.static("public"));

const authRoutes = require("./routes/auth.routes");
const offerRoutes = require("./routes/offers.routes");
const userRoutes = require("./routes/users.routes");

app.use("/auth", authRoutes);
app.use("/offers", offerRoutes);
app.use("/users", userRoutes);

app.listen(process.env.PORT, (err) => {
  if (err) console.log(err);
  console.log(`server running on port ${process.env.PORT}`);
});
