<template>
	<auth-container>
		<form @submit.prevent="submitForm">
			<h2>{{ title }}</h2>
			<div class="form-field">
				<label for="email">E-mail:</label>
				<input
					type="email"
					id="email"
					name="email"
					v-model.trim="email"
					placeholder="Enter your e-mail" />
			</div>
			<div class="form-field">
				<label for="password">Password:</label>
				<input
					type="password"
					id="password"
					name="password"
					v-model.trim="password"
					placeholder="Enter your password" />
			</div>
			<p class="error" v-if="!isLoading">
				{{ error || storeError }}
			</p>
			<div v-else>
				<base-spinner></base-spinner>
			</div>

			<div class="buttons">
				<base-button type="submit" mode="accent">{{
					submitButtonCaption
				}}</base-button>
				<base-button type="button" @click="switchCaption">{{
					linkButtonCaption
				}}</base-button>
			</div>
		</form>
	</auth-container>
</template>

<script setup>
import AuthContainer from "/src/components/auth/AuthContainer.vue";
import BaseSpinner from "/src/components/base/BaseSpinner.vue";
import { ref, computed } from "vue";
import { useAuthStore } from "../../stores/authStore.js";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useAuthStore();
const props = defineProps(["action"]);
const email = ref("");
const password = ref("");
const action = ref(props.action);
const isLoading = ref(false);
const error = ref("");

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

		if (!email.value.match(re)) {
			error.value = "invalid email";

			return;
		}
		if (password.value.length < 8) {
			error.value = "Password must be at least 8 characters long";
			return;
		}
		error.value = "";
	}

	try {
		isLoading.value = true;
		if (action.value === "login") {
			store.login({
				email: email.value,
				password: password.value,
			});
		} else {
			store.signup({
				email: email.value,
				password: password.value,
			});
		}
	} catch (err) {
		console.log(err.message);
	}
	isLoading.value = false;
};

const switchCaption = () => {
	if (action.value === "signup") {
		action.value = "login";
		router.replace("/auth/" + action.value);
	} else {
		action.value = "signup";
		router.replace("/auth/" + action.value);
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
</style>
