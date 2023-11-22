import { defineStore } from "pinia";
import { useBooksStore } from "./booksStore.js";
import { useAuthStore } from "./authStore.js";

export const useSummaryStore = defineStore("summaries", {
	state: () => ({
		popupMsg: "",
		summary: null,
	}),
	actions: {
		async deleteSummary(id) {
			const authStore = useAuthStore();
			const token = authStore.token;
			const response = await fetch(
				`https://book-summary-app-1b453-default-rtdb.europe-west1.firebasedatabase.app/summaries/${id}.json?auth=${token}`,
				{
					method: "DELETE",
				}
			);
			const responseData = await response.json();
			if (!response.ok) {
				console.warn(responseData.error);
			}

			this.popupMsg = "summary has been deleted";
			setTimeout(() => {
				this.popupMsg = null;
			}, 5000);
		},
		async loadSummary(id) {
			const authStore = useAuthStore();
			const token = authStore.token;
			const response = await fetch(
				`https://book-summary-app-1b453-default-rtdb.europe-west1.firebasedatabase.app/summaries/${id}.json?auth=${token}`
			);
			const responseData = await response.json();

			if (!response.ok) {
				console.warn(responseData.error);
			}

			this.summary = responseData.summary;
		},
		async addSummary(data) {
			const authStore = useAuthStore();
			const token = authStore.token;
			const booksStore = useBooksStore();
			const response = await fetch(
				`https://book-summary-app-1b453-default-rtdb.europe-west1.firebasedatabase.app/summaries/${data.id}.json?auth=${token}`,
				{
					method: "PUT",
					body: JSON.stringify({
						summary: data.summary,
						summarizedByUserId: data.summarizedByUserId,
					}),
				}
			);

			const responseData = await response.json();

			if (!response.ok) {
				console.warn(responseData.error);
			}

			booksStore.getBooks();

			this.popupMsg = "Summary added successfully";
			setTimeout(() => {
				this.popupMsg = null;
			}, 5000);
		},
	},
});
