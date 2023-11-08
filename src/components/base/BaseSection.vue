<template>
	<section :class="[bg]">
		<div :data-type="width">
			<slot></slot>
		</div>
	</section>
</template>

<script setup>
const props = defineProps(["bg", "width"]);
</script>

<style lang="scss" scoped>
div {
	padding-block: 6em;
	max-width: 60rem;
	margin-inline: auto;
	padding-inline: 1em;
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
	&.light-grey {
		background-color: rgb(240, 240, 240);
	}
	&.light-blue {
		background-color: #eed;
	}
	&.white {
		background-color: #fff;
	}
}
</style>
