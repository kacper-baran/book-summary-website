<template>
	<div class="spinner"></div>
</template>

<script></script>

<style lang="scss" scoped>


.spinner {
  position: relative;
	width: 80px;
	aspect-ratio: 1;
  border: 5px dashed;
  border-color: var(--color-border);
	border-radius: 50%;
	animation: spinner 0.8s infinite ease-in-out;
  &::before, &::after {
    font-size: var(--color-border);
  }
  &::before {
    content: ">";
    position: absolute;
    font-size: 3rem;
    rotate: -90deg;
    left: -15px;
  }
  &::after {
    content: ">";
    position: absolute;
    font-size: 3rem;
    rotate: 90deg;
    right: -15px;
  }
}

@keyframes spinner {
	to {
		rotate: 360deg;
	}
}
</style>
