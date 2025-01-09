import "./App.scss";

import Navbar from "component/navbar";
import Sidebar from "component/sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section>
        <Sidebar />
      </section>
    </div>
  );
}

export default App;
