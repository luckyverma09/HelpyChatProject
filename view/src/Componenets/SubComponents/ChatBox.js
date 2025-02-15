import { useRef, useState } from "react";
import "../../CSS/ChatBox.css";
import axios from "axios";
import data from "../../Assest/ques.json";

const YOU = "you";
const AI = "ai";

function ChatBox() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  const inputRef = useRef();
  const [qna, setQna] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateQNA = (from, value) => {
    setQna((qna) => [...qna, { from, value }]);
  };

  const handleSend = () => {
    const question = inputRef.current.value;
    updateQNA(YOU, question);

    setLoading(true);
    axios
      .post("http://localhost:4000/chat", {
        question,
      })
      .then((response) => {
        updateQNA(AI, response.data.answer);
      })
      .finally(() => {
        setLoading(false);
      });

    // add the new search question to the JSON file
    // const newQuestion = { ques: question };
    // data.push(newQuestion);

    // // save the updated JSON file
    // const jsonData = JSON.stringify(data, null, 2);
    // const fs = require("fs");
    // fs.writeFile("./src/Assest/ques.json", jsonData, (err) => {
    //   if (err) throw err;
    //   console.log("The file has been saved!");
    // });

    
  };

  const renderContent = (qna) => {
    const value = qna.value;

    if (Array.isArray(value)) {
      return value.map((v) => <p className="message-text">{v}</p>);
    }

    return <p className="message-text">{value}</p>;
  };
  return (
    <main class="container">
      <div class="chats">
        {qna.map((qna) => {
          if (qna.from === YOU) {
            return (
              <div class="send chat">
                <p>{renderContent(qna)}</p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/924/924874.png"
                  alt=""
                  class="sendavtar"
                />
              </div>
            );
          }
          return (
            <div class="recieve chat">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6819/6819755.png"
                alt=""
                class="reciveavtar"
              />
              <p>{renderContent(qna)}</p>
            </div>
          );
        })}

        {loading && (
          <div class="recieve chat">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6819/6819755.png"
              alt=""
              class="reciveavtar"
            />
            <p>Typing...</p>
          </div>
        )}
      </div>
      <div className="serch-container">
        <div class="chat-input">
          <input
            type="text"
            ref={inputRef}
            value={value}
            onChange={onChange}
            class="form-control col"
            placeholder="Ask Something..."
          />
          <button
            disabled={loading}
            classNameName="chat-button"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
        <div classNameName="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.ques.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 5)
            .map((item) => (
              <div
                onClick={() => onSearch(item.ques)}
                classNameName="dropdown-row"
                key={item.ques}
              >
                {item.ques}
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}

export default ChatBox;
