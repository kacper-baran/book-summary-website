<template>
	<button v-if="!link" :class="[mode]">
		<slot></slot>
	</button>
	<router-link v-else :to="to" :class="[mode]">
		<slot></slot>
	</router-link>
</template>

<script setup>
const props = defineProps({
	mode: {
		type: String,
		required: false,
		default: "flat",
	},
	link: {
		type: Boolean,
		default: false,
	},
	to: {
		type: String,
	},
});
</script>

<style lang="scss" scoped>
button,
a {
	display: inline-block;
	text-align: center;
	border: 2px solid;
	padding: 0.8rem 2.4rem;
	border-radius: 50px;
	font-size: 1rem;
	transition: border 0.3s, background-color 0.3s;
	color: var(--color-text);

	&.flat {
		border-color: var(--color-border);
		background-color: var(--button-background-color);
		color: var(--color-text);
		&:hover {
			border-color: var(--button-background-color-accent);
			background-color: var(--button-background-color-accent);
		}
	}
	&.accent {
		background-color: #48dfe3;
		font-weight: 700;
		border: 2px solid;
		border-color: var(--color-border-hover);
		&:hover {
			border-color: var(--button-background-color-accent-hover);
			background-color: var(--button-background-color-accent-hover);
		}
	}
	&.delete {
		border-color: red;
		background-color: var(--button-background-color);
		color: red;
		&:hover {
			background-color: red;
			color: black;
		}
	}
}
</style>
