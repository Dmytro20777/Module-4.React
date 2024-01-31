import { useState, useEffect } from "react";
import { ArticleList } from "./Components/ArticleList/ArticleList";
import { fetchArticlesWithTopic } from "./articles-api";
import { SearchForm } from "./Components/ArticleList/SearchForm/SearchForm";


export const App = () => {

  const [articels, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
      }
      catch {
      setError(true);
      }
      finally {
      setLoading(false);
      }
  }


  return (
    <div>
      <h1>
        Articels
      </h1>
      <SearchForm onSearch={ handleSearch } />

      {loading && (<p>Зачекай....</p>)}
      {error && (<p>Ой.Щось пішло не так. Перезавантаж сторінку.</p>)}
      {articels.length > 0 && (<ArticleList items={articels} />)}
    </div>
  )
}