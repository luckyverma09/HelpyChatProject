const { response } = require("express");
const OPENAI_API_KEY = "Enter Api Key";
const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


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
      // console.log({ response });
      return response.data.choices[0].text;
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

app.listen(port, () => {
  console.log("Server is listening on port :",  port);
});
