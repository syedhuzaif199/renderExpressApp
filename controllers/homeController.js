var users = [];

var featuredCourses = [
  {
    title: "Algorithms and Data Structures",
    link: "/courses/algo",
    description:
      "This course focuses on the study of advanced data structures and algorithms for solving problems efficiently and their theoretical behavior. " +
      "The course also includes study of network flow algorithms, NP completeness and backtracking.",
  },

  {
    title: "Web Development",
    link: "/courses/web",
    description:
      "By the end of this course you’ll be able to describe the structure and functionality of the world wide web, create static web pages" +
      " using HTML and CSS, select an appropriate web hosting service, and publish your webpages for the world to see. " +
      "Finally, you’ll be able to develop a working model for creating your own personal or business websites in the future and launch yourself on a" +
      " learning journey in web development.",
  },

  {
    title: "Data Science",
    link: "/courses/datascience",
    description:
      "This course covers bias-variance trade-off; training versus test error; overfitting; cross-validation; subset selection methods;" +
      " regularized approaches for linear/logistic regression: ridge and lasso; non-parametric regression: trees, bagging, random forests;" +
      " local regression and splines; generalized additive models; support vector machines; k-means and hierarchical clustering; and principal components analysis.",
  },
];

var allCourses = [
  ...featuredCourses,

  {
    title: "Cybersecurity",
    link: "/courses/cyber",
    description:
      "This course introduces the concepts and understanding of the field of computer security and how it relates to other areas of information technology." +
      " Topics include security threats, hardening systems, securing networks, cryptography and organizational security policies.",
  },

  {
    title: "Cloud Computing",
    link: "/courses/cloud",
    description:
      "In this course you’ll learn about essential characteristics of cloud computing and emerging technologies supported by cloud." +
      " You’ll explore cloud service models, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), Software as a Service (SaaS), and Public, Private, and Hybrid deployment models.",
  },
];

var instructors = [
  {
    name: "Jon Doe",
    description:
      "Jon Doe is an expert in teaching Algorithms an Data Structures, as well as Cryptography and Cybersecurity. He has an experience of 10 years of teaching at XYZ University.",
  },

  {
    name: "Jane Doe",
    description:
      "Jane Doe has been teaching at PQR College for the past five years. She specializes in applied Machine Learning and Data Science.",
  },

  {
    name: "Ana Bell",
    description:
      "Ana Bell has been an instrutor at Code Matters for the past 3 years. She is a senior developer at ABC Technologies and specializes in Cloud Computing and Web Development",
  },
];

export function showHomePage(req, res) {
  res.render("index", { featured: featuredCourses });
}

export function showCoursesPage(req, res) {
  res.render("courses", { courses: allCourses });
}

export function showInstructorsPage(req, res) {
  res.render("instructors", { instructors: instructors });
}

export function showLogInPage(req, res) {
  res.render("login", { message: "" });
}

export function showSignUpPage(req, res) {
  res.render("signup", { message1: "", message2: "" });
}

export function showEnrolledPage(req, res) {
  res.render("enrolled");
}

export function postLogin(req, res) {
  var user = {
    email: req.body.email,
    password: req.body.password,
  };

  var msg;
  if (user in users) {
    msg = "Log-in successful!";
  } else {
    msg = "Your account does not exist! Please sign up for an account!";
  }
  res.render("message", { message: msg });
}
export function postSignup(req, res) {
  "<h1>Sign up succe";
  var body = req.body;
  var user = {
    email: req.body.email,
    password: req.body.password1,
  };
  var msg;
  if (body.password1 !== body.password2) {
    msg = "Passwords do not match";
    res.render("signup", { message1: "", message2: msg });
  } else if (user in users) {
    msg = "User already exists!";
    res.render("signup", { message1: msg, message2: "" });
  } else {
    users.push(user);
    msg = "Sign up successful! Please proceed to the login page";
    res.render("message", { message: msg });
  }
}
