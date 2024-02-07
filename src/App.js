import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateWO from "./pages/CreateWO";
import HistoryWoDetail from "./pages/HistoryWoDetail";
import CompleteWO from "./pages/CompleteWO";
import Approval from "./pages/Approval";
import HistoryWO from "./pages/HistoryWO";
import { listen } from "./redux/listener";
import { useEffect } from "react";
import ListWO from "./pages/ListWO";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";

function App() {
  useEffect(() => {
    listen();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<HomePage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/create-wo" element={<CreateWO />} />
        <Route path="/complete-createWO" element={<CompleteWO />} />
        <Route
          path="/history-wo/history-wo-detail/:id"
          element={<HistoryWoDetail />}
        />
        <Route path="/list-wo/approval/:id" element={<Approval />} />
        <Route path="/history-wo" element={<HistoryWO />} />
        <Route path="/list-wo" element={<ListWO />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
