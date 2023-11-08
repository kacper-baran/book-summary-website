<template>
	<div class="heading">
		<h2>
			<slot name="title"></slot>
			<span>
				<slot name="span"></slot>
			</span>
		</h2>
		<p>
			<slot name="text"></slot>
		</p>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.heading {
	margin-bottom: 2rem;
	text-align: center;
	p {
		max-width: 700px;
		margin-inline: auto;
	}
}

h2 {
	text-align: center;
	font-size: 2rem;
	margin-bottom: 2rem;
	span {
		position: relative;
		color: var(--color-heading-span);
		text-decoration: underline;
	}
}
</style>
