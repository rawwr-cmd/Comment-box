import React from "react";
import ReactDOM from "react-dom/client";
import { faker } from "@faker-js/faker";

const App = () => {
  return (
    <div className="ui container comments">
      <h3 className="ui dividing header">Comments</h3>
      <div className="comment">
        <a className="avatar">
          <img alt="" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a className="author">Matt</a>
          <div className="metadata">
            <span className="date">Today at 5:42PM</span>
          </div>
          <div className="text">How artistic!</div>
          <div className="actions">
            <a className="reply">Reply</a>
          </div>
        </div>
      </div>
      <div className="comment">
        <a className="avatar">
          <img alt="" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a className="author">Elliot Fu</a>
          <div className="metadata">
            <span className="date">Yesterday at 12:30AM</span>
          </div>
          <div className="text">
            <p>This has been very useful for my research. Thanks as well!</p>
          </div>
          <div className="actions">
            <a className="reply">Reply</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
