<template>
	<base-section width="narrow" bg="white">
		<base-heading>
			<template #title>Contact</template>
			<template #text>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
				repellendus explicabo molestias corporis, praesentium
				quam.</template
			>
		</base-heading>
		<form @submit.prevent>
			<div class="form-field">
				<label for="email">Your Email:</label>
				<input
					type="text"
					name="email"
					id="email"
					placeholder="Enter you email" />
			</div>
			<div class="form-field">
				<label for="message">Message:</label>
				<textarea
					name="message"
					rows="10"
					id="message"
					placeholder="Enter your message"></textarea>
			</div>
			<base-button mode="accent">Send message</base-button>
		</form>
	</base-section>
	<base-section class="map" width="full-bleed" bg="light-grey">
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d47693.70003560445!2d-74.04155871207402!3d40.72923309292011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2spl!4v1700646479876!5m2!1sen!2spl"
			width="600"
			height="450"
			style="border: 0"
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"></iframe>
	</base-section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.map {
	padding-inline: 0;
}
iframe {
	width: 100%;
}
form button {
	width: fit-content;
}
</style>
