<template>
	<base-section width="wide" bg="white">
		<div>Discover</div>
    <h2>Recommended</h2>
		<book-card></book-card>
    <hr>
    <h2>New releases</h2>
		<book-card></book-card>
    <hr>
    <h2>Popular books</h2>
		<book-card></book-card>
    
	</base-section>
</template>

<script setup>
import BookCard from "./UI/BookCard.vue";
</script>

<style lang="scss" scoped></style>
