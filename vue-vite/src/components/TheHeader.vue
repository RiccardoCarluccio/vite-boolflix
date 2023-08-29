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
  <input type="text" id="search-field" name="search-field" placeholder="Search film" v-model="store.searchText"/>
  <button type="button" @click="filterFilms">Search</button>
</template>

<style scoped lang="scss">

</style>