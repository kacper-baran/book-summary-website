import { defineStore } from "pinia";
import { useUserStore } from "./userStore.js";
import { useBooksStore } from "./booksStore.js";

import router from "../router/index.js";

export const useAuthStore = defineStore("auth", {
	state: () => ({
		userId: null,
		token: null,
		isLoggedIn: null,
		error: null,
		action: "signup",
	}),
	getters: {
		isAuthenticated(state) {
			return !!state.token;
		},
	},
	actions: {
		async auth(payload) {
			const userStore = useUserStore();
			const booksStore = useBooksStore();

			this.error = null;
			const action = payload.action;
			const API_KEY = "***";

			let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

			if (action === "signup") {
				url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
			}

			const response = await fetch(url, {
				method: "POST",
				body: JSON.stringify({
					email: payload.email,
					password: payload.password,
					returnSecureToken: true,
				}),
			});

			const responseData = await response.json();

			if (!response.ok) {
				this.error = responseData.error.message;
				return;
			}

			localStorage.setItem("token", responseData.idToken);
			localStorage.setItem("userId", responseData.localId);

			this.token = responseData.idToken;
			this.userId = responseData.localId;

			if (action === "signup") {
				userStore.registerUser({
					username: payload.username,
				});
			}

			this.isLoggedIn = true;
			router.replace("/bookapp");
		},
		login(payload) {
			this.error = null;
			this.auth({
				...payload,
				action: "login",
			});
		},
		signup(payload) {
			this.error = null;
			this.auth({
				...payload,
				action: "signup",
			});
		},
		logout() {
			localStorage.removeItem("token");
			localStorage.removeItem("userId");

			this.error = null;
			this.token = null;
			this.userID = null;

			router.replace("/");
		},
		autoLogin() {
			const token = localStorage.getItem("token");
			const userId = localStorage.getItem("userId");
			if (userId && token) {
				this.userId = userId;
				this.token = token;
				this.isLoggedIn = true;
			} else {
				router.replace("/auth/login");
			}
		},
	},
});
