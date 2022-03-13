<script setup>
import LogoImg from '@/components/core/LogoImg.vue';
import IconsFa from '@/components/core/IconsFa.vue';
</script>

<script>
export default {
	components: {LogoImg, IconsFa}
}
</script>

<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-color">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">
				<RouterLink to="/"><LogoImg size="60" /></RouterLink>
				<RouterLink class="nav-title" to="/">cointoday</RouterLink>
			</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
				<IconsFa icon="fa-bars" />
			</button>
			<div class="collapse navbar-collapse" id="navbarScroll">
				<ul class="navbar-nav me-auto my-2 my-lg-0">
					<li class="nav-item">
						<RouterLink to="/" class="nav-link">Home</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink to="/settings" class="nav-link">Settings</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink to="/about" class="nav-link">About</RouterLink>
					</li>
				</ul>
				<ul class="navbar-nav d-flex">
					<li class="nav-item">
						<a href="https://github.com/cointoday/cointoday.github.io" target="_blank">
							<IconsFa icon="fa-github" :size="'36px'" title="Cointoday at github" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
@import "@/assets/css/tokens.scss";

nav {
	padding: 0px !important;
}

.navbar-dark .navbar-toggler {
	color: $navbarLinkColor !important;
	border: none !important;
	box-shadow: none;
}

.bg-color {
    background-color: $navbarBackgroundColor !important;
}

.nav-title {
	color: $navbarTextTitleColor !important;
	text-decoration: none !important;
}

.navbar-dark .navbar-nav .nav-link {
    color: $navbarLinkColor !important;
}

.navbar-dark:hover .navbar-nav:hover .nav-link:hover {
    color: $navbarLinkColorHover !important;
}

@media (max-width: 991px) {
	.navbar .navbar-nav {
		display: inline-block;
		float: none;
		vertical-align: top;
		width: 100%;
	}

	.navbar .navbar-collapse {
		text-align: center;
	}
}
</style>