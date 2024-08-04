import express from "express";
import layouts from "express-ejs-layouts";
import * as homeController from "./controllers/homeController.js";

const app = express();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(layouts);
app.use(express.static("./public"));

app.get("/", homeController.showHomePage);
app.get("/courses", homeController.showCoursesPage);
app.get("/instructors", homeController.showInstructorsPage);
app.get("/login", homeController.showLogInPage);
app.get("/signup", homeController.showSignUpPage);
app.get("/courses/:course", homeController.showEnrolledPage);
app.post("/login", homeController.postLogin);
app.post("/signup", homeController.postSignup);

app.listen(app.get("port"), () => {
  console.log(`Server running on http://localhost:${app.get("port")}`);
});
