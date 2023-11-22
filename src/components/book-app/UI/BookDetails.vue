<template>
	<div v-if="book.length !== 0 && userStore.user">
		<base-section width="narrow" bg="white">
			<button class="back-button" @click="goBack">
				<IconArrowNarrowLeft></IconArrowNarrowLeft>
				Back
			</button>
			<div class="book-details">
				<div class="book">
					<p>{{ book.title }}</p>
					<p>{{ book.author }}</p>
				</div>
				<div class="info-container">
					<div class="info">
						<p class="category">{{ book.category }}</p>
						<h3>{{ book.title }}</h3>
						<p>By {{ book.author }}</p>
						<p>Summarized by {{ book.summarizedByUsername }}</p>
					</div>
					<div class="controls">
						<div class="icon">
							<IconStarFilled
								class="icon"
								v-if="book.isFavorite"
								:size="30"
								color="#FFD700"
								@click="removeFromFavorites(book.id)">
							</IconStarFilled>
							<IconStar
								class="icon"
								v-else
								:size="30"
								@click="addToFavorites(book.id)"></IconStar>
						</div>
						<div class="icon">
							<IconBookmarkFilled
								class="icon"
								v-if="book.isSaved"
								:size="30"
								color="#48dfe3"
								@click="removeFromSaved(book.id)">
							</IconBookmarkFilled>
							<IconBookmark
								class="icon"
								v-else
								:size="30"
								@click="addToSaved(book.id)"></IconBookmark>
						</div>
					</div>
				</div>
			</div>
			<div class="button-container">
				<base-button @click="getSummary">Load summary</base-button>
				<div v-if="userStore.writtenSummaries.includes(book.id)">
					<base-button @click="deleteSummary(book.id)" mode="delete">
						Delete
					</base-button>
				</div>
			</div>
		</base-section>
		<div v-if="summaryStore.summary">
			<base-section width="narrow" bg="light-grey">
				<div class="summary">
					{{ summaryStore.summary }}
				</div>
			</base-section>
		</div>
	</div>
	<div v-else>
		<base-section>
			<base-heading>
				<template #title>Page not Found</template>
			</base-heading>
		</base-section>
	</div>
</template>

<script setup>
import { useBooksStore } from "/src/stores/booksStore.js";
import { useSummaryStore } from "/src/stores/summaryStore.js";
import { useUserStore } from "/src/stores/userStore.js";
import { ref, reactive, onBeforeUnmount, computed } from "vue";
import { useRouter } from "vue-router";
import {
	IconArrowNarrowLeft,
	IconBookmark,
	IconBookmarkFilled,
	IconStar,
	IconStarFilled,
	IconArrowBigUpLineFilled,
} from "@tabler/icons-vue";
import useHandleSaved from "/src/hooks/handleSaved.js";

const router = useRouter();
const userStore = useUserStore();

const booksStore = useBooksStore();
const summaryStore = useSummaryStore();
const props = defineProps(["bookId"]);
const { addToSaved, removeFromSaved } = useHandleSaved(props.bookId);

onBeforeUnmount(() => {
	if (summaryStore.summary) {
		summaryStore.summary = null;
	}
});

const book = computed(() => {
	return booksStore.books.find((book) => book.id === props.bookId);
});

const isIncluded = computed(() => {
	return userStore.favoriteSummaries.includes(props.bookId);
});

const goBack = () => {
	router.back();
};

const getSummary = () => {
	summaryStore.loadSummary(props.bookId);
};

const addToFavorites = async (id) => {
	if (!isIncluded.value) {
		book.value.isFavorite = true;
		userStore.user.favoriteSummaries.push(id);
		userStore.updateFavorites();
	}
};

const removeFromFavorites = async (id) => {
	if (isIncluded.value) {
		const index = userStore.favoriteSummaries.indexOf(id);
		userStore.favoriteSummaries.splice(index, 1);
		book.value.isFavorite = false;
		userStore.updateFavorites();
	}
};

const deleteSummary = (id) => {
	const userWantsToDelete = confirm(
		"Are you sure you want to delete this summary? This action is irreversible"
	);
	if (userWantsToDelete) {
		const index = userStore.writtenSummaries.indexOf(id);
		userStore.writtenSummaries.splice(index, 1);
		userStore.updateWrittenSummaries();
		summaryStore.deleteSummary(id);
		booksStore.deleteBook(id);
		router.replace("/bookapp/discover");
	}
};
</script>

<style lang="scss" scoped>
.back-button {
	display: flex;
	align-items: center;
	gap: 0.5em;
	margin-bottom: 2em;
	font-size: 1rem;
	padding: 0.5em 1.5em;
	background-color: transparent;
	color: var(--color-text);
	&:hover {
		text-decoration: underline;
	}
}
.book-details {
	display: flex;
	flex-direction: column;
	border: 1px solid;
	border-color: var(--color-border);
	border-radius: 12px;
	padding: 1em;
	margin-bottom: 2em;
}
.book {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 150px;
	margin-inline: auto;
	height: 225px;
	background-color: #fff;
	border: 3px solid #000;
	border-radius: 10px;
	color: black;
	text-align: center;
	padding-block: 40px;
	word-wrap: break-word;
}

.info-container {
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	gap: 2em;
	padding: 1em;
}
.info {
	display: grid;
	.category {
		color: grey;
	}
}

.controls {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.summary {
	padding: 2em;
	background-color: var(--color-background);
	border-radius: 12px;
	word-wrap: wrap;
}

.icon {
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: copy;
}

.button-container {
	width: 100%;
	display: flex;
	justify-content: space-between;
}

.delete-btn {
	border-color: red;
}

@media (min-width: 768px) {
	.book-details {
		flex-direction: row;
	}
	.book {
		min-width: 150px;
	}
	.info-container {
		flex-direction: row;
	}
	.controls {
		flex-direction: column;
	}
}
</style>
