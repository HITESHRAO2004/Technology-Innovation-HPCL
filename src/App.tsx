import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MaintenancePage from './pages/MaintenancePage';
import LogisticsPage from './pages/LogisticsPage';
import QualityPage from './pages/QualityPage';
import RDPage from './pages/RDPage';

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-slate-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-slate-50 to-sky-50">
            <Routes>
              <Route path="/" element={<MaintenancePage />} />
              <Route path="/logistics" element={<LogisticsPage />} />
              <Route path="/quality" element={<QualityPage />} />
              <Route path="/rd" element={<RDPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}