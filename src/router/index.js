import { createRouter, createWebHistory } from 'vue-router'
import MovieList from '@/views/MovieList.vue';
import MovieDetails from '@/views/MovieDetails.vue';
import NotFound from '@/views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MovieList,
      name: 'MovieList'
    },
    {
      path: '/movie/:id',
      component: MovieDetails,
      name: 'MovieDetails',
      props: true
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
