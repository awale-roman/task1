import "./App.scss";

import InputPanel from "component/inputPanel";
import Navbar from "component/navbar";
import OutputPanel from "component/outputPanel";
import Sidebar from "component/sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section>
        <Sidebar />
        <InputPanel />
        <OutputPanel />
      </section>
    </div>
  );
}

export default App;
