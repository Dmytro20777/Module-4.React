export const SearchForm = ({onSearch}) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(event.target.elements.search.value)
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Search articles..."
      />
      <button>Search</button>
    </form>
  )
}