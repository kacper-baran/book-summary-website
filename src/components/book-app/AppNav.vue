<template>
	<nav id="navbar">
		<div class="container">
			<base-logo :to="{}"></base-logo>
			<ul class="menu">
				<li>
					<router-link class="nav-link" to="/bookapp/discover">
						<img
							src="../../assets/img/bookapp/world.svg"
							alt="discover icon" />
						Discover</router-link
					>
				</li>
				<li>
					<router-link class="nav-link" to="/bookapp/books">
						<img
							src="../../assets/img/bookapp/book.svg"
							alt="book icon" />

						Books</router-link
					>
				</li>
				<li>
					<router-link class="nav-link" to="/bookapp/articles">
						<img
							src="../../assets/img/notes.svg"
							alt="articles icon" />
						Add summary</router-link
					>
				</li>
				<li>
					<router-link class="nav-link" to="/bookapp/mylibrary">
						<img
							src="../../assets/img/bookapp/books.svg"
							alt="books icon" />

						My Library</router-link
					>
				</li>
				<li>
					<router-link class="nav-link" to="/bookapp/search">
						<img
							src="../../assets/img/bookapp/search.svg"
							alt="search icon" />
						Search</router-link
					>
				</li>
			</ul>
			<div class="controls">
				<base-button class="desktop" @click="logout"
					>Logout</base-button
				>
				<div class="profile" @click="handleDropdown">
					<img
						class="profile-picture"
						src="../../assets/img/user.svg"
						alt="blank profile picture" />

					<img
						class="dropdown-icon"
						src="/src/assets/img/dropdown.svg"
						alt="drop down icon" />
				</div>
				<div
					class="backdrop"
					:class="{ active: dropdownActive }"
					@click="handleDropdown">
					<ul class="dropdown" :class="{ active: dropdownActive }">
						<li>
							<img
								src="../../assets/img/banknote.svg"
								alt="banknote icon" />
							<router-link to="/billing">Billing</router-link>
						</li>
						<li>
							<img
								src="../../assets/img/highlight.svg"
								alt="highlight icon" />
							<router-link to="/highlights"
								>Highlights</router-link
							>
						</li>
						<li>
							<img
								src="../../assets/img/settings.svg"
								alt="settings icon" />
							<router-link to="/billing">Settings</router-link>
						</li>
						<li>
							<img
								src="../../assets/img/phone.svg"
								alt="phone icon" />
							<router-link to="/support">Support</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { ref } from "vue";
import { onBeforeUnmount } from "vue";
import { useAuthStore } from "../../stores/authStore.js";
import { useRouter } from "vue-router";

const props = defineProps(["menuActive"]);
const dropdownActive = ref(false);
const store = useAuthStore();

const navActive = ref(true);
//Prevents errors when routing to diffrent pages
onBeforeUnmount(() => {
	navActive.value = false;
});

const handleDropdown = () => {
	dropdownActive.value = !dropdownActive.value;
};

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	if (navActive.value) {
		let currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
			document.getElementById("navbar").style.top = "0";
		} else {
			document.getElementById("navbar").style.top = "-130px";
			dropdownActive.value = false;
		}
		prevScrollpos = currentScrollPos;
	}
};

const router = useRouter();
const logout = () => {
	store.logout();
	router.replace("/");
};
</script>

<style lang="scss" scoped>
nav {
	position: fixed;
	background-color: var(--nav-background-color);
	width: 100%;
	top: 0;
	padding: 1em;
	z-index: 10;
	transition: top 0.3s ease-in;
	border-bottom: 1px solid;
	border-color: var(--nav-border-color);

	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 70rem;
		margin-inline: auto;
	}

	.menu {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 1px solid #fff;
		font-size: 0.8rem;
		padding: 1em;
		list-style: none;
	}
}

.controls {
	display: flex;
	align-items: center;
	gap: 1em;
	.profile {
		display: flex;
		cursor: pointer;
		.profile-picture {
			height: 50px;
			border: 1px solid;
			border-color: var(--color-border);
			border-radius: 50%;
		}
		.dropdown-icon {
			width: 30px;
		}
	}
	.backdrop {
		display: none;
		position: absolute;
		width: 100vw;
		height: 100vh;
		inset: 0;
    cursor: pointer;
		&.active {
			display: block;
		}
	}
	.dropdown {
		position: absolute;
		top: 120px;
		right: 20px;
		opacity: 0;
		padding: 1em;
		width: 250px;
		border-radius: 10px;
		background-color: var(--dropdown-background-color);
		border: 1px solid;
		border-color: var(--dropdown-border-color);
		translate: 0 -50px;
		transition: opacity 0.3s, translate 0.3s;
		img {
			width: 24px;
			height: 24px;
			background: var(--icon-background-color);
			border-radius: 6px;
		}
		li {
			display: flex;
			align-items: center;
			gap: 0.3em;
			padding-left: 0.5em;
			border-radius: 8px;
			cursor: pointer;
			&:hover {
				background-color: var(--color-li-hover);
			}
			a {
				width: 100%;
				padding: 0.5em;
			}
		}

		li:where(:not(:first-child)) {
			margin-top: 0.7em;
		}
		&.active {
			opacity: 1;
			translate: 0;
		}
	}
}

.nav-link {
	display: flex;
	flex-direction: column;
	color: var(--nav-link-color);
	img {
		height: 22px;
		background-color: var(--icon-background-color);
		border-radius: 6px;
		width: auto;
		margin-inline: auto;
	}

	&:hover img {
		width: 100%;
	}
}

a.router-link-active img {
	width: 100%;
}

@media (min-width: 850px) {
	nav {
		.container {
			.menu {
				position: static;
				border: none;
				gap: 1em;
				font-size: 1.1rem;
				img {
					display: none;
				}
			}
		}
	}
	.nav-link {
		position: relative;
		color: var(--nav-link-color);
		&::before {
			content: "";
			position: absolute;
			bottom: -5px;
			left: 50%;
			height: 2px;
			width: 100%;
			scale: 0;
			background-color: var(--nav-link-color);
			translate: -50%;
			transition: scale 0.3s;
		}
		&:hover::before {
			scale: 1;
		}
	}

	.nav-link.router-link-active {
		&::before {
			scale: 1;
		}
	}
}
</style>
