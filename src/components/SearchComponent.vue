<template>
  <div class="min-h-screen bg-base-100 p-4 md:p-8">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <header class="text-center mb-8">
        <h1 class="text-2xl md:text-3xl font-bold text-primary">Article Search</h1>
        <p class="text-sm text-base-content/70 mt-1">Find and highlight keywords in articles</p>
      </header>

      <!-- Search Input -->
      <div class="form-control mb-6">
        <div class="relative">
          <input
            v-model="searchQuery"
            @input="debounceSearch"
            type="text"
            placeholder="Search articles..."
            class="input input-bordered w-full pr-12 input-primary"
          />
          <!-- Icons Container -->
          <div class="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center">
            <!-- Search Icon -->
            <svg
              v-if="!searchQuery"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-base-content/50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <!-- Clear Button -->
            <button
              v-else
              @click="clearSearch"
              class="btn btn-circle btn-ghost btn-xs !min-h-0 !h-5 !w-5 flex items-center justify-center"
              aria-label="Clear search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Articles count -->
      <div v-if="searchQuery" class="mb-4">
        <p class="text-sm text-base-content/70">
          {{ filteredArticles.length }} article{{ filteredArticles.length !== 1 ? 's' : '' }}
        </p>
      </div>

      <!-- Articles -->
      <div v-if="filteredArticles.length > 0" class="space-y-4">
        <article
          v-for="article in filteredArticles"
          :key="article.id"
          class="card bg-base-100 shadow-sm border border-base-200"
        >
          <div class="card-body p-4">
            <h2 class="card-title text-lg font-bold" v-html="highlightText(article.title)"></h2>
            <div v-html="highlightText(article.content)"></div>
          </div>
        </article>
      </div>

      <!-- No Articles -->
      <div v-else-if="searchQuery" class="text-center py-10">
        <div class="inline-block p-3 rounded-full bg-warning/10 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-warning"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 class="text-lg font-bold">No articles found</h3>
        <p class="text-sm text-base-content/70 mt-1">Try different keywords</p>
      </div>

      <!-- Initial State -->
      <div v-else class="text-center py-10">
        <div class="inline-block p-3 rounded-full bg-primary/10 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <h3 class="text-lg font-bold">Search our knowledge base</h3>
        <p class="text-sm text-base-content/70 mt-1">Type keywords to find relevant articles</p>
      </div>
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

    const clearSearch = () => {
      searchQuery.value = '';
      if (debounceTimer) {
        window.clearTimeout(debounceTimer);
        debounceTimer = null;
      }
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
      
      const escapedQuery = searchQuery.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escapedQuery})`, 'gi');
      return text.replace(regex, '<mark class="bg-warning text-warning-content px-1 rounded">$1</mark>');
    };

    return {
      searchQuery,
      filteredArticles,
      debounceSearch,
      highlightText,
      clearSearch
    };
  }
});
</script>