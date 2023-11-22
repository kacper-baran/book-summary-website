<template>
	<div v-if="userStore.user && booksStore.allBooks">
		<router-view></router-view>
	</div>
</template>

<script setup>
import { useBooksStore } from "/src/stores/booksStore.js";
import { useUserStore } from "/src/stores/userStore.js";
import { useAuthStore } from "/src/stores/authStore.js";

const authStore = useAuthStore();
const userStore = useUserStore();
const booksStore = useBooksStore();

authStore.autoLogin();
userStore.getUserData();
booksStore.getBooks();
</script>

<style lang="scss" scoped></style>
