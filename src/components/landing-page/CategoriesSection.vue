<template>
	<base-section bg="white" width="wide">
		<base-heading>
			<template #title>Learn from Books Worth </template>
			<template #span>Your Time</template>
			<template #text
				>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Ipsam, placeat vero, rem eligendi magnam eius quod laudantium
				modi cum nulla nobis ducimus minus commodi nesciunt laborum
				officia autem veritatis! Doloremque.</template
			>
		</base-heading>
		<div class="container">
			<base-card>
				<IconReportAnalytics></IconReportAnalytics>
				<span>Management & Leadership</span>
			</base-card>
			<base-card>
				<IconCoinEuro></IconCoinEuro>
				<span>Business</span>
			</base-card>
			<base-card>
				<IconPlant></IconPlant>
				<span>Entrepreneurship</span>
			</base-card>
			<base-card>
				<IconWallet></IconWallet>
				<span>Money $ Finance</span>
			</base-card>
			<base-card>
				<IconTrophy></IconTrophy>
				<span>Career & Success</span>
			</base-card>
			<base-card>
				<IconBrandSpeedtest></IconBrandSpeedtest>
				<span>Productivity</span>
			</base-card>
			<base-card>
				<IconHeartShare></IconHeartShare>
				<span>Health & Well-Being</span>
			</base-card>
			<base-card>
				<IconMessages></IconMessages>
				<span>Communication</span>
			</base-card>
		</div>
		<p>And many more categories.</p>
		<p>Explore all the categories you can learn from!</p>
		<base-button link to="/auth/signup">Explore Categories</base-button>
	</base-section>
</template>

<script setup>
import {
	IconReportAnalytics,
	IconCoinEuro,
	IconPlant,
	IconWallet,
	IconTrophy,
	IconBrandSpeedtest,
	IconHeartShare,
	IconMessages,
} from "@tabler/icons-vue";
</script>

<style lang="scss" scoped>
section {
	text-align: center;
}

.card {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5em;
	width: 100%;
	height: 80px;
	font-size: 1rem;
}
.container {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
	place-items: center;
	gap: 1em;
	text-align: center;
}
p {
	color: var(--color-text);
}
p:first-of-type {
	margin-top: 2em;
}
p:last-of-type {
	margin-bottom: 1em;
}
</style>
