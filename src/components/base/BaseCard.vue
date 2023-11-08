<template>
	<div class="card">
		<slot></slot>
	</div>
</template>

<script></script>

<style lang="scss" scoped>
div {
	border: 1px solid grey;
	padding: 1.5em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  transition: border-color .3s;
	&:hover {
		border-color: #48dfe3;
	}
}
</style>
