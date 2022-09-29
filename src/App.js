import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { EventPage } from "./pages/EventPage";
import { CreatePage } from "./pages/CreatePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/event" element={<EventPage />} />
      <Route path="/create" element={<CreatePage />} />
    </Routes>
  );
}

export default App;
