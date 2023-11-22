<template>
	<div class="heading">
		<h2>
			<slot></slot>
		</h2>
	</div>
	<ul class="container" :class="overflow">
		<li v-for="book in books" :key="book.id">
			<book-card
				:responsivity="overflow"
				:title="book.title"
				:author="book.author"
				:id="book.id"
				:saved="book.isSaved"
				:category="book.category">
			</book-card>
		</li>
	</ul>
</template>

<script setup>
import { useUserStore } from "/src/stores/userStore.js";
import { useBooksStore } from "/src/stores/booksStore.js";
import { computed, watch, ref, defineAsyncComponent } from "vue";
import BookCard from "/src/components/book-app/UI/BookCard.vue";
const booksStore = useBooksStore();
const userStore = useUserStore();

const props = defineProps(["overflow", "books"]);

const refresh = () => {
  booksStore.getBooks()
}
</script>

<style lang="scss" scoped>
h2 {
	font-weight: 100;
	font-size: 2rem;
}
.container {
	display: flex;
	gap: 1em;
	margin-bottom: 1em;
	padding: 1em;
}
.container.side-scroll {
	display: flex;
	gap: 1em;
	overflow: scroll;
}

.container.auto {
	display: flex;
	flex-direction: column;
	gap: 1em;
}
.heading {
margin-top: 2em;
padding-inline: 1em;
}



@media (min-width: 990px) {
	.container {
		flex-wrap: wrap;
		margin-inline: auto;
	}
	.container.side-scroll {
		overflow: auto;
	}
	.container.auto {
		flex-direction: row;
		.card {
			flex-direction: column;
			width: 275px;
			.img {
				.book-cover {
					margin-bottom: 1em;
				}
			}
		}
	}
}
</style>
