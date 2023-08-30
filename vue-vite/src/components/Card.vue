<script>
  export default {
    props: {
      card: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<template>
  <div class="film-preview">
    <img :src="`http://image.tmdb.org/t/p/w500/${card.poster_path}`" alt="">
  </div>
  <div class="film-details">
    <p></p>
  </div>
</template>

<style lang="scss">
  img {
    max-height: 100%;
    max-width: 100%;
  }
</style>