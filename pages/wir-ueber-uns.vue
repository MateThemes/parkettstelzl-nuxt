<script setup lang="ts">
const title = ref('Wir über uns')

useSeoMeta({
  title,
  description: 'Entdecken Sie die Geschichte und das Know-how von Parkett Stelzl, dem Parkett- und Bodenleger Ihres Vertrauens in München. Mit über 90 Jahren Erfahrung liefern wir handwerkliche Qualität für alle Ihre Bodenbeläge.',
})
</script>

<template>
	<section class="uk-section-default uk-section uk-section-large">
		<div class="uk-position-relative">
			<div class="uk-container uk-container-large">
				<div class="uk-grid-margin" data-uk-grid>
					<div class="uk-flex-auto uk-width-1-1@m">
						<h1 data-uk-parallax="y: 0,-75; media: @m;" class="uk-margin-large-right">Unsere Liebe zu natürlichen Werkstoffen und zu unserem Handwerk lässt uns jeden Tag aufs Neue Herausragendes umsetzen.</h1>
					</div>
				</div>
			</div>
			<div class="tm-section-title uk-position-top-right uk-position-medium uk-margin-remove-vertical uk-visible@l">
				<div class="tm-rotate-180">Wir über uns</div>
			</div>
		</div>
	</section>
</template>