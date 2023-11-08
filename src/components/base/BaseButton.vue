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
	background-color: transparent;
	border: 2px solid black;
	padding: .8rem 2.4rem;
	border-radius: 50px;
  font-size: 1.1rem;
	transition: border 0.3s, background-color 0.3s;
	&.accent {
		background-color: #48dfe3;
		font-weight: 700;
		border: 2px solid #48dfe3;
		&:hover {
			border: 2px solid #48afe3;
			background-color: #48afe3;
		}
	}
	&:hover {
		background-color: #48dfe3;
		border: 2px solid #48dfe3;
	}
}
</style>
