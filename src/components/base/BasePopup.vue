<template>
	<base-card>
		<IconX class="icon" size="30" @click="closePopup"></IconX>
		<div>
			<slot></slot>
		</div>
	</base-card>
</template>

<script setup>
import { useSummaryStore } from "/src/stores/summaryStore.js";
import { IconX } from "@tabler/icons-vue";
const summaryStore = useSummaryStore();

const closePopup = () => {
	summaryStore.popupMsg = null;
};
</script>

<style lang="scss" scoped>
.card {
	display: flex;
	gap: 1em;
	align-items: center;
	position: fixed;
	left: 50%;
	width: fit-content;
	z-index: 10000;
	translate: -50% 0;
	padding: 1em;
	margin: 1em;
}
.icon {
	cursor: pointer;
}
</style>
