function FilterButtons({ filter, setFilter }) {
  return (
    <div className="flex justify-center space-x-2 mb-6">
      <button
        onClick={() => setFilter('all')}
        className={`px-3 py-1 rounded text-sm ${
          filter === 'all'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        } transition duration-200`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('active')}
        className={`px-3 py-1 rounded text-sm ${
          filter === 'active'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        } transition duration-200`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={`px-3 py-1 rounded text-sm ${
          filter === 'completed'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        } transition duration-200`}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterButtons; 