<template>
  <div id="app">
    <SearchComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchComponent from './components/SearchComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    SearchComponent
  }
});
</script>