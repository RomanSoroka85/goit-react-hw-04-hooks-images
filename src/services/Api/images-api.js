import axios from "axios";

const key = "18864788-659534fccb4bfac7e1ae65a8e";
axios.defaults.baseURL = "https://pixabay.com/api/";
const params = "image_type=photo&orientation=horizontal&per_page=12";

async function fetchImagesApi(query, page) {
  const {
    data: { hits },
  } = await axios.get(`?&q=${query}&page=${page}&key=${key}&${params}`);
  return hits;
}

export default fetchImagesApi;
