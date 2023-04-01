const { response } = require("express");
const OPENAI_API_KEY = "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";
const OPENAI_API_KEY = "Enter Api Key";
const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const app = express();
@@ -11,11 +11,6 @@ const configuration = new Configuration({
});
const openai = new OpenAIApi(configuration);

app.get("/ping", (req, res) => { 
  res.json({
    message: "pong",
  });
});

app.post("/chat", (req, res) => {
  const question = req.body.question;
@@ -28,8 +23,8 @@ app.post("/chat", (req, res) => {
      temperature: 0,
    })
    .then((response) => {
      console.log({ response });
      return response?.data?.choices?.[0]?.text;
      // console.log({ response });
      return response.data.choices[0].text;
    })
    .then((answer) => {
      console.log({ answer });
