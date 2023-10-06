<script setup lang="ts">
const title = ref('Fußboden verlegen vom Fachmann')

useSeoMeta({
  title,
  description: 'This is the about page',
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
