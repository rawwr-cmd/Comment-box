import React from "react";
import ReactDOM from "react-dom/client";
import CommentDetails from "./CommentDetails";
import ApproveCard from "./ApproveCard";
import { faker } from "@faker-js/faker";

const App = () => {
  return (
    <div className="ui container comments">
      <h3 className="ui dividing header">Comments</h3>
      <ApproveCard>
        <div>
          <h4>Warning!</h4>
          Are you sure to do this?
        </div>
      </ApproveCard>
      <ApproveCard>
        <CommentDetails
          author="akshay"
          timeago="a year ago"
          comment="this is great"
          src={faker.image.avatar()}
        />
      </ApproveCard>
      <ApproveCard>
        <CommentDetails
          author="Rahul"
          timeago="6 months ago"
          comment="this is great"
          src={faker.image.avatar()}
        />
      </ApproveCard>
      <ApproveCard>
        <CommentDetails
          author="Vinayaka"
          timeago="3 months ago"
          comment="this is great"
          src={faker.image.avatar()}
        />
      </ApproveCard>
      <ApproveCard>
        <CommentDetails
          author="Danish"
          timeago="a day ago"
          comment="this is great"
          src={faker.image.avatar()}
        />
      </ApproveCard>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
