import "./App.scss";

import DataPanel from "component/dataPanel";
import Navbar from "component/navbar";
import Sidebar from "component/sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section>
        <Sidebar />
        <DataPanel />
      </section>
    </div>
  );
}

export default App;
