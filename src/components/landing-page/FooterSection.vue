<template>
	<base-section width="wide" bg="white">
		<footer>
			<base-logo :to="{ hash: '#banner' }"></base-logo>
			<div class="links">
				<ul>
					<li><h3>Menu</h3></li>
					<li><a href="#banner">Home</a></li>
					<li><a href="#pricing">Pricing</a></li>
					<li><a href="#best">About</a></li>
					<li>
						<router-link to="/auth/signup">Sign up</router-link>
					</li>
				</ul>
				<ul>
					<li><h3>Popular Categories</h3></li>
					<li><a href="#">Business</a></li>
					<li><a href="#">Entrepreneurship</a></li>
					<li><a href="#">Productivity</a></li>
					<li><a href="#">Mental Health</a></li>
				</ul>
				<ul>
					<li><h3>Popular book guides</h3></li>
					<li><a href="#">Rich dad, Poor dad</a></li>
					<li><a href="#">Atomic Habits</a></li>
					<li>
						<a href="#">How to win Friends and Influence Poeple</a>
					</li>
					<li><a href="#">12 Rules of life</a></li>
				</ul>
				<ul>
					<li><h3>Contact</h3></li>
					<li>
						<a href="mailto:email@email.com">
							<IconMail></IconMail>
							email@email.com
						</a>
					</li>
					<li>
						<IconMapPin></IconMapPin>
						USA
					</li>
				</ul>
			</div>
			<div class="social">
				<a href="#">
					<IconBrandFacebook :size="48"></IconBrandFacebook>
				</a>
				<a href="#">
					<IconBrandX :size="48"></IconBrandX>
				</a>
				<a href="#">
					<IconBrandInstagram :size="48"></IconBrandInstagram>
				</a>
				<a href="#">
					<IconBrandLinkedin :size="48"></IconBrandLinkedin>
				</a>
			</div>
		</footer>
		<p>Copyright © 2023 | All Rights Reserved</p>
	</base-section>
</template>

<script setup>
import {
	IconBrandFacebook,
	IconBrandX,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconMail,
	IconMapPin,
} from "@tabler/icons-vue";
</script>

<style lang="scss" scoped>
.section-padding {
	padding: 0;
}
.logo-container {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 6rem;
	font-size: 3rem;
}

.links {
	display: flex;
	flex-direction: column;
	gap: 1em;
}
ul {
	list-style: none;
	min-width: 180px;
  li, li > * {
    display: flex;
    gap: .3em;
    align-items: center;
  }
}

ul:last-of-type {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

a {
	color: grey;
	transition: color 0.3s;
	&:hover {
		color: #48dfe3;
	}
}

.social {
	display: flex;
	justify-content: center;
	margin-top: 2em;
	gap: 1em;
}
p {
	margin-top: 2em;
	text-align: center;
}
@media (min-width: 768px) {
	.links {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: start;
	}
}
</style>
