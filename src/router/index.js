import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "../pages/LandingPage.vue";
import AuthPage from "../pages/AuthPage.vue";
import BookApp from "../pages/book-app/BookApp.vue";
import DiscoverSection from "../components/book-app/DiscoverSection.vue";
import BooksSection from "../components/book-app/BooksSection.vue";
import AddSummary from "../components/book-app/AddSummary.vue";
import MyLibrarySection from "../components/book-app/MyLibrarySection.vue";
import SearchSection from "../components/book-app/SearchSection.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	scrollBehavior(to) {
		if (to.hash) {
			return {
				el: to.hash,
				behavior: "smooth",
				top: 100,
			};
		}
	},
	routes: [
		{
			path: "/",
			name: "home",
			component: LandingPage,
		},
		{
			path: "/auth/:action",
			name: "auth",
			props: true,
			component: AuthPage,
		},
		{
			path: "/bookapp",
			name: "bookapp",
			component: BookApp,
			redirect: "/bookapp/discover",
			children: [
				{
					path: "discover",
					component: DiscoverSection,
				},
				{
					path: "books",
					component: BooksSection,
				},
				{
					path: "articles",
					component: AddSummary,
				},
				{
					path: "mylibrary",
					component: MyLibrarySection,
				},
				{
					path: "search",
					component: SearchSection,
				},
			],
		},
	],
});

export default router;
