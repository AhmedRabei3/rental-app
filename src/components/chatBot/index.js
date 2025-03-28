import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./chatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { FaRobot } from "react-icons/fa";
import "./Chatbot.css";

const ChatbotComponent = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="chatbot-container">
      {showChat && (
        <div className="chatbot">
          <i onClick={() => setShowChat(!showChat)} className="bi bi-x"></i>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={new ActionProvider()}
          />
        </div>
      )}
      <button className="chatbot-btn" onClick={() => setShowChat(!showChat)}>
        <FaRobot />
      </button>
    </div>
  );
};

export default ChatbotComponent;
