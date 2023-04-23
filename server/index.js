const OPENAI_API_KEY = "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";
//
//
//
const bcrypt = require("bcryptjs");
const express = require("express");
const mongoose = require("mongoose");
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(express.json());
app.use(cors());

const mongoUrl = "mongodb://localhost:27017/mydatabase";
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

require("./userDetail");
const User = mongoose.model("UserInfo");

app.post("/Signup", async (req, res) => {
  const { fname, email, password } = req.body;

  // const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      fname,
      email,
      password                                // : encryptedPassword,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});



app.post("/chat", (req, res) => {
  const question = req.body.question;

  openai
    .createCompletion({
      model: "text-davinci-003",
      prompt: question,
      max_tokens: 4000,
      temperature: 0,
    })
    .then((response) => {
      return response.data.choices?.[0].text;
    })
    .then((answer) => {
      console.log({ answer });
      const array = answer
        ?.split("\n")
        .filter((value) => value)
        .map((value) => value.trim());

      return array;
    })
    .then((answer) => {
      res.json({
        answer: answer,
        propt: question,
      });
    });
  console.log({ question });
});

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
