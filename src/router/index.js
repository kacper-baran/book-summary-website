import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

import LandingPage from "../pages/LandingPage.vue";
const AuthPage = () => import("../pages/AuthPage.vue");
const BookApp = () => import("../pages/bookapp/BookApp.vue");
const DiscoverSection = () =>
	import("../components/book-app/DiscoverSection.vue");
const BooksSection = () => import("../components/book-app/BooksSection.vue");
const AddSummary = () => import("../components/book-app/AddSummary.vue");
const MyLibrarySection = () =>
	import("../components/book-app/MyLibrarySection.vue");

const SettingsSection = () =>
	import("../components/book-app/SettingsSection.vue");

const BookDetailsPage = () => import("../pages/bookapp/BookDetailsPage.vue");
const BookDetails = () => import("../components/book-app/UI/BookDetails.vue");
const NotFoundPage = () => import("../pages/NotFoundPage.vue");
const BookAppNotFound = () => import("../pages/bookapp/BookAppNotFound.vue");
const AboutSection = () => import("../components/landing-page/BestSection.vue");
const PricingSection = () =>
	import("../components/landing-page/PricingSection.vue");
const router = createRouter({
	mode: "hash",
	scrollBehavior(_, _2, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		}
		return { top: 0, left: 0 };
	},
	routes: [
		{
			path: "/",
			name: "home",
			component: LandingPage,
		},
		{
			path: "/about",
			name: "about",
			hash: "#best",
			component: AboutSection,
		},
		{
			path: "/pricing",
			name: "pricing",
			hash: "#pricing",
			component: PricingSection,
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
					path: "addsummary",
					component: AddSummary,
				},
				{
					path: "mylibrary",
					component: MyLibrarySection,
				},
				{
					path: "settings",
					component: SettingsSection,
				},
				{
					path: "details",
					component: BookDetailsPage,
					children: [
						{
							path: ":bookId",
							props: true,
							component: BookDetails,
						},
					],
				},
				{ path: ":notFound(.*)", component: BookAppNotFound },
			],
		},
		{ path: "/:notFound(.*)", component: NotFoundPage },
	],
});

export default router;
