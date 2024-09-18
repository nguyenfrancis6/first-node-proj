// app file

const express = require('express');
const userRouter = require('./routes/userRoutes');
const path = require('node:path');

const app = express();

// application-level middlewares, will always execute on every incoming requests
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// parses form payloads and sets it to the `req.body`
app.use(express.urlencoded({ extended: false }));

const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
]

const users = ["Rose", "Cake", "Biff"]

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

app.get("/about", (req, res) => {
  res.render("about", { links: links, users: users });
});

app.use((req, res, next) => {
  // You can of course also create your own for your own use-case!
  // Just make sure to call `next`
  next();
})

// base mount path is `/users` and will always execute on that specific mount path, and yes including `/users/a/b/c`
app.use('/users', userRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
