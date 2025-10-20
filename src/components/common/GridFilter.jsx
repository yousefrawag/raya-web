import React from 'react'
import { MdViewList, MdViewModule } from "react-icons/md";

const GridFilter = ({ CurrentView, setCurrentView }) => {
  return (
    <div className="mb-2 flex justify-end gap-4">
      {/* List View */}
      <button
        onClick={() => setCurrentView("module")}
        className={`p-2   rounded-lg transition-colors cursor-pointer ${
          CurrentView === "module" ? "bg-amber-500 text-white" : "bg-gray-50 text-gray-400 hover:text-gray-600"
        }`}
      >
        <MdViewList size={24} />
      </button>

      {/* Grid View */}
      <button
        onClick={() => setCurrentView("list")}
        className={`p-2 rounded-lg  transition-colors cursor-pointer ${
          CurrentView === "list" ? "bg-amber-500 text-white" : "bg-gray-50 text-gray-400 hover:text-gray-600"
        }`}
      >
        <MdViewModule size={24} />
      </button>
    </div>
  )
}

export default GridFilter
