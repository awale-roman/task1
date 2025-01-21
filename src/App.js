import "./App.scss";

import { useEffect, useState } from "react";

import AdditionalInput from "component/additionalInput";
import InputPanel from "component/inputPanel";
import Navbar from "component/navbar";
import OutputPanel from "component/outputPanel";
import Sidebar from "component/sidebar";

function App() {
  const [socket, setSocket] = useState("");
  const [code, setCode] = useState("");
  const [additionalInput, setAdditionalInput] = useState("");
  const [output, setOutput] = useState([]);
  const [language, setLanguage] = useState("javascript");
  const [isSocketRunning, setIsSocketRunning] = useState(false);

  const handleSend = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      const messageToSend = {
        command: additionalInput ? "input" : "run",
        code: code,
        language: language,
        input: additionalInput,
      };
      socket.send(JSON.stringify(messageToSend));
      setOutput("");
      setAdditionalInput("");
    }
  };

  const handleStop = () => {
    socket.send(JSON.stringify({ command: "stop" }));
    setIsSocketRunning(false);
  };

  useEffect(() => {
    const ws = new WebSocket("wss://compiler.skillshikshya.com/ws/compiler/");
    setSocket(ws);

    ws.onopen = () => {
      console.log("Socket Connected");
      setIsSocketRunning(true);
    };

    ws.onmessage = (event) => {
      const messageData = JSON.parse(event.data);
      setOutput((prev) => [...prev, messageData?.data]);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="App">
      <Navbar
        onHandleRun={handleSend}
        onHandleStop={handleStop}
        setLanguage={setLanguage}
        language={language}
        isSocketRunning={isSocketRunning}
      />
      <section>
        <Sidebar setLanguage={setLanguage} />
        <InputPanel code={code} setCode={setCode} />
        <div>
          <AdditionalInput
            additionalInput={additionalInput}
            setAdditionalInput={setAdditionalInput}
          />
          <OutputPanel output={output} setOutput={setOutput} />
        </div>
      </section>
    </div>
  );
}

export default App;
