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
        <Route path="/approval" element={<Approval />} />
        <Route path="/history-wo" element={<HistoryWO />} />
      </Routes>
    </>
  );
}

export default App;
