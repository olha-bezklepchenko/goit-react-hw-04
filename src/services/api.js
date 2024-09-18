import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const myApiKey = "e8QJlpvoYOkzAb4I8erJIzKcbb52FDDff3lklNTfXzA";

export const fetchPhotos = async () => {
  const { data } = await axios.get("/search/photos", {
    params: {
      query: "fox",
      page: 1,
      per_page: 10,
      client_id: myApiKey,
      orientation: "landscape",
    },
  });

  return data.results;
};
