import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Title from './pages/Title';
import Abstract from './pages/Abstract';
import Acknowledgement from './pages/Acknowledgement';
import Approval from './pages/Approval';
import Certification from './pages/Certification';
import Dedication from './pages/Dedication';
import Introduction from './pages/Introduction';
import LiteratureReview from './pages/LiteratureReview';
import Methodology from './pages/Methodology';
import DataAnalysis from './pages/DataAnalysis';
import Conclusion from './pages/Conclusion';
import References from './pages/References';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="md:ml-90 p-6 w-full bg-[#f1f5f9] dark:bg-[#1e293b] text-[#0f172a] dark:text-[#f1f5f9] min-h-screen">
          <div className="container max-w-7xl mx-auto py-14">
            <Routes>
              <Route path="/" element={<Title />} />
              <Route path="/abstract" element={<Abstract />} />
              <Route path="/acknowledgement" element={<Acknowledgement />} />
              <Route path="/approval" element={<Approval />} />
              <Route path="/certification" element={<Certification />} />
              <Route path="/dedication" element={<Dedication />} />
              <Route path="/introduction" element={<Introduction />} />
              <Route path="/literature-review" element={<LiteratureReview />} />
              <Route path="/methodology" element={<Methodology />} />
              <Route path="/data-analysis" element={<DataAnalysis />} />
              <Route path="/conclusion" element={<Conclusion />} />
              <Route path="/references" element={<References />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
