export const SearchForm = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(event.target.elements.topic.value);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="topic" placeholder="Search articles..." />
      <button type="submit">Search</button>
    </form>
  );
};
