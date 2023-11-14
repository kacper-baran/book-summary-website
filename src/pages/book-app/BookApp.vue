<template>
	<div>
		<AppNav />
		<router-view></router-view>
	</div>

</template>

<script setup>
import AppNav from "/src/components/book-app/AppNav.vue";
</script>

<style lang="scss" scoped>
div {
	padding-top: 50px;
}
</style>
