<template>
  <div class="wrapper">
    <Banner />
    <div class="container mt-5 mb-5 bg-black">
      <div class="row justify-content-md-center">
        <div class="col-12 col-lg-10">
            <div class="movie__content-wrap movie--content py-5">
              <template v-if="movie.charactersData.length && movie.planetsData.length && movie.starshipsData.length && movie.vehiclesData.length && movie.speciesData.length">

                <h1 class="movie__card-title main-heading card-title text-center text-uppercase">{{ movie.title }}</h1>

                <div class="meta mt-5 mb-5">
                  <p class="mb-0"><strong class="text-white">Episode: </strong>{{ movie.episode_id }}</p>
                  <p class="mb-0"><strong class="text-white">Release date: </strong>{{ movie.release_date }}</p>
                  <p class="mb-0"><strong class="text-white">Director: </strong>{{ movie.director }}</p>
                  <p class="mb-0"><strong class="text-white">Producer: </strong>{{ movie.producer }}</p>
                </div>

                <h5 class="fs-6 text-white text-uppercase">Description:</h5>
                <p class="mt-4 mb-5">{{ movie.opening_crawl }}</p>

                <Lists listTitle="Characters" :listObject="movie.charactersData" />
                <Lists listTitle="Planets" :listObject="movie.planetsData" />
                <Lists listTitle="Starships" :listObject="movie.starshipsData" />
                <Lists listTitle="Vehicles" :listObject="movie.vehiclesData" />
                <Lists listTitle="Species" :listObject="movie.speciesData" />

                <button class="btn btn-outline-warning btn-lg mt-3 rounded-0" @click="goBack()">Back to list</button>

              </template>
              <template v-else>
                <Loader />
              </template>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Loader from '@/components/Loader.vue'
import Banner from '@/components/Banner.vue'
import Lists from '@/components/Lists.vue'
export default {
  name: 'MovieDetails',
  components: {
    Loader,
    Banner,
    Lists
  },
  props: 
  {
    id: String,
  },
  data(){
    return {
      movie: {
        charactersData: [],
        planetsData: [],
        starshipsData: [],
        vehiclesData: [],
        speciesData: [],
      },
    }
  },
  methods: {
    goBack() {
      this.$router.push({ path: '/' });
    },
  },
  mounted() {
    window.scrollTo(0, 0),
    axios.get('api/films/'+this.id)
      .then(response => {
        this.movie = response.data;

        // Fetch character data for each character URL
        const characterPromises = this.movie.characters.map(characterUrl => axios.get(characterUrl));

        // Wait for all character data requests to complete
        Promise.all(characterPromises)
        .then(characterResponses => {
          this.movie.charactersData = characterResponses.map(response => response.data);
        })
        .catch(error => {
          console.error(error);
        });

        // Fetch character data for each character URL
        const planetPromises = this.movie.planets.map(planetUrl => axios.get(planetUrl));

        // Wait for all planet data requests to complete
        Promise.all(planetPromises)
        .then(planetResponses => {
          this.movie.planetsData = planetResponses.map(response => response.data);
        })
        .catch(error => {
          console.error(error);
        });

                // Fetch starship data for each starship URL
        const starshipPromises = this.movie.starships.map(starshipUrl => axios.get(starshipUrl));

        // Wait for all starship data requests to complete
        Promise.all(starshipPromises)
        .then(starshipResponses => {
          this.movie.starshipsData = starshipResponses.map(response => response.data);
        })
        .catch(error => {
          console.error(error);
        });

        // Fetch vehicles data for each vehicles URL
        const vehiclePromises = this.movie.vehicles.map(vehicleUrl => axios.get(vehicleUrl));

        // Wait for all vehicle data requests to complete
        Promise.all(vehiclePromises)
          .then(vehicleResponses => {
            this.movie.vehiclesData = vehicleResponses.map(response => response.data);
          })
          .catch(error => {
            console.error(error);
        });

        // Fetch species data for each species URL
        const speciePromises = this.movie.species.map(specieUrl => axios.get(specieUrl));

        // Wait for all specie data requests to complete
        Promise.all(speciePromises)
          .then(specieResponses => {
            this.movie.speciesData = specieResponses.map(response => response.data);
          })
          .catch(error => {
            console.error(error);
        });

      })
      .catch(error => {
        console.log(error);
      });
  },
};
</script>