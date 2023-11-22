<template>
	<base-card :class="responsivity" @click="goToDetails">
		<div class="img">
			<div class="book-cover">
				<p>{{ title }}</p>
			</div>
		</div>
		<div class="text">
			<div>
				<p>{{ category }}</p>
				<IconBookmarkFilled
					class="icon"
					v-if="saved"
					:size="30"
					color="#48dfe3"
					@click="removeFromSaved(id)">
				</IconBookmarkFilled>
				<IconBookmark
					class="icon"
					v-else
					:size="30"
					@click="addToSaved(id)"></IconBookmark>
			</div>
			<h4>{{ title }}</h4>
			<p>By {{ author }}</p>
		</div>
	</base-card>
</template>

<script setup>
import { IconBookmark, IconBookmarkFilled } from "@tabler/icons-vue";
import { useRouter } from "vue-router";
import useHandleSaved from "/src/hooks/handleSaved.js";

const router = useRouter();
const props = defineProps([
	"responsivity",
	"title",
	"id",
	"category",
	"author",
	"saved",
]);

const { addToSaved, removeFromSaved } = useHandleSaved(props.id);

const goToDetails = (e) => {
	if (e.target.tagName === "svg" || e.target.tagName === "path") {
		return;
	} else {
		router.push("/bookapp/details/" + props.id);
	}
};
</script>

<style lang="scss" scoped>
.card {
	width: 275px;
	height: 100%;
	cursor: pointer;
	word-wrap: break-word;
	.img {
		display: flex;
		position: relative;
		margin-bottom: 0.5em;
		p {
			color: black;
			width: 100%;
			text-align: center;
			margin-top: 1em;
			padding: 0.2em;
			font-size: 1.2rem;
		}

		.book-cover {
			width: 150px;
			aspect-ratio: 1 / 1.5;
			background-color: #fff;
			border: 2px solid black;
			margin-inline: auto;
			padding: 0.5em;
			border-radius: 5px;
			word-wrap: break-word;
			transition: scale 0.3s;
			p {
				font-size: 12px;
			}
		}
	}
	.text {
		display: flex;
		flex-direction: column;
		gap: 1em;
		div {
			display: flex;
			justify-content: space-between;
			align-items: center;

			& > * {
				height: 100%;
			}
		}
		h3 {
			font-size: 2rem;
		}
		p {
			margin-top: auto;
		}
	}
	&:hover {
		scale: none;
	}
	&:hover .book-cover {
		scale: 1.1;
	}
}

.icon {
	cursor: copy;
}

.scroll {
	width: 275px;
	.img {
		.book-cover {
			margin-bottom: 1em;
		}
	}
}

.auto {
	display: flex;
	justify-content: space-between;
	gap: 1em;
	width: 100%;
	.img {
		border: none;
		.book-cover {
		}
	}
	.text {
		flex-grow: 1;
	}
}
</style>
