<script setup lang="ts">
const title = ref('Kontaktieren Sie uns')

useSeoMeta({
  title,
  description: 'Contact page',
})
</script>

<template>
  <div class="uk-section uk-section-default uk-section-large">
    <div class="uk-container">
      <div class="uk-grid-margin" data-uk-grid>
        <div class="uk-flex-auto uk-width-1-1@m">
          <h1 class="uk-text-center">{{ title }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>
