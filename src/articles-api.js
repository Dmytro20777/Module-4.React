import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1"

export async function fetchArticlesWithTopic() {
    const response = await axios("/search?query=react");
    return response.data.hits
}