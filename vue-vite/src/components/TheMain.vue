<script>
  import { store, filterFilms } from "../store";
  import Card from "./Card.vue";

  export default {
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

</style>