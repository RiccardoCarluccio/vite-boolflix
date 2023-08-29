import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  filmsList: [],
  searchText: "",
});
//title, original_title, original_language, vote_average

export function filterFilms() {
  store.filmsList = [];

  fetchFilms(
    "https://api.themoviedb.org/3/search/movie"
  );
  console.log("test2");
};

export function fetchFilms(url) {
  //const url = nextUrl ?? "https://api.themoviedb.org/3/discover/movie?api_key=5b12a2b80ff5a258c5bf9900c0ad169d";

  axios
    .get(url, {
      params: {
        api_key: "5b12a2b80ff5a258c5bf9900c0ad169d",
        query: store.searchText,
      },
      }).then((response) => {
      //store.filmsList = response.data.results;
      store.filmsList.push(...response.data.results);
    });
    console.log(store.filmsList);
}

//5b12a2b80ff5a258c5bf9900c0ad169d
//?api_key=5b12a2b80ff5a258c5bf9900c0ad169d&query${searchText}

//params: filtro{}
//axios params