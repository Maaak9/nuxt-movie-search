<script setup lang="ts">
import type { Movie } from '~/types';

  const props = defineProps<{
    movie: Movie
  }>()

  const test = '1111'
  const link = `/movies/${props.movie.imdbID}`;
</script>

<template>
  <NuxtLink :to=link>
    <div class="card">
      <div class="card-container">
        <img :src="movie.Poster" alt="">
        <h2>{{ movie.Title }}</h2>
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss">
  a {
    text-decoration: none;
    color: white;
  }

  .card {
    border: 1px solid #1F2021;
    border-radius: 4px;
    height: 100%;
    transition: all .3s ease;

    &:hover {
      transform: scale(1.05);
    }

    &-container {
      padding: 10px;
    }

    img {
      aspect-ratio: 2/3;
      width: 100%;
      object-fit: cover;
    }
  }
</style>