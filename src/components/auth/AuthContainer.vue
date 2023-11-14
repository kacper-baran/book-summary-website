<template>
	<div class="container">
		<div class="hero">
			<img
				class="hero-img"
				src="../../assets/img/books-2463779_1280.jpg"
				alt="Books" />
		</div>
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
	position: relative;
	display: grid;
	grid-template-rows: 1fr 1fr;
	gap: 1em;
	min-height: 100vh;
}
.hero {
	height: 200px;
	width: 100vw;
	overflow: hidden;
}
.hero-img {
	width: 100%;
	object-fit: cover;
	scale: 2;
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
	width: 90%;
  margin-inline: auto;
}

@media (min-width: 768px) {
	.container {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		place-items: center;
		width: 100vw;
		height: 100vh;
	}

	.hero {
		height: 100vh;
		width: auto;
	}
	.hero-img {
		scale: 1;
		height: 100%;
		width: 100%;
	}
	.form-container {
		position: relative;
		height: 100vh;
		width: 80%;
		display: flex;
		align-items: center;
	}

	.logo-container {
		top: 0;
	}
}

@media (min-width: 1190px) {
	.form-container {
		width: 60%;
	}
}
</style>
