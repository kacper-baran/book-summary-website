<template>

	<nav id="navbar">
		<div class="container">
			<base-logo :to="{ name: 'bookapp'}"></base-logo>
			<ul class="menu">
				<li>
					<router-link class="nav-link" to="/bookapp/discover">
						<IconWorld class="icon"></IconWorld>
						Discover
					</router-link>
				</li>
				<li>
					<router-link class="nav-link" to="/bookapp/books">
						<IconBook2 class="icon"></IconBook2>
						Books
					</router-link>
				</li>
				<li>
					<router-link class="nav-link" to="/bookapp/addsummary">
						<IconNotes class="icon"></IconNotes>
						Add summary
					</router-link>
				</li>
				<li>
					<router-link class="nav-link" to="/bookapp/mylibrary">
						<IconBooks class="icon"></IconBooks>
						My Library
					</router-link>
				</li>
			</ul>
			<div class="controls">
				<base-button class="desktop" @click="logout"
					>Logout</base-button
				>
				<div class="profile" @click="handleDropdown">
					<IconUser
						class="icon icon-user"
						stroke-width="1"></IconUser>
					<IconCaretDown class="dropdown-icon"></IconCaretDown>
				</div>
				<div
					class="backdrop"
					:class="{ active: dropdownActive }"
					@click="handleDropdown"></div>
				<ul class="dropdown" :class="{ active: dropdownActive }">
					<li>
						<IconSettings></IconSettings>
						<router-link to="/bookapp/settings"
							>Settings</router-link
						>
					</li>
					<li>
						<IconInfoSquareRoundedFilled></IconInfoSquareRoundedFilled>
						<router-link to="/bookapp/support">Support</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { ref, watch } from "vue";
import { onBeforeUnmount } from "vue";
import { useAuthStore } from "../../stores/authStore.js";
import { useRouter } from "vue-router";
import {
	IconWorld,
	IconBooks,
	IconNotes,
	IconBook2,
	IconWallet,
	IconHighlight,
	IconSettings,
	IconInfoSquareRoundedFilled,
	IconUser,
	IconCaretDown,
} from "@tabler/icons-vue";

const props = defineProps(["menuActive"]);
const dropdownActive = ref(false);
const store = useAuthStore();

const navActive = ref(true);
//Prevents errors when routing to diffrent pages
onBeforeUnmount(() => {
	navActive.value = false;
});

watch(dropdownActive, () => {
	document.addEventListener("click", closeIfClickedOutside);
});

const handleDropdown = () => {
	dropdownActive.value = !dropdownActive.value;
};

const closeIfClickedOutside = (event) => {
	if (!document.querySelector(".profile").contains(event.target)) {
		dropdownActive.value = false;
		document.removeEventListener("click", closeIfClickedOutside);
	}
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
			document.removeEventListener("click", closeIfClickedOutside);
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
		background-color: var(--nav-background-color);
		border-top: 1px solid #fff;
		font-size: 0.8rem;
		padding: 1em;
		list-style: none;
	}
}

.controls {
	position: relative;
	display: flex;
	align-items: center;
	gap: 1em;
	.profile {
		position: relative;
		display: flex;
		align-items: center;
		cursor: pointer;

		.profile-picture,
		.dropdown-icon {
			position: relative;
			z-index: -1;
		}
		.icon {
			height: 50px;
			width: 50px;
			aspect-ratio: 1;
			border: 1px solid;
			border-color: var(--color-border);
			border-radius: 50%;
		}
		.dropdown-icon {
			width: 30px;
		}
	}
	.dropdown {
		position: absolute;
		top: 80px;
		right: 1rem;
		opacity: 0;
		visibility: hidden;
		padding: 1em;
		width: 250px;
		border-radius: 10px;
		background-color: var(--dropdown-background-color);
		border: 1px solid;
		border-color: var(--dropdown-border-color);
		translate: 0 -50px;
		transition: opacity 0.3s, translate 0.3s;
		li {
			display: flex;
			align-items: center;
			justify-content: center;
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
			visibility: visible;
			opacity: 1;
			translate: 0;
		}
	}
}

.nav-link {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: var(--nav-link-color);

	&::before {
		content: "";
		position: absolute;
		bottom: -3px;
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

.icon-user {
	transition: color 0.3s;
	&:hover {
		color: #48dfe3;
	}
}

@media (min-width: 970px) {
	.nav-link {
		font-size: 1.3rem;
	}
}

.nav-link {
  font-size: clamp(.9rem, 1.5vw, 1.4rem);
}

@media (min-width: 880px) {
	nav {
		.container {
			.menu {
				position: static;
				border: none;
				gap: 1em;
				font-size: 0.9rem;
			}
		}
	}

	.nav-link {
		flex-direction: row;
		gap: 0.2rem;
	}
}
</style>
