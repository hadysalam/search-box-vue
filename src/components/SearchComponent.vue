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
      <h3 v-html="highlightText(article.title)"></h3>
      <p v-html="highlightText(article.content)"></p>
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
      debounceTimer = window.setTimeout(() => {}, DEBOUNCE_DELAY);
    };

    const filteredArticles = computed(() => {
      if (!searchQuery.value.trim()) return [];
      
      const query = searchQuery.value.toLowerCase();
      return ARTICLES.filter(article => 
        article.title.toLowerCase().includes(query) || 
        article.content.toLowerCase().includes(query)
      );
    });

    const highlightText = (text: string): string => {
      if (!searchQuery.value.trim()) return text;
      
      // Escape special regex characters
      const escapedQuery = searchQuery.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escapedQuery})`, 'gi');
      return text.replace(regex, '<mark class="search-highlight">$1</mark>');
    };

    return {
      searchQuery,
      filteredArticles,
      debounceSearch,
      highlightText
    };
  }
});
</script>

<style scoped>
.search-highlight {
  background-color: yellow;
  color: black;
  padding: 0 2px;
  border-radius: 2px;
}
</style>