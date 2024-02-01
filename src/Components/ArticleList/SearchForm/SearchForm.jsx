export const SearchForm = ({onSubmit}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(event.target.elements.search.value);
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