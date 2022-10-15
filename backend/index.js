const express = require("express");
require("dotenv").config();
require("./config/db.config");

const app = express();
app.use(express.urlencoded({ extended: true }));

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
