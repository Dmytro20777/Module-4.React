import { useEffect, useState } from "react";
import { ArticleList } from "./Components/ArticleList/ArticleList";
import { fetchArticlesWithTopic } from "./articles-api";
import { SearchForm } from "./Components/ArticleList/SearchForm/SearchForm";
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const [quary, setQuary] = useState("");
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  const onSubmit = async (topic) => {
    setPage(1);
    setQuary(topic);
    setArticles([]);
    setLoading(false);
    setError(true);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  }

useEffect(() => {
  if (quary === "") {
    return;
  }

  async function fetchData() {
    try {
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(quary, page);
      setArticles((prevArticles) => [prevArticles, ...data]);
      setArticles(data);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  fetchData();
}, [quary, page]);



  return (
    <div>
      <h2>
        Articles
      </h2>

      <SearchForm onSubmit={onSubmit} />

      {error && <b>Error! {loading ? 'Reloading page...' : 'Error loading articles'}</b>}
      
      {articles.length === 0 && !loading && !error && <b>No articles found</b>}

      {articles.length > 0 && (<ArticleList items={articles} />)}

      {loading && (<b>Loading...</b>)}
      
      {articles.length > 0 && !loading && (<button onClick={handleLoadMore}>Load more</button>)}

      
      <Toaster position="bottom-center" />
      
    
    </div>
  )
}