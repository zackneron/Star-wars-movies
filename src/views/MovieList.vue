<template>
  <div class="wrapper">
    <div class="container mb-5">
      <div class="row">
        <div class="col-12 mt-5 mb-5">
          <h1 class="text-center text-uppercase main-heading">Watch Movies Online</h1>
        </div>
      </div>
      <div class="row g-0">
        <template v-if="movies.length">
          <template v-for="movie in movies" :key="movie.episode_id">
            <div class="movie-bg col-12 col-sm-6 col-lg-4 pa-0 ma-0">
              <div class="card rounded-0">
                <div class="row g-0 movie-bg">
                  <div class="col-12 movie--image"></div>
                  <div class="col-12">
                    <div class="card-header">
                      <p class="card-text text-center"><small class="text-body-secondary">Release Date: {{ movie.release_date }}</small></p>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title text-uppercase text-center mb-0">{{ movie.title }}</h5>                      
                    </div>
                    <div class="card-footer text-center py-3">
                      <router-link class="btn fs-6 fw-bold text-uppercase btn-warning btn-lg rounded-0" :to="{name: 'MovieDetails', params: {id: movie.episode_id}}">
                        Learn More
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </template>
        <template v-else>
          <div class="movie__content-wrap movie--content">
              <Loader />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Loader from '@/components/Loader.vue'

export default {
  name: 'MovieList',
  components: {
    Loader
  },
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    window.scrollTo(0, 0),
    axios.get('https://swapi.dev/api/films')
    .then(response => {
      this.movies = response.data.results;
    })
    .catch(error => {
      console.log(error);
    });
  }
};
</script>