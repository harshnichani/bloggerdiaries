const express = require("express");
const mongoose = require("mongoose");
const homeroute = require("./routes/homeroute");
const blogroute = require("./routes/blogroute");

// Make instance from express
const app = express();

// Port config
const PORT = process.env.PORT || 4000;

// Middleware for passing the data from post request to the post handler
app.use(express.urlencoded({ extended: true }));

// DB Connect URI
const dbUri = process.env.MONGO_URI;

// Establish connection to the mongodb database
// listening for request only after database connection is successful
mongoose
	.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		app.listen(PORT);
		console.log("Connected to DB successfully");
	})
	.catch((err) => console.log(err));

// Register view engine
app.set("view engine", "ejs");

// ROUTES

// *** Home Routes ***
app.use(homeroute);

// *** About Route ***
app.get("/about", (req, res) => {
	res.render("about", { title: "About" });
});

// *** Blog Routes ***
app.use("/blogs", blogroute);

// *** 404 or Not Found Pages ***
app.use((req, res) => {
	res.render("error", { title: "Not Found" });
});

// *** END ***
