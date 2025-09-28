<template>
  <div>
    <input 
      v-model="searchQuery" 
      @input="debounceSearch"
      placeholder="Search articles..."
    />
    
    <div v-if="searchQuery && filteredArticles.length === 0">
      No results found.
    </div>
    
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
    const DEBOUNCE_DELAY = 300;
    let debounceTimer: number | null = null;

    const debounceSearch = () => {
      if (debounceTimer) {
        window.clearTimeout(debounceTimer);
      }
      debounceTimer = window.setTimeout(() => {
        // Computed property will auto-update
      }, DEBOUNCE_DELAY);
    };

    const filteredArticles = computed(() => {
      if (!searchQuery.value.trim()) return [];
      
      const query = searchQuery.value.toLowerCase();
      return ARTICLES.filter(article => 
        article.title.toLowerCase().includes(query) || 
        article.content.toLowerCase().includes(query)
      );
    });

    return {
      searchQuery,
      filteredArticles,
      debounceSearch
    };
  }
});
</script>