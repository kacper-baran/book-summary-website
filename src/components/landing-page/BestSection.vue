<template>
	<base-section bg="light-grey" id="best">
		<base-heading>
			<template #title>Why are we </template>
			<template #span>the best?</template>
			<template #text>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
				laudantium!
			</template>
		</base-heading>
		<div class="container">
			<div class="card">
				<IconCheckbox :size="48"></IconCheckbox>
				<h3>Easy to understand</h3>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Quae saepe asperiores autem commodi doloribus nihil!
				</p>
			</div>
			<div class="card">
				<IconUsers :size="48"></IconUsers>
				<h3>Community</h3>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Porro libero obcaecati, aliquam possimus cupiditate optio!
				</p>
			</div>
			<div class="card">
				<IconServerBolt :size="48"></IconServerBolt>
				<h3>Large database</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Debitis eius laborum nulla adipisci esse fugiat.
				</p>
			</div>
		</div>
	</base-section>
</template>

<script setup>
import NewsLetter from "./NewsLetter.vue";
import { IconCheckbox, IconUsers, IconServerBolt } from "@tabler/icons-vue";
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
	gap: 3rem;
}
.card {
	text-align: center;
	max-width: 300px;
	margin-inline: auto;
	& > *:where(:not(:first-child)) {
		margin-top: 1rem;
	}
}

@media (min-width: 768px) {
	.container {
		flex-direction: row;
	}
}
</style>
