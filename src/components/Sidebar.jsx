import { Link } from 'react-router-dom';
import { useState } from 'react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleClose = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-0 left-0 uppercase w-full text-center dark:bg-[#2e3952] bg-[#0f172a] text-[#f8fafc] font-bold py-3 border border-[#f8fafc] z-50"
      >
        {isOpen ? (
          <h3 className="uppercase">Close</h3>
        ) : (
          <h3 className="uppercase">Table of Contents</h3>
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`w-90 top-0 left-0 h-full fixed bg-[#2e3952] dark:bg-[#0f172a] text-[#f8fafc] py-8 overflow-y-auto z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 md:w-90 w-full' : '-translate-x-full'
        } md:translate-x-0 md:flex md:flex-col md:block`}
      >
        <button
          onClick={toggleSidebar}
          className="md:hidden fixed top-0 left-0 uppercase w-full text-center dark:bg-[#2e3952] bg-[#0f172a] text-[#f8fafc] font-bold py-3 border border-[#f8fafc] z-50"
        >
          {isOpen && <h3 className="uppercase">Close</h3>}
        </button>

        <div className="flex flex-col items-center mb-6 mt-10 md:mt-0 px-4">
          <h2 className="text-lg uppercase text-center pb-6">
            <strong>
              Effect of inductive and deductive methods of teaching on secondary
              school students' achievement in mathematics.
            </strong>
          </h2>
          <p className="uppercase w-70 text-center dark:bg-[#2e3952] bg-[#0f172a] text-[#f8fafc] font-bold py-2 border border-[#f8fafc] rounded-full">
            F. J Osideko
          </p>
        </div>

        <nav className="flex flex-col font-bold gap-6 px-6">
          <Link to="/" className="menu" onClick={handleClose}>
            Title Page
          </Link>
          <Link to="/certification" className="menu" onClick={handleClose}>
            Certification
          </Link>
          <Link to="/approval" className="menu" onClick={handleClose}>
            Approval
          </Link>
          <Link to="/dedication" className="menu" onClick={handleClose}>
            Dedication
          </Link>
          <Link to="/acknowledgement" className="menu" onClick={handleClose}>
            Acknowledgement
          </Link>
          <Link to="/abstract" className="menu" onClick={handleClose}>
            Abstract
          </Link>
          <Link to="/introduction" className="menu" onClick={handleClose}>
            Introduction
          </Link>
          <Link to="/literature-review" className="menu" onClick={handleClose}>
            Literature Review
          </Link>
          <Link to="/methodology" className="menu" onClick={handleClose}>
            Methodology
          </Link>
          <Link to="/data-analysis" className="menu" onClick={handleClose}>
            Data Analysis
          </Link>
          <Link to="/conclusion" className="menu" onClick={handleClose}>
            Conclusion
          </Link>
          <Link to="/references" className="menu" onClick={handleClose}>
            References
          </Link>
          <a
            className="menu"
            href="/Appendix I.pdf"
            target="_blank"
            onClick={handleClose}
          >
            Appendix I
          </a>
          <a
            className="menu"
            href="/Appendix II.pdf"
            target="_blank"
            onClick={handleClose}
          >
            Appendix II
          </a>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
