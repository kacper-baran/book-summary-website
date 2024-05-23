<template>
	<auth-container>
		<form @submit.prevent="submitForm" v-if="!isLoading">
			<h2>{{ title }}</h2>
			<div class="form-field">
				<label for="email">E-mail:</label>
				<input
					type="email"
					id="email"
					name="email"
					v-model.trim="email"
					autocomplete="email"
					placeholder="Enter your e-mail" />
			</div>
			<div class="form-field" v-if="action === 'signup'">
				<label for="email">Username</label>
				<input
					type="text"
					id="username"
					name="username"
					v-model.trim="username"
					placeholder="Enter your username" />
			</div>

			<div class="form-field">
				<label for="password">Password:</label>
				<input
					type="password"
					id="password"
					name="password"
					v-model.trim="password"
					autocomplete="current-password"
					placeholder="Enter your password" />
			</div>
			<!-- <div class="form-field" v-if="action === 'signup'">
				<label for="email">Repeat Password</label>
				<input
					type="text"
					id="repeat-password"
					name="repeat-password"
					v-model.trim="repeatPassword"
					autocomplete="current-password"
					placeholder="Enter your username" />
			</div> -->
			<p class="error">
				{{ error || storeError }}
			</p>
			<div class="buttons">
				<base-button type="submit" mode="accent">{{
					submitButtonCaption
				}}</base-button>
				<base-button type="button" @click="switchCaption">{{
					linkButtonCaption
				}}</base-button>
			</div>
		</form>
		<div v-if="isLoading">
			<base-loader></base-loader>
		</div>
	</auth-container>
</template>

<script setup>
import AuthContainer from "/src/components/auth/AuthContainer.vue";
import { ref, computed, watch } from "vue";
import { useAuthStore } from "../../stores/authStore.js";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useAuthStore();
const props = defineProps(["action"]);
const email = ref("");
const username = ref("");
const password = ref("");
// const repeatPassword = ref("");

const action = ref(props.action);

const isLoading = ref(false);
const error = ref("");

if (action.value !== "login" || action.value !== "signup") {
	router.replace("/login");
}

const storeError = computed(() => {
	if (store.error) {
		error.value = store.error.toLowerCase().replaceAll("_", " ");
	}
});

const submitForm = async () => {
	error.value = "";
	if (action.value === "signup") {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		// if (!email.value.match(re)) {
		// 	error.value = "invalid email";
		// 	return;
		// }
		// if (username.value.length < 3) {
		// 	error.value = "Username must be at least 3 characters";
		// 	return;
		// }
		// if (password.value.length < 8) {
		// 	error.value = "Password must be at least 8 characters long";
		// 	return;
		// }
		error.value = "";
	}

	if (action.value !== "signup") {
		error.value = "test";
		const auth = await store.auth({
			email: email.value,
			password: password.value,
			action: action.value,
		});
	} else {
		store.auth({
			email: email.value,
			username: username.value,
			password: password.value,
			action: action.value,
		});
	}

	try {
		// store.auth({
		// 	email: email.value,
		// 	password: password.value,
		// 	action: action.value,
		// });
		// if (action.value !== "signup") {
		// 	store.auth({
		// 		email: email.value,
		// 		password: password.value,
		// 		action: action.value,
		// 	});
		// } else {
		// 	store.auth({
		// 		email: email.value,
		// 		username: username.value,
		// 		password: password.value,
		// 		action: action.value,
		// 	});
		// }
	} catch (error) {
		console.log(error.message);
	}
};

const switchCaption = () => {
	error.value = "";
	if (action.value === "signup") {
		action.value = "login";
		router.replace(action.value);
	} else {
		action.value = "signup";
		router.replace(action.value);
	}
};

const title = computed(() => {
	if (action.value === "login") {
		return "Log in";
	} else return "Sign up";
});

const submitButtonCaption = computed(() => {
	if (action.value === "login") {
		return "Log in";
	} else {
		return "Sign up";
	}
});
const linkButtonCaption = computed(() => {
	if (action.value === "login") {
		return "Or sign up";
	} else {
		return "Or log in";
	}
});
</script>

<style lang="scss" scoped>
.error:first-letter {
	text-transform: uppercase;
}
form {
	border: 1px solid white;
	padding: 2rem;
	border-radius: 8px;
}
</style>
