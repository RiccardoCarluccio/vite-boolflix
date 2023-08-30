<script>
  import { store, filterFilms } from "../store";

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
  <div class="header-container">
    <input type="text" id="search-field" name="search-field" placeholder="Search film" v-model="store.searchText"/>
    <button type="button" @click="filterFilms">Search</button>
  </div>
</template>

<style scoped lang="scss">
  .header-container {
    padding: 1rem 0.1rem;
  }
</style>