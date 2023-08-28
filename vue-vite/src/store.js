import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  filmsList: [],
  searchText: "",
});
//title, original_title, original_language, vote_average

export function filterFilms(searchText) {
  store.filmsList = [];

  fetchFilms(
    `https://api.themoviedb.org/3/discover/movie?api_key=5b12a2b80ff5a258c5bf9900c0ad169d&${searchText.toLowerCase()}`
  );
  console.log("test2");
};

export function fetchFilms(nextUrl) {
  const url = nextUrl ?? "https://api.themoviedb.org/3/discover/movie?api_key=5b12a2b80ff5a258c5bf9900c0ad169d";

  axios
    .get(url).then((response) => {
      store.cards = response.data.title;
    });
}

//5b12a2b80ff5a258c5bf9900c0ad169d