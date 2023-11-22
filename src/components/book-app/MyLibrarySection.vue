<template>
	<base-section bg="white" width="wide">
		<base-heading>
			<template #title> My library </template>
		</base-heading>
		<div v-if="booksStore.allBooks && !booksStore.loadBooksError && userStore.user">
			<div v-if="booksStore.favoriteBooks.length >= 1">
				<BooksContainer
					overflow="side-scroll"
					:books="booksStore.favoriteBooks">
					Favorties
				</BooksContainer>
			</div>
			<p v-else>Currently you don't have any favorite books</p>
			<div v-if="booksStore.savedBooks.length >= 1">
				<BooksContainer
					overflow="side-scroll"
					:books="booksStore.savedBooks">
					Saved
				</BooksContainer>
			</div>
			<p v-else>Currently you don't have any saved books</p>
			<div v-if="booksStore.writtenSummaries.length >= 1">
				<BooksContainer
					overflow="side-scroll"
					:books="booksStore.writtenSummaries">
					My summaries
				</BooksContainer>
			</div>
		</div>
		<div v-else-if="!booksStore.loadBooksError">
			<base-loader></base-loader>
		</div>
		<div v-else="booksStore.loadBooksError">
			Something went wrong try refreshing or visit this page later
		</div>
	</base-section>
</template>

<script setup>
import { useBooksStore } from "/src/stores/booksStore.js";
import { useUserStore } from "/src/stores/userStore.js";

import BooksContainer from "./UI/BooksContainer.vue";
import { ref } from "vue";
const booksStore = useBooksStore();
const userStore = useUserStore();

try {
	booksStore.getBooks();
	userStore.getUserData();
} catch (e) {
	console.log(e);
}
</script>

<style lang="scss" scoped></style>
