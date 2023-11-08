<template>
	<base-section bg="light-grey" width="wide">
		<h2>Affordable & Simple <span>Pricing</span></h2>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi ad
			iure vero aut ullam in eius unde odio similique quisquam.
		</p>
		<div class="container">
			<base-card>
				<div class="heading">
					<h3>Annually <span>10$/mo</span></h3>
					<span>Billed annualy</span>
				</div>
				<div class="body">
					<ul>
						<li>
							<img
								src="../../assets/img/circlecheck.svg"
								alt="circle checkmark" />
							30-day free trial
						</li>
						<li>
							<img
								src="../../assets/img/circlecheck.svg"
								alt="circle checkmark" />
							+1000 book summaries
						</li>
						<li>
							<img
								src="../../assets/img/circlecheck.svg"
								alt="circle checkmark" />
							Unlimited access
						</li>
						<li>
							<img
								src="../../assets/img/circlecheck.svg"
								alt="circle checkmark" />
							Mobile app
						</li>
						<li>
							<img
								src="../../assets/img/circlecheck.svg"
								alt="circle checkmark" />
							Audio Narrations
						</li>
						<li>
							<img
								src="../../assets/img/circlecheck.svg"
								alt="circle checkmark" />
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
							<img
								src="../../assets/img/circlecheck.svg"
								alt="circle checkmark" />
							30-day free trial
						</li>
						<li>
							<img
								src="../../assets/img/circlecheck.svg"
								alt="circle checkmark" />
							+1000 book summaries
						</li>
						<li>
							<img
								src="../../assets/img/circlecheck.svg"
								alt="circle checkmark" />
							Unlimited access
						</li>
						<li>
							<img
								src="../../assets/img/circlecheck.svg"
								alt="circle checkmark" />
							Mobile app
						</li>
						<li>
							<img
								src="../../assets/img/circlecheck.svg"
								alt="circle checkmark" />
							Audio Narrations
						</li>
						<li>
							<img
								src="../../assets/img/circlecheck.svg"
								alt="circle checkmark" />
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
							<img
								src="../../assets/img/circlecheckblack.svg"
								alt="circle checkmark" />+1000 book summaries
						</li>
						<li>
							<img
								src="../../assets/img/circlecheckblack.svg"
								alt="circle checkmark" />
							Limited Access
						</li>
						<li>
							<img
								src="../../assets/img/circlecheckblack.svg"
								alt="circle checkmark" />
							Available desktop only
						</li>
						<li>
							<img
								src="../../assets/img/circlecheckblack.svg"
								alt="circle checkmark" />
							Limited Audio Narrations
						</li>

						<li>
							<img
								src="../../assets/img/circlecheckblack.svg"
								alt="circle checkmark" />
							No PDF downloads
						</li>
						<li>
							<img
								src="../../assets/img/circlecheckblack.svg"
								alt="circle checkmark" />Access to Community
						</li>
					</ul>
					<base-button>Sign up</base-button>
				</div>
			</base-card>
		</div>
	</base-section>
</template>

<script></script>

<style lang="scss" scoped>
p {
	text-align: center;
	margin-inline: auto;
	margin-block: 1em;
}
.container {
	display: flex;
	flex-direction: column;
	gap: 1em;
}
.card {
  background-color: #fff;
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
