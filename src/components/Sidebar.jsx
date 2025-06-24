import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(location.pathname);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleClose = (path) => {
    setActiveMenu(path);
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  const menuItems = [
    { path: "/", name: "Title Page" },
    { path: "/certification", name: "Certification" },
    { path: "/approval", name: "Approval" },
    { path: "/dedication", name: "Dedication" },
    { path: "/acknowledgement", name: "Acknowledgement" },
    { path: "/abstract", name: "Abstract" },
    { path: "/introduction", name: "Chapter One: Introduction" },
    { path: "/literature-review", name: "Chapter Two: Literature Review" },
    { path: "/methodology", name: "Chapter Three: Methodology" },
    { path: "/data-analysis", name: "Chapter Four: Data Analysis" },
    { path: "/conclusion", name: "Chapter Five: Conclusion" },
    { path: "/references", name: "References" }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-0 left-0 uppercase w-full text-center dark:bg-[#2e3952] bg-[#0f172a] text-[#f8fafc] font-bold py-3 border border-[#f8fafc] z-50"
      >
        {isOpen ? 'Close' : 'Table of Contents'}
      </button>

      {/* Sidebar */}
      <div
        className={`w-90 top-0 left-0 h-full fixed bg-[#2e3952] dark:bg-[#0f172a] text-[#f8fafc] py-8 overflow-y-auto z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 md:w-90 w-full' : '-translate-x-full'
        } md:translate-x-0 md:flex md:flex-col md:block`}
      >
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
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`menu ${activeMenu === item.path ? 'text-[#64748b] font-900 underline' : ''}`}
              onClick={() => handleClose(item.path)}
            >
              {item.name}
            </Link>
          ))}
          <a
            className={`menu ${activeMenu === '/appendix-i' ? 'text-[#64748b] font-900 underline' : ''}`}
            href="/Appendix I.pdf"
            target="_blank"
            onClick={() => handleClose('/appendix-i')}
          >
            Appendix I
          </a>
          <a
            className={`menu ${activeMenu === '/appendix-ii' ? 'text-[#64748b] font-900 underline' : ''}`}
            href="/Appendix II.pdf"
            target="_blank"
            onClick={() => handleClose('/appendix-ii')}
          >
            Appendix II
          </a>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;