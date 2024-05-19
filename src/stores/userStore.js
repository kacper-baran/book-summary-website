import { defineStore } from "pinia";
import { useAuthStore } from "./authStore.js";

export const useUserStore = defineStore("user", {
	state: () => ({
		user: null,
	}),
	getters: {
		savedSummaries() {
			return this.user.savedSummaries;
		},
		favoriteSummaries() {
			return this.user.favoriteSummaries;
		},
		writtenSummaries() {
			return this.user.writtenSummaries;
		},
	},
	actions: {
		async deleteAccount() {
			const authStore = useAuthStore();
			const token = authStore.token;
			const userId = authStore.userId;
			const API_KEY = "AIzaSyAto8sH0Qauq9T2Blg-qkH6DQ3RDcijRCo";

			const deleteAccount = fetch(
				`https://identitytoolkit.googleapis.com/v1/accounts:delete?key=${API_KEY}`,
				{
					method: "POST",
					body: JSON.stringify({
						idToken: token,
					}),
				}
			);

			if (this.user.writtenSummaries.length > 0) {
				for (const bookId of this.user.writtenSummaries) {
					const books = fetch(
						`https://book-summary-app-1b453-default-rtdb.europe-west1.firebasedatabase.app/books/${bookId}.json?auth=${token}`,
						{
							method: "DELETE",
						}
					);
					const summaries = fetch(
						`https://book-summary-app-1b453-default-rtdb.europe-west1.firebasedatabase.app/summaries/${bookId}.json?auth=${token}`,
						{
							method: "DELETE",
						}
					);
				}
			}

			const users = fetch(
				`https://book-summary-app-1b453-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}.json?auth=${token}`,
				{
					method: "DELETE",
				}
			);

			authStore.logout();
		},
		async registerUser(data) {
			const authStore = useAuthStore();
			const token = authStore.token;
			const userId = authStore.userId;

			const userData = {
				username: data.username,
				savedSummaries: [],
				favoriteSummaries: [],
				writtenSummaries: [],
			};
			const res = fetch(
				`https://book-summary-app-1b453-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}.json?auth=${token}`,
				{
					method: "PUT",
					body: JSON.stringify(userData),
				}
			);

			this.user = userData;
		},
		async getUserData() {
			const authStore = useAuthStore();
			const userId = authStore.userId;
			const token = authStore.token;
			const response = await fetch(
				`https://book-summary-app-1b453-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}.json?auth=${token}`
			);
			const responseData = await response.json();

			if (!response.ok) {
				console.warn(responseData.error);
			}
			const data = {};

			if (!responseData.savedSummaries) {
				data.savedSummaries = [];
			}
			if (!responseData.favoriteSummaries) {
				data.favoriteSummaries = [];
			}
			if (!responseData.writtenSummaries) {
				data.writtenSummaries = [];
			}
			this.user = {
				...responseData,
				...data,
				userId,
			};
		},
		async updateSaved() {
			const authStore = useAuthStore();
			const userId = authStore.userId;
			const token = authStore.token;
			const savedSummaries = this.user.savedSummaries;

			const response = await fetch(
				`https://book-summary-app-1b453-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/savedSummaries.json?auth=${token}`,
				{
					method: "PUT",
					body: JSON.stringify(savedSummaries),
				}
			);
			const responseData = response.json();
			if (!response.ok) {
				console.warn(responseData.error);
			}
		},
		async updateFavorites() {
			const authStore = useAuthStore();
			const userId = authStore.userId;
			const token = authStore.token;

			const favoriteSummaries = this.user.favoriteSummaries;

			const response = await fetch(
				`https://book-summary-app-1b453-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/favoriteSummaries.json?auth=${token}`,
				{
					method: "PUT",
					body: JSON.stringify(favoriteSummaries),
				}
			);
			const responseData = response.json();
			if (!response.ok) {
				console.warn(responseData.error);
			}
		},

		async updateWrittenSummaries() {
			const authStore = useAuthStore();
			const userId = authStore.userId;
			const token = authStore.token;

			const writtenSummaries = this.user.writtenSummaries;

			const response = await fetch(
				`https://book-summary-app-1b453-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/writtenSummaries.json?auth=${token}`,
				{
					method: "PUT",
					body: JSON.stringify(writtenSummaries),
				}
			);
		},
	},
});
