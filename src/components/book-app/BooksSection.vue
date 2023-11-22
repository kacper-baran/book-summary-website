<template>
	<base-section bg="white" width="wide">
		<base-heading>
			<template #title> All books </template>
			<template #text>
				<div class="search-bar-container">
					<IconSearch class="icon"></IconSearch>
					<input
						type="text"
						@input="searchBarFilter"
						v-model.trim="searchBarValue" />
				</div>
			</template>
		</base-heading>
		<div v-if="searchBarValue === ''">
			<CategoriesItem @getCategory="categoryFilter"></CategoriesItem>
		</div>
		<div v-if="booksStore.allBooks && !booksStore.loadBooksError">
			<div
				v-if="filteredBooks && searchBarValue === ''"
				class="clear-filter">
				<base-button @click="clearFilters">Clear Filters</base-button>
			</div>
			<div v-if="filteredBooks === null">
				<book-container
					overflow="auto"
					:books="booksStore.books"></book-container>
			</div>
			<div v-else-if="filteredBooks.length !== 0">
				<book-container
					overflow="auto"
					:books="filteredBooks"></book-container>
			</div>
			<p v-else>Couldn't find any books</p>
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
import { IconSearch } from "@tabler/icons-vue";
import { computed, ref } from "vue";
import CategoriesItem from "./UI/CategoriesItem.vue";
import BookContainer from "/src/components/book-app/UI/BooksContainer.vue";
const booksStore = useBooksStore();
const searchBarValue = ref("");
const filteredBooks = ref(null);

booksStore.getBooks();

const categoryFilter = (category) => {
	const books = booksStore.books.filter((book) => book.category === category);
	filteredBooks.value = books;
};

const searchBarFilter = () => {
	if (searchBarValue.value !== "") {
		const books = [];
		booksStore.books.forEach((book) => {
			if (
				book.title
					.toLowerCase()
					.indexOf(searchBarValue.value.toLowerCase()) !== -1
			) {
				books.push(book);
			}
		});
		filteredBooks.value = books;
	} else {
		clearFilters();
	}
};

const clearFilters = () => {
	filteredBooks.value = null;
};
</script>

<style lang="scss" scoped>
.search-bar-container {
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid;
	border-color: var(--border-color);
	padding: 0.5em;
	margin-top: 5rem;
	margin-bottom: 7rem;
	border-radius: 12px;
	transition: border-color 0.3s;
	input {
		width: 100%;
		background-color: inherit;
		border: none;
		color: var(--color-text);
		padding: 0.5em;
		&:focus {
			outline: none;
		}
	}
	&:has(input:focus) {
		border-color: var(--color-border-hover);
	}

	.icon {
		margin-right: 0.5em;
	}
}

p {
	text-align: center;
}
.clear-filter {
	padding-left: 3em;
	margin-bottom: 1em;
}
</style>
