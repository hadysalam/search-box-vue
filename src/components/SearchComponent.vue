<template>
  <div>
    <input v-model="searchQuery" placeholder="Search..." />
    <div v-for="article in filteredArticles" :key="article.id">
      <h3>{{ article.title }}</h3>
      <p>{{ article.content }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { ARTICLES } from '../data/articles';

export default defineComponent({
  name: 'SearchComponent',
  setup() {
    const searchQuery = ref('');
    
    const filteredArticles = computed(() => {
      return ARTICLES;
    });

    return {
      searchQuery,
      filteredArticles
    };
  }
});
</script>