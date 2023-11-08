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
				<img
					src="../../assets/img/analytics.svg"
					alt="analytics icon" />
				<span>Management & Leadership</span>
			</base-card>
			<base-card>
				<img src="../../assets/img/money.svg" alt="money icon" />
				<span>Business</span>
			</base-card>
			<base-card>
				<img src="../../assets/img/arrow.svg" alt="arrow icon" />
				<span>Entrepreneurship</span>
			</base-card>
			<base-card>
				<img src="../../assets/img/banknote.svg" alt="banknote icon" />
				<span>Money $ Finance</span>
			</base-card>
			<base-card>
				<img src="../../assets/img/trophy.svg" alt="Tropy icon" />
				<span>Career & Success</span>
			</base-card>
			<base-card>
				<img src="../../assets/img/speedtest.svg" alt="speed icon" />
				<span>Productivity</span>
			</base-card>
			<base-card>
				<img src="../../assets/img/heart.svg" alt="Heart icon" />
				<span>Health & Well-Being</span>
			</base-card>
			<base-card>
				<img src="../../assets/img/messeges.svg" alt="messeges icon" />
				<span>Communication</span>
			</base-card>
		</div>
		<p>And many more categories.</p>
		<p>Explore all the categories you can learn from!</p>
		<base-button>Explore Categories</base-button>
	</base-section>
</template>

<script setup></script>

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
