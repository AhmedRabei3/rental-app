import { getOpenAIResponse } from "../openaiService";

const MessageParser = async ({ message, actionProvider }) => {
  if (!message.trim()) return;
  const botResponse = await getOpenAIResponse(message);
  actionProvider.handleResponse(botResponse);
};

export default MessageParser;
