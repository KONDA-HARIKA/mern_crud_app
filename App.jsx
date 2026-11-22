import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import AddEditForm from "./AddEditForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<AddEditForm />} />
        <Route path="/update-post/:id" element={<AddEditForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
