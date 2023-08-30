<script>
  import { store, filterFilms } from "../store";
  import Card from "./Card.vue";

  export default {
    components: {
      Card,
    },
    data() {
      return {
        store,
      }
    },
    methods: {
      filterFilms,
    },
  };
</script>

<template>
  <div class="main-content-container">

    <div class="film-container" v-for="film in store.filmsList" :key="film.id">
      <Card :card="film"></Card>
    </div>

  </div>
</template>

<style scoped lang="scss">

  .main-content-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.1rem;
  }
  .film-container {
    background-color: oklch(70% 0.141 306);
    height: 300px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    border-radius: 5px;
  }
</style>