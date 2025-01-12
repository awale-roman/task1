import { useEffect, useRef, useState } from "react";

const useWebSocket = (url) => {
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef(null);

  useEffect(() => {
    // Create WebSocket connection
    const socket = new WebSocket(url);
    socketRef.current = socket;

    // Handle open event
    socket.onopen = () => {
      setIsConnected(true);
      console.log("WebSocket connected");
    };

    // Handle message event
    socket.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    // Handle close event
    socket.onclose = () => {
      setIsConnected(false);
      console.log("WebSocket disconnected");
    };

    // Handle error event
    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // Cleanup on unmount
    return () => {
      socket.close();
    };
  }, [url]);

  // Function to send a message
  const sendMessage = (message) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      console.log(message);
      socketRef.current.send(message);
    } else {
      console.error("WebSocket is not connected.");
    }
  };

  return { messages, isConnected, sendMessage };
};

export default useWebSocket;
