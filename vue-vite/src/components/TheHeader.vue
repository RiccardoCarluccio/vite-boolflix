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
  <input type="text" id="search-field" name="search-field" placeholder="Search film"/>
  <button type="button" @click="filterFilms">Search</button>
</template>

<style scoped lang="scss">

</style>