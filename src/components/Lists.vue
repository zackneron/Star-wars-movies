<template>
	<div class="mt-4 mb-4 border-top border-dark">
	    <h5 class="fs-6 mb-4 mt-3 text-white text-uppercase">{{listTitle}}:</h5>
	    <ul class="lists">
	      <li v-for="movie in listObject" :key="movie.url">
	        {{ movie.name }}
	      </li>
	    </ul>
	</div>
</template>
<script>
	export default {
		props: {
			listTitle: String,
			listObject: Object
		}
	}
</script>