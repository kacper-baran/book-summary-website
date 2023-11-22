import { defineStore } from "pinia";
import { useUserStore } from "./userStore";
import { useAuthStore } from "./authStore";

export const useBooksStore = defineStore("books", {
	state: () => ({
		books: null,
		loadBooksError: false,
		recommended: [
			"How to Win Friends and Influence People",
			"Atomic Habits",
		],
	}),
	getters: {
		allBooks() {
			return this.books;
		},
		recommendedBooks() {
			const recommendedBooks = [];
			this.books.filter((book) => {
				this.recommended.some((title) => {
					if (title === book.title) {
						recommendedBooks.push(book);
					}
				});
			});
			return recommendedBooks;
		},
		latestBooks() {
			const books = this.books
				.toSorted((a, b) => {
					if (b.releaseDate < a.releaseDate) {
						return -1;
					} else if (b.releaseDate > a.releaseDate) {
						return 1;
					}
					return 0;
				})
				.slice(0, 4);
			return books;
		},
		popularBooks() {
			const popularBooks = this.books
				.toSorted((a, b) => {
					if (b.favorites < a.favorites) {
						return -1;
					} else if (b.favorites > a.favorites) {
						return 1;
					}
					return 0;
				})
				.slice(0, 4);
			return popularBooks;
		},
		savedBooks() {
			const savedBooks = this.books.filter(
				(book) => book.isSaved === true
			);
			return savedBooks;
		},
		favoriteBooks() {
			const favoriteBooks = this.books.filter(
				(book) => book.isFavorite === true
			);
			return favoriteBooks;
		},
		writtenSummaries() {
			const userStore = useUserStore();
			const writtenSummaries = [];
			this.books.filter((book) => {
				userStore.user.writtenSummaries.some((summaryId) => {
					if (summaryId === book.id) {
						writtenSummaries.push(book);
					}
				});
			});
			return writtenSummaries;
		},
	},
	actions: {
		async deleteBook(id) {
			const authStore = useAuthStore();
			const token = authStore.token;
			const response = await fetch(
				`https://book-summary-app-1b453-default-rtdb.europe-west1.firebasedatabase.app/books/${id}.json?auth=${token}`,
				{ method: "DELETE" }
			);
			const responseData = await response.json();

			if (!response.ok) {
				console.warn(responseData.error);
			}
		},
		async getBooks() {
			const userStore = useUserStore();
			const authStore = useAuthStore();
			const token = authStore.token;

			const response = await fetch(
				`https://book-summary-app-1b453-default-rtdb.europe-west1.firebasedatabase.app/books.json?auth=${token}`
			);
			const responseData = await response.json();

			this.loadBooksError = false;
			if (!response.ok) {
				console.warn(responseData.error);
				this.loadBooksError = true;
			}

			const books = [];

			if (userStore.savedSummaries === undefined) {
				userStore.user.savedSummaries = [];
			}
			if (userStore.favoriteSummaries === undefined) {
				userStore.user.favoriteSummaries = [];
			}
			for (const key in responseData) {
				const book = {
					...responseData[key],
					isSaved: userStore.savedSummaries.includes(key),
					isFavorite: userStore.favoriteSummaries.includes(key),
				};
				books.push(book);
			}
			this.books = books;
		},
		async addBook(data) {
			const bookData = data;
			const authStore = useAuthStore();
			const token = authStore.token;
			const response = await fetch(
				`https://book-summary-app-1b453-default-rtdb.europe-west1.firebasedatabase.app/books/${bookData.id}.json?auth=${token}`,
				{
					method: "PUT",
					body: JSON.stringify(bookData),
				}
			);

			const responseData = await response.json();

			if (!response.ok) {
				console.warn(responseData.error);
			}
		},
	},
});
