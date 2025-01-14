import { createContext, useContext, useRef, useState } from "react";
import apiRequest from "../lib/apiRequest";

const AiContext = createContext();

const AiProvider = ({ children }) => {
    const lastMsg = useRef();
    const [messageText, setMessageText] = useState("");
    const [messages, setMessages] = useState([
      {
        from: "ai",
        text: "Hi there! I'm you AI assistant, I'm here to help you out with your questions. Ask me anything you want.",
      },
    ]);
    const [processing, setProcessing] = useState(false);
  
    const handleSubmission = async () => {
      if (!messageText || processing) return;
  
  
      const tempMessages = [
        ...messages,
        {
          from: "human",
          text: messageText,
        },
      ];
  
      setMessages(tempMessages);
      setMessageText("");
  
      setTimeout(() =>
        lastMsg.current.scrollIntoView({
          behavior: "smooth",
        })
      );
  
      try {
        setProcessing(true);
        const res = await apiRequest.post('/ai', { message: messageText }); 
        setProcessing(false);
  
        const data = await res.json();
        console.log(data);
        const ans = data.data;
  
        setMessages((prev) => [
          ...prev,
          {
            from: "ai",
            text: ans,
          },
        ]);
      } catch (err) {
        const error = "Error Proceesing this message. Please try in sometime";
        setMessages((prev) => [
          ...prev,
          {
            from: "ai",
            text: error,
          },
        ]);
      }
  
      setTimeout(() =>
        lastMsg.current.scrollIntoView({
          behavior: "smooth",
        })
      );
    };
  
    return (
      <AiContext.Provider
        value={{
          lastMsg,
          messageText,
          setMessageText,
          processing,
          setProcessing,
          messages,
          setMessages,
          handleSubmission,
        }}
      >
        {children}
      </AiContext.Provider>
    );
  };
  
  export default AiProvider;
  
  export const useGlobalContext = () => {
    return useContext(AiContext);
  };
