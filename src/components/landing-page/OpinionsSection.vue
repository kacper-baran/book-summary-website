<template>
	<base-section bg="light-grey">
		<base-heading>
			<template #title>Why people </template>
			<template #span>Love Us</template>
			<template #text>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
				eveniet porro rerum quaerat reiciendis tempore.
			</template>
		</base-heading>
		
		<base-card>
			<p class="quote" v-if="currentOpinionActive === 'userOne'">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
				praesentium nihil iusto iste ex veniam?
			</p>
			<p class="quote" v-if="currentOpinionActive === 'userTwo'">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
				ipsa reprehenderit natus cupiditate quasi? Expedita eaque
				mollitia qui quaerat ea.
			</p>
			<p class="quote" v-if="currentOpinionActive === 'userThree'">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
				dicta hic ut laudantium amet error doloremque sint quisquam
				quidem, nobis odit quos ducimus veritatis, molestias maxime
				quasi, cum quas ex.
			</p>
			<div class="info-block">
				<div
					class="info-inner"
					:class="{ active: opinonOneActive }"></div>
				<div
					class="info-inner"
					:class="{ active: opinonTwoActive }"></div>
				<div
					class="info-inner"
					:class="{ active: opinonThreeActive }"></div>
			</div>
			<div class="controls">
				<img
					:class="{ active: backArrowVisible }"
					@click="back"
					class="arrow-control"
					src="../../assets/img/arrow-left.svg"
					alt="" />
				<div
					class="user-container"
					v-if="currentOpinionActive === 'userOne'">
					<img
						src="../../assets/img/man-2442565_640.jpg"
						alt="Profile Picture" />
					Donald Smith
				</div>
				<div
					class="user-container"
					v-if="currentOpinionActive === 'userTwo'">
					<img
						src="../../assets/img/portrait-2194457_640.jpg"
						alt="Profile picture" />
					Micheal Relish
				</div>
				<div
					class="user-container"
					v-if="currentOpinionActive === 'userThree'">
					<img
						src="../../assets/img/happy-1836445_640.jpg"
						alt="Profile picture" />
					William Berrycloth
				</div>
				<img
					:class="{ active: nextArrowVisible }"
					@click="next"
					class="arrow-control"
					src="../../assets/img/arrow-right.svg"
					alt="" />
			</div>
		</base-card>
	</base-section>
</template>

<script setup>
import { ref, computed } from "vue";

const num = ref(0);
const nextArrowVisible = ref(true);
const backArrowVisible = ref(false);

const userOpinons = ref(["userOne", "userTwo", "userThree"]);
const currentOpinionActive = ref(userOpinons.value[num.value]);

const next = () => {
	num.value++;
	currentOpinionActive.value = userOpinons.value[num.value];
	if (num.value > 0) {
		backArrowVisible.value = true;
	}
	if (num.value === 2) {
		nextArrowVisible.value = false;
	} else nextArrowVisible.value = true;
};

const back = () => {
	num.value--;
	currentOpinionActive.value = userOpinons.value[num.value];

	if (num.value === 0) {
		backArrowVisible.value = false;
	} else backArrowVisible.value = true;
	if (num.value !== 0 && num.value < 2) {
		nextArrowVisible.value = true;
	}
};

const opinonOneActive = computed(() => {
	if (currentOpinionActive.value === "userOne") {
		return true;
	} else return false;
});
const opinonTwoActive = computed(() => {
	if (currentOpinionActive.value === "userTwo") {
		return true;
	} else return false;
});
const opinonThreeActive = computed(() => {
	if (currentOpinionActive.value === "userThree") {
		return true;
	} else return false;
});
</script>

<style lang="scss" scoped>

section {
	position: relative;
	z-index: 1;
}
.user-container img {
	width: 50px;
	aspect-ratio: 1;
	object-fit: cover;
	border-radius: 50%;
}

.user-container {
	display: flex;
	align-items: center;
	gap: 1em;
	margin: 1em;
}
.arrow-control {
	position: relative;
	width: 40px;
	cursor: pointer;
	opacity: 0;
	transition: translate 0.3s, opacity 0.3s;
	z-index: -1;
	&:first-of-type:hover {
		translate: -5px;
	}
	&:last-of-type:hover {
		translate: 5px;
	}
	&.active {
		opacity: 1;
		z-index: 1;
	}
}

.controls {
	display: flex;
	justify-content: center;
}


.info-block {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-block: 1em;
}

.info-inner {
	width: 35px;
	height: 3px;
	margin: 0.3em;
	background-color: rgba(0, 0, 0, 0.5);
	transition: height 0.3s, background-color 0.3s;
	&.active {
		background-color: black;
		height: 6px;
	}
}

.quote {
	position: relative;
	max-width: 700px;
	margin-inline: auto;
	margin-top: 2em;
	&::before {
		content: url("../../assets/img/quote.svg");
		position: absolute;
		top: -45px;
		left: -20px;
		opacity: 0.3;
		z-index: -1;
	}
}
</style>
