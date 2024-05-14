<script setup lang="ts">
  import type { MovieDetails } from '~/types';

  const route = useRoute();
  const id = route.params.id;
  const { data } = await useFetch<MovieDetails>(`https://www.omdbapi.com/?apikey=2356a083&i=${id}`, {
    // server: false,
  });

  watch(data, () => {
    console.log('watch teh data', data.value)
  })
</script>

<template>
  <Container>
    <div class="movie-details">
      <div class="movie-details__poster">
        <img :src="data?.Poster" alt="" />
      </div>
      <div>
        <h2>Title: {{ data?.Title }}</h2>
        <p>Plot: {{ data?.Plot }}</p>
        <p>Year: {{ data?.Year }}</p>
        <p>Type: {{ data?.Type }}</p>
        <p>Rating: {{ data?.imdbRating }}</p>
        <p>Genre: {{ data?.Genre }}</p>
        <p>Runtime: {{ data?.Runtime }}</p>
        <p>Director: {{ data?.Director }}</p>
        <p>Actors: {{ data?.Actors }}</p>
        <p>Language: {{ data?.Language }}</p>
        <p>Awards: {{ data?.Awards }}</p>
        <p>Country: {{ data?.Country }}</p>
      </div>

    </div>
  </Container>
</template>

<style scoped lang="scss">
  .movie-details {
    margin: 20px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;

    &__poster {
      margin: 20px auto;
      img {
        aspect-ratio: 3/2;
      }
    }
  }

</style>