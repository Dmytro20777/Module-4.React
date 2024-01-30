
import { useState } from "react";
import { ArticleList } from "./Components/ArticleList/ArticleList";
import { fetchArticlesWithTopic } from "./articles-api"
import { SearchForm } from "./Components/ArticleList/SearchForm/SearchForm";


export const App = () => {
	const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

	const handleSearch = async (topic) => {
    try {
			setArticles([]);
			setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {loading && (<p>Зачекайте...</p>)}
      {error && (<p>Помилка.Перезавантаж сторінку!</p>)}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};