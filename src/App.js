import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Console } from "./features/Console/Console";
import { DataSource } from "./features/DataSourceView/DataSource";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Console />} />
        <Route path="/data-source" element={<DataSource />} />
      </Routes>
    </div>
  );
}
