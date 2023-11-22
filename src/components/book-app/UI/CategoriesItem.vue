<template>
	<ul>
		<li
			v-for="category in categories"
			:key="category"
			@click="$emit('getCategory', category)">
			<base-card>{{ category }}</base-card>
		</li>
	</ul>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["getCategory"]);

const categories = ref([
	"Economics",
	"Business",
	"Entrepreneurship",
	"Health",
	"Productivity",
	"Sales",
	"Psychology",
	"Self-improvement",
	"Communication",
	"Management / Leadership",
	"Motivation",
	"Money / Finance",
	"Relationships",
	"Spirituality",
	"Philosophy",
	"Career / Success",
	"Mental health",
]);
</script>

<style lang="scss" scoped>
ul {
	display: grid;
	grid-template-columns: repeat(9, 1fr);
	grid-template-rows: 1fr;
	overflow: scroll;
	gap: 0.7rem;
	margin-bottom: 1rem;
	padding: 1rem;
	li {
		.card {
			display: flex;
			min-width: 150px;
			justify-content: center;
			align-items: center;
			height: 100%;
			text-align: center;
			line-height: 1;
			cursor: pointer;
			&.active {
				scale: 1.05;
			}
		}
	}
}

@media (min-width: 990px) {
	ul {
		display: flex;
		flex-wrap: wrap;
		max-width: 70rem;
		margin-inline: auto;
		li {
			flex-basis: 0;
			.card {
				font-size: 1rem;
				height: 100%;
			}
		}
	}
}
</style>
