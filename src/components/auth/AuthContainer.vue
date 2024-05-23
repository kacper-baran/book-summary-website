<template>
	<div class="container">
		<div class="form-container">
			<div class="logo-container">
				<router-link to="/" class="logo">
					<img src="../../assets/img/logo-1.svg" alt="logo" />
					Booker
				</router-link>
			</div>
			<slot></slot>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	gap: 1em;
	min-height: 100vh;
	width: 100%;
	--s: 200px; /* control the size */
	--c1: #1d1d1d;
	--c2: #4e4f51;
	--c3: #3c3c3c;

	background: repeating-conic-gradient(
				from 30deg,
				#0000 0 120deg,
				var(--c3) 0 180deg
			)
			calc(0.5 * var(--s)) calc(0.5 * var(--s) * 0.577),
		repeating-conic-gradient(
			from 30deg,
			var(--c1) 0 60deg,
			var(--c2) 0 120deg,
			var(--c3) 0 180deg
		);
	background-size: var(--s) calc(var(--s) * 0.577);
}

.logo-container {
	position: absolute;
	top: 200px;
	left: 0;
	right: 0;
	margin: 1em;
	.logo {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.25em;
		font-size: 2.5rem;
	}
	img {
		height: 50px;
	}
}

.form-container {
	margin-inline: auto;
  max-width: 400px;
}

@media (min-width: 768px) {
	.container {
		width: 100vw;
		height: 100vh;
	}

	.form-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		height: 100vh;
		width: 100%;
		display: flex;
		align-items: center;
	}

	.logo-container {
		top: 0;
	}
}
</style>
