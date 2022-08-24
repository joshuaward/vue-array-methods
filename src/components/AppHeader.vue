<template lang="pug">
header.header
	.container
		.row
			router-link.header__logo(to="/")
				img(src="../assets/js_logo.svg")
			nav.header__nav
				router-link(to="/") Home
				router-link(to="/about") About
</template>

<script>

</script>

<style lang="scss">
@import '../assets/scss/variables';

.header {
	width: 100%;
	margin-bottom: 2rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
	background-color: rgba($white, 0.1);
	.row {
		align-items: center;
		justify-content: space-between;
	}
	&__logo {
		display: block;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		overflow: hidden;
		img {
			width: 100%;
			height: 100%;
		}
	}
	&__nav {
		a {
			color: $white;
			&:not(:last-child) {
				margin-right: 0.5rem;
			}
		}
	}
}
</style>