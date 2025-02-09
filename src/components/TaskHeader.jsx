import React from "react";

function TaskHeader({ theme, onDueDateClick, isSortingByDueDate }) {
  const themeTextColor =
    theme === "dark" || theme === "green" ? "text-white" : "text-gray-800";
  const headerBackground =
    theme === "dark"
      ? "bg-gray-900"
      : theme === "green"
      ? "bg-cyan-900"
      : "bg-white";
  const borderColor =
    theme === "dark" ? "border-gray-600" : "border-gray-300";
    
  const getDueDateStyles = () => {
    const baseStyles = "flex-none w-[89px] text-center flex items-center justify-center h-6 rounded-md mr-[22px] transition-all duration-200 cursor-pointer";
    
    if (isSortingByDueDate) {
      // Active state styles based on theme
      switch (theme) {
        case "dark":
          return `${baseStyles} bg-gray-700 text-orange-400 border-2 border-orange-400 shadow-lg`;
        case "green":
          return `${baseStyles} bg-teal-200 text-orange-600 border-2 border-orange-500 shadow-lg`;
        default:
          return `${baseStyles} bg-orange-700 text-white border-2 border-black shadow-lg`;
      }
    }
    
    // Inactive state styles based on theme
    switch (theme) {
      case "dark":
        return `${baseStyles} bg-gray-800 text-orange-400 hover:bg-gray-700`;
      case "green":
        return `${baseStyles} bg-teal-100 text-orange-600 hover:bg-teal-200`;
      default:
        return `${baseStyles} bg-orange-600 text-white hover:bg-orange-700`;
    }
  };

  return (
    <div
      className={`w-full whitespace-nowrap ${headerBackground} border-b ${borderColor} pt-1`}
    >
      <div className={`flex items-center text-sm font-semibold ${themeTextColor}`}>
        {/* Urgency */}
        <span className="flex-none w-[100px] text-left ml-10 flex items-center">
          Urgency ❗
        </span>

  {/* Task Details */}
  <span className="flex-grow ml-6 flex items-center  ">
  📜
        </span>

        {/* Task Details */}
        <span className="flex-grow  ml-5 flex items-center ">
          Task Details 📝
        </span>

        {/* Due Date - Now a clickable button */}
        <button
          onClick={onDueDateClick}
          className={getDueDateStyles()}
        >
          Due⏱️ Date
        </button>

        {/* Perfect */}
        <span className="flex-none w-[100px] text-center mr-[-35px] flex items-center justify-center">
          Perfect ⭐
        </span>

        {/* Task Owner */}
        <span className="flex-none w-[200px] text-center flex items-center justify-center mr-[-46px]">
          Assigned to 🙋🏻‍♂️
        </span>

        {/* Task Age */}
        <span className="flex-none w-[100px] text-right flex items-center justify-end mr-[133px]">
          Task Age🗓️
        </span>
      </div>
    </div>
  );
}

export default TaskHeader;