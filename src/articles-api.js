import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export const fetchArticlesWithTopic = async (topic, page) => {
    const response = await axios.get("/search", {
        params: {
            query: topic.split('/')[1],
            page: page,
            hitsPerPage: 10
        }
    });

    return response.data.hits;
}
