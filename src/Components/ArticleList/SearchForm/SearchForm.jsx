import toast from 'react-hot-toast';

export const SearchForm = ({ onSubmit }) => {

    const handleSubmit = (event) => {
        event.preventDefault();

        if (event.target.elements.search.value.trim() === "") {
            toast.error("EMPTY STRING!")
            return;
        }
    
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