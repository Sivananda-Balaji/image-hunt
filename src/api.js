import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 6Nq0cRzpW0II_4Qwuw5FEKqlEi3ZRLZo30cFnuoC6fs",
    },
    params: {
      query: term || "cars",
    },
  });
  return response.data.results;
};

export default searchImages;
