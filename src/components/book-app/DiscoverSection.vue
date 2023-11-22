<template>
	<base-section width="wide" bg="white">
		<h2 class="heading">Discover</h2>
		<div v-if="booksStore.allBooks && !booksStore.loadBooksError && userStore.user">
			<BooksContainer
				overflow="side-scroll"
				:books="booksStore.recommendedBooks">
				Recommended
			</BooksContainer>
			<BooksContainer
				overflow="side-scroll"
				:books="booksStore.latestBooks">
				New releases
			</BooksContainer>
			<BooksContainer
				overflow="side-scroll"
				:books="booksStore.popularBooks">
				Popular books
			</BooksContainer>
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
import { useBooksStore } from "/src/stores/booksStore.js"
import { useUserStore } from "/src/stores/userStore.js"
import BooksContainer from "./UI/BooksContainer.vue";
import { ref } from "vue";
const userStore = useUserStore()
const booksStore = useBooksStore();
const isLoading = ref(false);
try {
	booksStore.getBooks();
} catch (e) {
	console.log(e);
}
</script>

<style lang="scss" scoped>
.heading {
	font-size: 2rem;
  text-align: center;
  font-weight: 700;
}


</style>
