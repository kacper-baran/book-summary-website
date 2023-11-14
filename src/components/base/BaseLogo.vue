<template>
	<div class="logo-container">
		<router-link :to="to" class="logo">
			<img src="../../assets/img/logo-1.svg" alt="logo" />
			Booker
		</router-link>
	</div>
</template>

<script setup>
const props = defineProps({
	to: {
		type: Object || String,
		required: true,
	},
});
</script>

<style lang="scss" scoped>
.logo-container {
	.logo {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.25em;
		font-size: 1.5rem;
	}
	img {
		height: 30px;
		transition: rotate 0.3s;
	}
	&:hover img {
		rotate: 75deg;
	}
}

@media (min-width: 768px) {
	.logo-container {
		.logo {
			font-size: 2rem;
		}
		img {
			height: 40px;
		}
	}
}
</style>
