import "./app.module.css";
import Header from "../header";
import Sidebar from "../sidebar";
import Input from "../input-panel";

export default function App() {
  const style = { display: "flex" };
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Input placeholder='add text'/>
      </div>
    </div>
  );
}
