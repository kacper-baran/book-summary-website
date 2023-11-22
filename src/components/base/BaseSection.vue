<template>
	<section :class="[bg]" :id="id">
		<div :data-type="width">
			<slot></slot>
		</div>
	</section>
</template>

<script setup>
const props = defineProps(["bg", "width", "id"]);
</script>

<style lang="scss" scoped>
div {
	max-width: 60rem;
	margin-inline: auto;
	&[data-type="narrow"] {
		max-width: 55rem;
	}
	&[data-type="wide"] {
		max-width: 75rem;
	}
	&[data-type="full-bleed"] {
		max-width: 100%;
	}
}

section {
	padding-block: 6em;
	padding-inline: 2em;

	&.light-grey {
		background-color: var(--color-background-grey);
	}
	&.white {
		background-color: var(--color-background);
	}
}
</style>
