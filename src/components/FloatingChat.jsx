import { useMemo, useState } from "react";
import { IoChatbubbleEllipsesOutline, IoCloseOutline, IoSend } from "react-icons/io5";
import profileImage from "../assets/5.jpg";

const defaultReplies = [
  "Hi! I'm Mackey. I can help you explore this portfolio.",
  "You can ask about projects, stacks, or contact details.",
  "Try asking: 'Show your frontend stack' or 'How can I contact Mackey?'",
];

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm Mackey. Ask me anything about this portfolio.",
    },
  ]);

  const reply = useMemo(() => {
    return (text) => {
      const normalized = text.toLowerCase();

      if (normalized.includes("contact") || normalized.includes("email")) {
        return "You can contact Mackey via email: ninomarkzaspa27@gmail.com.";
      }

      if (normalized.includes("project")) {
        return "You can check recent work in the Projects section, or tap 'View All' to see more.";
      }

      if (normalized.includes("stack") || normalized.includes("tech")) {
        return "Mackey works with React, Vue, Node.js, Laravel, PHP, and modern frontend tooling.";
      }

      return defaultReplies[Math.floor(Math.random() * defaultReplies.length)];
    };
  }, []);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", content: reply(trimmed) }]);
      setIsTyping(false);
    }, 700);

    setInput("");
  };

  return (
    <div className="fixed right-4 bottom-4 z-50">
      {isOpen ? (
        <div className="w-[min(22rem,calc(100vw-2rem))] h-[28rem] rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl overflow-hidden p-2 flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Mackey AI avatar"
                  className="w-8 h-8 rounded-full object-cover border border-gray-200 dark:border-gray-700"
                />
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white dark:ring-gray-900" />
              </div>
              <div className="leading-tight">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Chat with Mackey</h4>
                <p className="text-[11px] text-green-600 dark:text-green-400">Online</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Close chat"
            >
              <IoCloseOutline className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-end gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" ? (
                  <img
                    src={profileImage}
                    alt="Mackey"
                    className="w-6 h-6 rounded-full object-cover border border-gray-200 dark:border-gray-700"
                  />
                ) : null}
                <div
                  className={`text-sm px-3 py-2 rounded-lg max-w-[85%] ${
                    msg.role === "user"
                      ? "bg-white text-black border border-gray-200"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isTyping ? (
              <div className="flex items-end gap-2">
                <img
                  src={profileImage}
                  alt="Mackey AI"
                  className="w-6 h-6 rounded-full object-cover border border-gray-200 dark:border-gray-700"
                />
                <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-sm px-3 py-2 rounded-lg">
                  Mackey is typing...
                </div>
              </div>
            ) : null}
          </div>

          <div className="p-3 border-t border-gray-200 dark:border-gray-700 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Ask Mackey..."
              className="flex-1 h-9 px-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-950 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="button"
              onClick={sendMessage}
              className="h-10 w-10 rounded-full border border-slate-900/10 bg-[linear-gradient(135deg,#1f2937,#020617)] shadow-[0_10px_24px_rgba(15,23,42,0.28)] hover:scale-105 hover:shadow-[0_14px_30px_rgba(15,23,42,0.34)] active:scale-100 transition-all duration-200 flex items-center justify-center"
              aria-label="Send message"
            >
              <IoSend className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="mt-3 ml-auto min-h-11 px-4 rounded-full bg-white hover:bg-gray-50 border border-gray-200 shadow-[0_10px_30px_rgba(15,23,42,0.12)] flex items-center gap-2 text-black"
        aria-label="Open chat with Mackey"
      >
        <IoChatbubbleEllipsesOutline className="w-4 h-4 text-black shrink-0" />
        <span className="text-xs font-semibold leading-none whitespace-nowrap text-black">
          Chat with Mackey
        </span>
      </button>
    </div>
  );
};

export default FloatingChat;
