<template>
	<base-section>
		<base-heading>
			<template #title> Add a new summary </template>
		</base-heading>
		<form @submit.prevent="submitForm">
			<div class="form-field">
				<label for="title">Title of the book:</label>
				<input
					:class="{ error: !title.isValid }"
					type="text"
					id="title"
					v-model.trim="title.value"
					placeholder="Enter the title of the book" />
				<p v-if="!title.isValid">Please eneter a valid title</p>
			</div>
			<div class="form-field">
				<label for="author">Author of the book:</label>
				<input
					:class="{ error: !author.isValid }"
					type="text"
					id="author"
					v-model.trim="author.value"
					placeholder="Enter the name of the Author " />
				<p v-if="!author.isValid">Please eneter a valid author name</p>
			</div>
			<div class="form-field">
				<label for="summary">Summary content:</label>
				<textarea
					:class="{ error: !text.isValid }"
					id="summary"
					rows="10"
					v-model="text.value"
					placeholder="Here you can write the summary"></textarea>
				<p v-if="!text.isValid">
					Please eneter a valid summary content
				</p>
			</div>
			<div class="form-field">
				<label for="category">Choose a Category: </label>
				<select
					id="category"
					v-model.trim="category.value"
					:class="{ error: !category.isValid }">
					<option disabled value="">Select a category</option>
					<option
						v-for="category in categories"
						:key="category"
						:value="category">
						{{ category }}
					</option>
				</select>
				<p v-if="!category.isValid">Please select a valid category</p>
			</div>
			<base-button mode="accent">Submit</base-button>
		</form>
	</base-section>
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import { onBeforeRouteLeave, useRouter } from "vue-router";
import { useBooksStore } from "/src/stores/booksStore.js";
import { useUserStore } from "/src/stores/userStore.js";
import { useAuthStore } from "/src/stores/authStore.js";
import { useSummaryStore } from "/src/stores/summaryStore.js";
const booksStore = useBooksStore();
const summaryStore = useSummaryStore();
const userStore = useUserStore();
const authStore = useAuthStore();
const router = useRouter();
const title = reactive({
	value: "",
	isValid: true,
});
const author = reactive({
	value: "",
	isValid: true,
});
const text = reactive({
	value: "",
	isValid: true,
});
const category = reactive({
	value: "",
	isValid: true,
});

const categories = ref([
	"Economics",
	"Business",
	"Entrepreneurship",
	"Health",
	"Productivity",
	"Sales",
	"Psychology",
	"Self-improvement",
	"Communication",
	"Management / Leadership",
	"Motivation",
	"Money / Finance",
	"Relationships",
	"Spiritual",
	"Philosophy",
	"Career / Success",
	"Mental health",
]);

const formIsValid = ref(true);
const clearErrors = () => {
	[title, author, text, category].forEach((el) => {
		el.isValid = true;
	});
};

onBeforeRouteLeave((_, _2, next) => {
	if (
		title.value.length > 0 ||
		author.value.length > 0 ||
		text.value.length > 0
	) {
		const userWantsToLeave = confirm(
			"are you sure you want to leave this page? You have unsaved changes!"
		);
		next(userWantsToLeave);
	} else {
		next(true);
	}
});

const submitForm = () => {
	clearErrors();
	formIsValid.value = true;
	[title, author, text, category].forEach((el) => {
		if (el.value === "" || el.value.length < 3) {
			el.isValid = false;
			formIsValid.value = false;
		}
	});

	if (formIsValid.value) {
		try {
			const id = new Date().getTime();
			booksStore.addBook({
				id: id.toString(),
				title: title.value,
				author: author.value,
				category: category.value,
				releaseDate: id,
				summarizedByUserId: authStore.userId,
				summarizedByUsername: userStore.user.username,
			});
			summaryStore.addSummary({
				id: id.toString(),
				summary: text.value,
				summarizedByUserId: authStore.userId,
			});
			userStore.user.writtenSummaries.push(id.toString());
      console.log(userStore.user.writtenSummaries);
			userStore.updateWrittenSummaries();
			title.value = "";
			author.value = "";
			text.value = "";
			category.value = "";
			router.replace("/bookapp/mylibrary");
		} catch (e) {
			console.log(e.message);
		}
	}
};
</script>

<style lang="scss" scoped>
form {
	margin-top: 100px;
}
button {
	width: 50%;
	margin-inline: auto;
}

input.error,
textarea.error,
select.error {
	border: 2px solid red;
}
</style>
