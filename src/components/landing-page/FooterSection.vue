<template>
	<base-section width="wide" bg="white">
		<footer>
			<div class="logo-container">
				<img src="../../assets/img/logo-1.svg" alt="Logo" />
				Booker
			</div>
			<div class="links">
				<ul>
					<li><h3>Menu</h3></li>
					<li><a href="">Home</a></li>
					<li><a href="">Pricing</a></li>
					<li><a href="">About</a></li>
					<li><a href="">Sign up</a></li>
				</ul>
				<ul>
					<li><h3>Popular Categories</h3></li>
					<li><a href="">Business</a></li>
					<li><a href="">Entrepreneurship</a></li>
					<li><a href="">Productivity</a></li>
					<li><a href="">Mental Health</a></li>
				</ul>
				<ul>
					<li><h3>Popular book guides</h3></li>
					<li><a href="">Rich dad, Poor dad</a></li>
					<li><a href="">Atomic Habits</a></li>
					<li>
						<a href="">How to win Friends and Influence Poeple</a>
					</li>
					<li><a href="">12 Rules of life</a></li>
				</ul>
				<ul>
					<li><h3>Contact</h3></li>
					<li>
						<img src="../../assets/img/email.svg" alt="mail icon" />
						<a href=""> email@email.com </a>
					</li>
					<li>
						<img
							src="../../assets/img/location.svg"
							alt="map point icon" />
						USA
					</li>
				</ul>
			</div>
			<div class="social">
				<a href=""
					><img
						src="../../assets/img/brand-facebook.svg"
						alt="facebook icon"
				/></a>
				<a href="">
					<img src="../../assets/img/brand-x.svg" alt="x icon" />
				</a>
				<a href="">
					<img
						src="../../assets/img/brand-instagram.svg"
						alt="instagram icon" />
				</a>
				<a href="">
					<img
						src="../../assets/img/brand-linkedin.svg"
						alt="linkedin icon" />
				</a>
			</div>
		</footer>
		<p>Copyright © 2023 | All Rights Reserved</p>
	</base-section>
</template>

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
	img {
		height: 50px;
	}
}

.links {
	display: flex;
	flex-direction: column;
	gap: 1em;
}
ul {
	list-style: none;
	min-width: 180px;
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
	img {
		border-radius: 8px;
		background-color: var(--icon-background-color);
	}
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
