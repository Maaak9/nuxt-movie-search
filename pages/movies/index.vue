<script setup lang="ts">
  import type { APISearchBody, Movie } from '~/types';
  import { debounce } from 'lodash';

  const route = useRoute();
  const isLoading = ref<boolean>(false);
  const movieResults = ref<Movie[]>([]);
  const errorMsg = ref<string>("");
  const totalResults = ref<number>(0);

  const searchTerm = ref<string>(route.query.s?.toString() || '');

  // TODO Add key to env variable
  const API_URL = 'https://www.omdbapi.com/?apikey=2356a083';


  watch(searchTerm, () => {
    debouncedSearch(searchTerm.value);
  })

  const debouncedSearch = debounce(async (searchTerm: string) => {
    errorMsg.value = "";
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('s', searchTerm);
    window.history.pushState('', '', '?' + urlParams.toString());

    if (searchTerm.length > 3) {
      isLoading.value = true;
      const { data } = await useFetch<APISearchBody>(API_URL, {
        server: false,
        query: {
          s: searchTerm,
        }
      });
  
      if (data.value?.Response === 'True') {
        if (data.value?.Search) {
          movieResults.value = data.value.Search;
        }
        if (data.value?.totalResults) {
          totalResults.value = parseInt(data.value.totalResults);
        }
      }
      else {
        errorMsg.value = data.value?.Error || 'Something went wrong';
      }
      isLoading.value = false;
    } else {
      movieResults.value = [];
      totalResults.value = 0;
    }
  }, 500);


  const loadMore = async () => {
    const { data } = await useFetch<APISearchBody>(API_URL, {
      query: {
        s: searchTerm,
        page: movieResults.value.length / 10 + 1
      }
    });

    if (data.value?.Search) {
      movieResults.value = [...movieResults.value, ...data.value.Search];
    }
  }

  if (searchTerm.value.length > 2) {
    // if we have a search term in query initially then we want to performe a initial search
    debouncedSearch(searchTerm.value);
  }

</script>

<template>
  <Container>
    <div>
      <div class="search">
        <PrimeIconField iconPosition="left">
          <PrimeInputIcon class="pi pi-search"> </PrimeInputIcon>
          <PrimeInputText v-model="searchTerm" placeholder="Search" />
        </PrimeIconField>
      </div>
      <p v-if="movieResults.length > 0">
        Total amount of hits: {{ totalResults }}
      </p>
      <h1 v-if="errorMsg">{{ errorMsg }}</h1>
      <h1 v-if="!errorMsg && !movieResults.length">
        Type something to search!
      </h1>
    </div>
    <div class="grid">
      <Card
        v-if="!isLoading"
        v-for="item in movieResults"
        :key="item.imdbID"
        :movie="item"
      />
      <PrimeSkeleton 
        v-if="isLoading"
        v-for="item in 20"
        :key="item"
        width="100%"
        height="400px"
      />
    </div>
    <div class="load-more" v-if="totalResults > movieResults.length">
      <PrimeButton @click="loadMore">Load more</PrimeButton>
    </div>
  </Container>
</template>

<style scoped lang="scss">
  .search {
    margin: 20px 0;
  }
  .grid {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px;
  }
  .load-more {
    display: flex;
    justify-content: center;

    button {
      margin: 40px 0;
    }
  }
</style>