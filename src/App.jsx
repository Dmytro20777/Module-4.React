import { useState } from "react";
import { ArticleList } from "./Components/ArticleList/ArticleList";
import { fetchArticlesWithTopic } from "./articles-api";
import { SearchForm } from "./Components/ArticleList/SearchForm/SearchForm";

export const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  const onSubmit = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      <h2>
        Articles
      </h2>

      <SearchForm onSubmit={onSubmit} />

      {loading && (<b>Loading...</b>)}

      {error && <b>Error! {loading ? 'Reloading page...' : 'Error loading articles'}</b>}
      
      {articles.length === 0 && !loading && !error && <b>No articles found</b>}

      {articles.length > 0 && (<ArticleList items={ articles } />)}
    </div>
  )
}