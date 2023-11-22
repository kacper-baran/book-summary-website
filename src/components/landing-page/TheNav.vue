<template>
	<nav id="navbar">
		<div class="container">
			<base-logo :to="{ name: 'home' }"></base-logo>
			<ul class="menu" :class="{ menuActive: menuActive }">
				<li>
					<router-link
						class="nav-link"
						@click="closeMenu"
						:to="{ name: 'home' }">
						Home
					</router-link>
				</li>
				<li>
					<a
						class="nav-link"
						@click="closeMenu"
						href="#best">
						About
					</a>
				</li>
				<li>
					<a class="nav-link" @click="closeMenu" href="#pricing">
						Pricing
					</a>
				</li>
				<li>
					<base-button mode="accent" link to="/auth/signup"
						>Sign up</base-button
					>
				</li>
				<li>
					<base-button mode="flat" link to="/auth/login"
						>Log in</base-button
					>
				</li>
			</ul>
			<button
				class="hamburger desktop"
				:class="{ active: hamburgerActive }"
				@click="handleMenu">
				<div class="hamburger__inner">
					<div class="hamburger-item"></div>
					<div class="hamburger-item"></div>
					<div class="hamburger-item"></div>
				</div>
			</button>
		</div>
	</nav>
</template>

<script setup>
import { ref } from "vue";
import { onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "/src/stores/authStore.js";
const authStore = useAuthStore();
const route = useRoute();
const menuActive = ref(false);
const hamburgerActive = ref(false);

const body = document.querySelector("body");
const handleMenu = () => {
	hamburgerActive.value = !hamburgerActive.value;
	menuActive.value = !menuActive.value;
	body.classList.toggle("locked");
};

const closeMenu = () => {
	menuActive.value = false;
	hamburgerActive.value = false;
	body.classList.remove("locked");
};

const navActive = ref(true);
//Prevents errors when routing to diffrent pages
onBeforeUnmount(() => {
	navActive.value = false;
});

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	if (navActive.value) {
		let currentScrollPos = window.pageYOffset;
		if (menuActive.value !== true) {
			if (prevScrollpos > currentScrollPos) {
				document.getElementById("navbar").style.top = "0";
			} else {
				document.getElementById("navbar").style.top = "-130px";
			}
			prevScrollpos = currentScrollPos;
		}
	}
};
</script>

<style lang="scss" scoped>
nav {
	position: fixed;
	background-color: var(--nav-background-color);
	width: 100%;
	padding: 1em;
	z-index: 10;
	transition: top 0.3s ease-in;
	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 70rem;
		margin-inline: auto;
		padding-inline: 1rem;
	}

	.menu {
		position: fixed;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		inset: 0;
		background-color: var(--nav-background-color);
		translate: 120vw;
		transition: translate 0.3s ease-out;
		z-index: 100;
		&.menuActive {
			translate: 0;
		}
	}
	.logo-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
		&:hover img {
			rotate: 90deg;
		}
	}
	img {
		width: 50px;
		transition: rotate 0.3s;
	}
	ul {
		display: flex;
		flex-direction: column;

		gap: 3rem;
		list-style: none;
	}
	.auth {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
}

.hamburger {
	position: relative;
	background-color: transparent;
	padding: 1em;
	width: 40px;
	z-index: 1000;

	&-item {
		position: absolute;
		height: 4px;
		width: 100%;
		background-color: var(--nav-hamburger-color);
		transition: all 0.3s ease-out;
		border-radius: 10px;
		&:first-child {
			top: 0;
		}

		&:last-child {
			bottom: 0;
		}
		&:nth-child(2) {
			top: 50%;
			translate: 0 -50%;
		}
	}
	&.active .hamburger-item:first-child,
	&.active .hamburger-item:last-child {
		right: 0;
		width: 90%;
	}

	&.active .hamburger-item:first-child {
		rotate: -135deg;
	}
	&.active .hamburger-item:last-child {
		rotate: 135deg;
	}

	&.active .hamburger-item:nth-child(2) {
		left: 0;
		width: 85%;
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

@media (min-width: 880px) {
	nav {
		.menu {
			position: relative;
			inset: auto;
			height: auto;
			width: auto;
			translate: 0;
		}

		ul,
		.auth,
		.menu {
			flex-direction: row;
		}

		.desktop {
			display: none;
		}
	}
}
</style>
