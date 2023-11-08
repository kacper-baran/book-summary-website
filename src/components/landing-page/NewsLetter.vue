<template>
	<base-section bg="white" width="wide">
		<div class="card">
			<div class="card-header">
				<h2>Sign up to news letter👋</h2>
				<p>Get samples of our best book guides</p>
			</div>
			<div class="email-input">
				<input type="text" placeholder="Enter your email"/>
				<base-button>Sign up now</base-button>
			</div>
		</div>
	</base-section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
	display: flex;
	gap: 2rem;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-inline: auto;
	width: 100%;
	background-color: #48dfe3;
	border-radius: 3rem;
	padding: 3em;
	margin-block: 4em;
	&-header {
		text-align: center;
		flex-grow: 1;
	}
}

h2 {
	margin: 0;
}

.email-input {
	display: flex;
	flex-direction: column;
	gap: 1em;
	width: 100%;
	align-items: center;
	border-radius: 5rem;

	input {
		width: 100%;
		border: 1px solid;
    border-color: var(--color-border-grey);
		font-size: 1rem;
		border-radius: 5rem;
		padding: 1em;
	}
	button {
		width: 100%;
		font-size: 0.8rem;
		&:hover {
      border-color: var(--border-color);
			background-color: #fff;
		}
	}
}

@media (min-width: 950px) {
	.card {
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.card-header {
		display: flex;
		flex-direction: column;
		width: 60%;
		justify-content: center;
		align-items: center;
	}

	.email-input {
		// flex-direction: row;
	}
	button {
		width: 40%;
	}
}
</style>
