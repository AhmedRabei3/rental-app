import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY, // تأكد من وضع المفتاح في env
  dangerouslyAllowBrowser: true, // مطلوب لتشغيله في المتصفح
});

export const getOpenAIResponse = async (message) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo", // يمكنك استخدام "gpt-3.5-turbo" أو غيره
      messages: [{ role: "user", content: message }],
      max_tokens: 150,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching OpenAI response:", error);
    return "عذرًا، حدث خطأ أثناء المعالجة. حاول مرة أخرى.";
  }
};
