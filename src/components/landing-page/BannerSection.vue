<template>
	<base-section bg="white" width="full-bleed" id="banner">
		<div class="full-width-split-screen">
			<div class="text">
				<h1>
					<span>get smarter. Faster</span>
					<br />
					Best non-fiction book summaries
				</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Voluptate in nam ad repellendus cumque dolores error saepe
					assumenda quod! Blanditiis?
				</p>
				<div class="buttons">
					<base-button mode="accent">Sign up</base-button>
					<base-button>Browse books</base-button>
				</div>
			</div>
			<img src="../../assets/img/laptop-hero.png" alt="laptop image" />
		</div>
	</base-section>
</template>

<script setup></script>

<style lang="scss" scoped>


$wrapper-padding-inline: 2rem;
$section-padding-block: 5rem;

section {
	display: grid;
	place-items: center;
	width: 100vw;
	min-height: 100vh;
  padding-block: $section-padding-block;
}

#banner {
  padding: 0;
}

img {
	width: 100%;
}

.text > *:where(:not(:first-child)) {
	margin-top: 1.5rem;
}

h1 {
	font-size: 3rem;
	line-height: 1;
	span {
		font-size: 1.6rem;
		font-weight: 500;
	}
}
.buttons {
	display: flex;
	gap: 1rem;
}

.full-width-split-screen {
  position: relative;
  z-index: 1;
}

/* remove the padding so images can take up the entire height */
.full-width-split-screen > *:where(:not(:first-child)){
	margin-top: 1.5rem;
}

/* match the section padding for the text blocks for
consistency */
.full-width-split-screen {
	padding-block: $section-padding-block;
	padding-inline: $wrapper-padding-inline;
}

.full-width-split-screen {
  padding-right: 0;
}

@media (min-width: 900px) {

	.full-width-split-screen {
		/* outermost columns emulate the spacing from the .wrapper
     while the two inner columns divide the rest of the space
     into two equal parts */
		display: grid;
		grid-template-columns:
			minmax(1rem, 1fr)
			minmax(0, 30rem)
			minmax(0, 30rem)
			minmax(1rem, 1fr);

		/* for positioning the pseudo-elements
       to fill in the rest of the background*/
		position: relative;
		place-items: center;
	}

	/* ensure the image fill up the entire space available */
	.full-width-split-screen > img {
		object-fit: cover;
	}

	/* image covers the entire right half */
	.full-width-split-screen > img:last-child {
		display: grid;

		grid-column: 3 / -1;
	}

	/* make sure text doesn't touch the edge of the viewport 
   and the content is vertically centered */
	.full-width-split-screen > :not(img) {
		display: grid;
		align-content: center;
		justify-items: start;
	}

	/* if the non-image is first, place it in the second column
     (first column is empty to emulate the .wrapper) */
	.full-width-split-screen > :not(img):first-child {
		padding-left: 0;
		grid-column: 2 / 3;
	}
}
</style>
