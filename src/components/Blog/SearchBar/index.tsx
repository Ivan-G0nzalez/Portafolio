function SearchBar({ value, handleSearchKey, clearSearch, formSubmit }: any) {
  return (
    <div className="bg-gray-100 w-fit mt-2.5 mr-auto mb-4 ml-auto rounded-lg border p-1">
      <form className="flex items-center" action="" onSubmit={formSubmit}>
        <input
          type="text"
          onChange={handleSearchKey}
          placeholder="Search By Category"
          value={value}
          className="dark:subtitle"
        />
        {value && (
          <span
            className="pr-0.5 cursor-pointer text-stone-400 text-xl mb-0.5"
            onClick={clearSearch}
          >
            x
          </span>
        )}
        <button
          type="button"
          className="px-3 py-0.5 rounded-md bg-sky-600 text-white "
        >
          Go
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
