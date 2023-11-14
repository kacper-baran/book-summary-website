<template>
	<base-section bg="white" width="narrow">
  <base-heading>
  <template #title>Plus more </template>
			<template #span>Useful Features</template>
			<template #text>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
				aliquam provident natus maxime, quas a.
			</template>
  </base-heading>
		<div class="body">
			<base-card
				><img src="../../assets/img/notes.svg" alt="notes icon" />
				<p>Printable and well formated PDF's</p></base-card
			>
			<base-card
				><img
					src="../../assets/img/highlight.svg"
					alt="highlight icon" />
				<p>Highlight your Favorite passages</p></base-card
			>
			<base-card
				><img src="../../assets/img/download.svg" alt="download icon" />
				<p>Take Notes on your Favorite Books</p></base-card
			>
		</div>
		<div class="button">
			<base-button link to="/auth/signup" mode="accent">Sign up</base-button>
		</div>
	</base-section>
</template>

<style lang="scss" scoped>
.body {
	display: flex;
	flex-direction: column;
	gap: 1em;
	margin-top: 2em;
}
.button {
  display: flex;
  justify-content: center;
  margin-top: 2em;
}

@media (min-width: 55rem) {
	.body {
		text-align: center;
		flex-direction: row;
	}
}
</style>
