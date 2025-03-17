function FilterButtons({ filter, setFilter }) {
  return (
    <div className="flex justify-center space-x-2 mb-6">
      <button
        onClick={() => setFilter("all")}
        className={`px-4 py-1.5 rounded-md text-sm font-medium ${
          filter === "all"
            ? "bg-indigo-600  shadow-sm"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        } transition duration-200`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`px-4 py-1.5 rounded-md text-sm font-medium ${
          filter === "active"
            ? "bg-indigo-600  shadow-sm"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        } transition duration-200`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`px-4 py-1.5 rounded-md text-sm font-medium ${
          filter === "completed"
            ? "bg-indigo-600  shadow-sm"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        } transition duration-200`}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;
