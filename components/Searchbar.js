const SearchBar = ({ value, onChange }) => (
  <div className="flex justify-center my-8">
    <input
      type="text"
      placeholder="Search for a breed..."
      value={value}
      onChange={onChange}
      className="w-1/2 p-3 rounded-full border border-gray-300 shadow-md text-lg focus:outline-none"
    />
  </div>
);

export default SearchBar;
