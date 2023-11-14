<template>
	<base-card>
		<div class="img">
			<div class="book-cover">
				<p>Milion dollar habits</p>
			</div>
			<!-- <img src="../../../assets/img/book-cover.png" alt="book cover" /> -->
		</div>
		<div class="text">
			<div>
				<p>category</p>
				<button>add to favs</button>
			</div>
			<h3>Title</h3>
			<p>By Author</p>
		</div>
	</base-card>
</template>

<script setup></script>

<style lang="scss" scoped>
.card {
	width: 275px;
	.img {
		display: flex;
		position: relative;
		border-bottom: 2px solid;
		border-color: var(--border-color);
		margin-bottom: 0.5em;
		p {
			color: black;
			width: 100%;
			text-align: center;
			margin-top: 1em;
			padding: 0.2em;

			font-size: 1.2rem;
		}
		img {
			max-width: 100%;
			height: 200px;
			margin-inline: auto;
			margin-bottom: 1em;
			border-radius: 5px;
		}
		.book-cover {
			background-image: url("../../../assets/img/book-cover.png");
			min-height: 250px;
      min-width: 200px;
			background-position: center;
			background-repeat: no-repeat;
			background-size: 200px;
			margin-inline: auto;
			padding: 0.5em;
			border-radius: 5px;
			margin-bottom: 1em;
		}
	}
	.text {
		div {
			display: flex;
			justify-content: space-between;
		}
		h3 {
			font-size: 2rem;
		}
	}
}
</style>
