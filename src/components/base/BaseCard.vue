<template>
	<div class="card">
		<slot></slot>
	</div>
</template>

<script></script>

<style lang="scss" scoped>

div {
  padding: 1.5em;
	border: 1px solid;
  border-color: var(--color-border);
	box-shadow: 0 0 10px var(--card-box-shadow);
  background-color: var(--card-background-color);
	border-radius: 10px;
	transition: border-color 0.3s, scale .3s;
  cursor: pointer;
	&:hover {
		border-color: var(--c-ocean-blue);
    scale: 1.02;
	}
}
</style>
