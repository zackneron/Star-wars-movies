<template>
	<div class="banner">
      <img src="@/assets/star-wars-bg.jpg" alt="banner image"  class="banner__image d-inline-block align-text-top">
    </div>
</template>
<script>
export default {
  name: 'Banner',
};
</script>
<style>
.banner {
  height: 500px;
  object-fit: cover;

  & .banner__image {
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
@media (min-width: 768px) {
  .banner {
    height: 300px;
  }
}
@media (min-width: 1024px) {
  .banner {
    height: 400px;
  }
}
</style>