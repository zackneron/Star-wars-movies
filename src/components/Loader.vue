<template>
      <div class="text-center loader-container">
            <span class="loader">Loading</span>
      </div>
</template>
<script>
export default {
  name: 'Loader',
};
</script>
<style>
.loader-container {
  height: 60vh;
}
.loader{
  display: inline-block;
  text-align: center;
  line-height: 86px;
  text-align: center;
  position: relative;
  padding: 0 48px;
  font-size: 48px;
  color: var(--bright-text);
}
.loader:before, .loader:after {
  content: "";
  display: block;
  width: 15px;
  height: 15px;
  background: currentColor;
  position: absolute;
  animation: load .7s infinite alternate ease-in-out;
  top: 0;
}
.loader:after {
  top: auto;
  bottom: 0;
}
@keyframes load {
  0% {
    left: 0;
    height: 43px;
    width: 15px;
    transform: translateX(0)
  }
  50% {
    height: 10px;
    width: 40px
  }
  100% {
    left: 100%;
    height: 43px;
    width: 15px;
    transform: translateX(-100%)
  }
}
</style>