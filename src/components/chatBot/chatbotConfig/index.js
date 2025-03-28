import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../BotAvatar";

const botName = "أمين";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`مرحبًا! أنا ${botName}، كيف يمكنني مساعدتك اليوم؟`),
  ],
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
};

export default config;
