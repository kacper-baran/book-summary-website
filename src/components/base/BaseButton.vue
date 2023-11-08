<template>
	<button :class="[mode]">
		<slot></slot>
	</button>
</template>

<script setup>
const props = defineProps(["mode"]);
</script>

<style lang="scss" scoped>
button {
	background-color: var(--button-background-color);
	border: 2px solid;
	border-color: var(--color-border);
	color: var(--color-text);
	padding: 0.8rem 2.4rem;
	border-radius: 50px;
	font-size: 1.1rem;
	transition: border 0.3s, background-color 0.3s;
	&.accent {
		background-color: #48dfe3;
		font-weight: 700;
		border: 2px solid;
		border-color: var(--color-border-hover);
		&:hover {
			border: 2px solid;
			border-color: var(--button-background-color-accent-hover);
			background-color: var(--button-background-color-accent-hover);
		}
	}
	&:hover {
		background-color: #48dfe3;
		border: 2px solid #48dfe3;
	}
}
</style>
