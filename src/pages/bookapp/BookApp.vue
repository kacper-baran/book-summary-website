<template>
	<AppNav />
	<div v-if="summaryStore.popupMsg">
		<base-popup> {{summaryStore.popupMsg}} </base-popup>
	</div>
	<div class="container">
		<div v-if="userStore.user">
			<router-view></router-view>
		</div>
	</div>
</template>

<script setup>
import AppNav from "/src/components/book-app/AppNav.vue";
import { useAuthStore } from "/src/stores/authStore.js";
import { useUserStore } from "/src/stores/userStore.js";
import { useSummaryStore } from "/src/stores/summaryStore.js";
import { useRouter } from "vue-router";
import BasePopup from "/src/components/base/BasePopup.vue";
import { ref } from "vue";
const router = useRouter();
const authStore = useAuthStore();
const summaryStore = useSummaryStore();
const userStore = useUserStore();

authStore.autoLogin();

if (!userStore.user) {
	userStore.getUserData();
}

if (!authStore.isLoggedIn) {
	router.replace("/login");
}
</script>

<style lang="scss" scoped>
.container {
	padding-top: 50px;
}
</style>
