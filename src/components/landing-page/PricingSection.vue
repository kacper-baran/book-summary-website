<template>
	<base-section bg="light-grey" width="wide" id="pricing">
		<base-heading>
			<template #title>Affordable & Simple </template>
			<template #span>Pricing</template>
			<template #text>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
				ad iure vero aut ullam in eius unde odio similique quisquam.
			</template>
		</base-heading>
		<div class="container">
			<base-card>
				<div class="heading">
					<h3>Annually <span>10$/mo</span></h3>
					<span>Billed annualy</span>
				</div>
				<div class="body">
					<ul>
						<li>
							<IconCheck color="#48dfe3"></IconCheck>
							30-day free trial
						</li>
						<li>
							<IconCheck color="#48dfe3"></IconCheck>

							+1000 book summaries
						</li>
						<li>
							<IconCheck color="#48dfe3"></IconCheck>
							Unlimited access
						</li>
						<li>
							<IconCheck color="#48dfe3"></IconCheck>

							Mobile app
						</li>
						<li>
							<IconCheck color="#48dfe3"></IconCheck>

							Audio Narrations
						</li>
						<li>
							<IconCheck color="#48dfe3"></IconCheck>

							Unlimited PDF downloads
						</li>
					</ul>
					<base-button mode="accent">Start free Trial</base-button>
				</div>
			</base-card>
			<base-card>
				<div class="heading">
					<h3>Monthly <span>13$/mo</span></h3>
					<span>Billed monthly</span>
				</div>
				<div class="body">
					<ul>
						<li>
							<IconCheck color="#48dfe3"></IconCheck>

							30-day free trial
						</li>
						<li>
							<IconCheck color="#48dfe3"></IconCheck>

							+1000 book summaries
						</li>
						<li>
							<IconCheck color="#48dfe3"></IconCheck>

							Unlimited access
						</li>
						<li>
							<IconCheck color="#48dfe3"></IconCheck>
							Mobile app
						</li>
						<li>
							<IconCheck color="#48dfe3"></IconCheck>
							Audio Narrations
						</li>
						<li>
							<IconCheck color="#48dfe3"></IconCheck>
							Unlimited PDF downloads
						</li>
					</ul>
					<base-button>Start free Trial</base-button>
				</div>
			</base-card>
			<base-card>
				<div class="heading">
					<h3>Free</h3>
					<span>Tottaly free</span>
				</div>
				<div class="body">
					<ul>
						<li>
							<IconCheck></IconCheck>
							+1000 book summaries
						</li>
						<li>
							<IconCheck></IconCheck>
							Limited Access
						</li>
						<li>
							<IconCheck></IconCheck>
							Available desktop only
						</li>
						<li>
							<IconCheck></IconCheck>
							Limited Audio Narrations
						</li>

						<li>
							<IconCheck></IconCheck>
							No PDF downloads
						</li>
						<li>
							<IconCheck></IconCheck>
							Access to Community
						</li>
					</ul>
					<base-button link to="/auth/signup">Sign up</base-button>
				</div>
			</base-card>
		</div>
	</base-section>
</template>

<script setup>
import { IconCheck } from "@tabler/icons-vue";
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
	gap: 1em;
}

h3 {
	display: flex;
	justify-content: space-between;
}

ul {
	list-style: none;
}

li {
	display: flex;
	gap: 1em;
	margin-top: 0.5em;
}

.body > * {
	width: 100%;
	margin-top: 1em;
}

@media (min-width: 900px) {
	.container {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
	.card {
		width: 100%;
		max-width: 350px;
	}
	p {
		max-width: 440px;
	}
}
</style>
