import React from "react";
import "./Card.css";

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="card-header">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            {item.name}
          </a>
          <span className="material-icons">launch</span>
        <div className="card-org">{item.org}</div>
      </div>
      <div className="card-body">
        <div className="card-description">{item.description}</div>
        <div className="card-tags">
          <span className="tag green">{item.type}</span>
          {item.tags && item.tags.map((tag, index) => (
            <span key={index} className="tag yellow">{tag}</span>
          ))}
        </div>
      </div>
      <div className="card-footer">
        <div className="card-detail">
          <span className="material-icons">event</span>
          {item.deadline}
        </div>
        {item.stipend && (
          <div className="card-detail">
            <span className="material-icons">payments</span>
            {item.stipend}
          </div>
        )}
        {item.location && (
          <div className="card-detail">
            <span className="material-icons">place</span>
            {item.location}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
