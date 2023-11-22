<template>
	<div class="loader">
		<div class="loader__inner"></div>
		<div class="loader__inner"></div>
		<div class="loader__inner"></div>
	</div>
</template>

<script></script>

<style lang="scss" scoped>
.loader {
	display: flex;
	gap: 1em;
	padding: 1em;
  width: 100%;
  justify-content: center;
	&__inner {
		width: 15px;
		height: 15px;
		border: 4px solid white;
		border-radius: 50%;
	}
}

.loader__inner:first-of-type {
	animation: loader 1s infinite;
}
.loader__inner:nth-of-type(2) {
	animation: loader 1s 0.25s infinite;
}
.loader__inner:last-of-type {
	animation: loader 1s 0.5s infinite;
}

@keyframes loader {
	0% {
		scale: 0.5;
	}
	50% {
		scale: 1.5;
	}

	100% {
		scale: 0.5;
	}
}
</style>
