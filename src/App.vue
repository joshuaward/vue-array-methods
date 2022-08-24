<template lang="pug">
AppHeader
RouterView
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
	Name: "App Header",
	components: {
		AppHeader
	}
}

</script>

<style lang="scss">
@import './assets/scss/variables';

*, *:before, *:after {
	box-sizing: border-box;
	outline: none;
}

// * {
// 	outline: 1px solid red;
// }

html {
	font-family: $roboto;
	font-size: 16px;
	font-smooth: auto;
	font-weight: 300;
	line-height: 1.5;
	color: #444;
}

body {
	position: relative;
	margin: 0;
	padding: 0;
	background-color: $color1;
	color: rgba($white,0.8);
}

h1, h2, h3, h4, h5, h6 {
	font-family: $robotoSlab;
}

pre {
	// background-color: $code-bg;
	color: MediumAquamarine;
}

code {
	display: inline;
	padding: 0.0625rem 0.25rem;
	// background-color: $code-bg;
	border-radius: 0.1875rem;
	color: IndianRed;
	small {
		color: hotpink;
	}
}



.container {
	max-width: 90rem;
	margin: 0 2rem;
	@media (min-width: 90rem) {
		margin: 0 auto;
	}
}

.row {
	display: flex;
}
</style>
