<template>
  <div class="wrapper">
    <div class="container mt-5 mb-5">
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-10">
            <div class="loader-container text-center">
              <h2>404</h2>
              <h3>Page Not Found</h3>
              <button class="btn btn-outline-warning btn-lg mt-3" @click="goBack()">Back</button>      
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'NotFound',
  methods: {
    goBack() {
      this.$router.push('/');
    },
  },
};
</script>