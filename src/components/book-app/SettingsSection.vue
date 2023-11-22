<template>
	<base-heading>
		<template #title> Settings </template>
	</base-heading>
	<base-section width="narrow" bh="white">
		<base-card>
			<h3>Delete Account</h3>
			<p>Your account and your data will be premanently deleted.</p>
			<p>You can't revert this action.</p>
			<base-button mode="delete" @click="deleteAccount"
				>Delete</base-button
			>
		</base-card>
	</base-section>
</template>

<script setup>
import { useUserStore } from "/src/stores/userStore.js";
const userStore = useUserStore();

const deleteAccount = () => {
	const userWantsToDeleteAccount = confirm(
		"Are you sure you want to delete your account?"
	);
	if (userWantsToDeleteAccount) {
		userStore.deleteAccount();
	}
};
</script>

<style lang="scss" scoped>
.heading {
	margin-top: 100px;
}

h3 {
	font-size: 2rem;
	text-align: center;
	font-weight: 100;
}

p {
	text-align: center;
}

.card {
	text-align: center;
	background-color: #ff000012;
	border: 2px solid #900;
	&:hover {
		scale: 1;
    border-color: red;
	}
	& > *:where(:not(:first-child)) {
		margin-top: 1em;
	}
}
</style>
