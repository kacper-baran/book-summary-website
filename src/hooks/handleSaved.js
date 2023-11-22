import { useUserStore } from "/src/stores/userStore.js";
import { useBooksStore } from "/src/stores/booksStore.js";
import { computed } from "vue";

export default function useHandleSave(id) {
	const userStore = useUserStore();
	const booksStore = useBooksStore();

	const book = computed(() => {
		return booksStore.books.find((book) => book.id === id);
	});
	const isIncluded = computed(() => {
		return userStore.savedSummaries.includes(id);
	});
  
	const addToSaved = async (id) => {
		if (!isIncluded.value) {
			book.value.isSaved = true;
			userStore.user.savedSummaries.push(id);
			userStore.updateSaved();
		}
	};

	const removeFromSaved = async (id) => {
		if (isIncluded.value) {
			const index = userStore.savedSummaries.indexOf(id);
			userStore.savedSummaries.splice(index, 1);
			book.value.isSaved = false;
			userStore.updateSaved();
		}
	};

	return {
		addToSaved,
		removeFromSaved,
	};
}
