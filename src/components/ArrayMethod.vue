<template lang="pug">
.item
	.item__inner
		.item__info
			h3
				pre {{ item.name }} #[code.returns(v-if="item.tag") #[small {{ item.tag }}]]
			p.item__description(v-html="item.description")
		.item__example
			pre(v-if="item.example" v-html="item.example")
</template>

<script>
export default {
	name: 'ArrayMethod',
	props: ['item']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/scss/variables';

.item {
	position: relative;
	display: block;
	width: 100%;
	margin-bottom: 2rem;
	padding: 1.25rem;
	background-color: rgba($white, 0.125);
	border-radius: 0.3125rem;
	&__inner {
		display: flex;
		flex-direction: column;
		@media (min-width: 90rem) {
			flex-direction: row;
		}
	}
	&__info {
		@media (min-width: 90rem) {
			flex-direction: row;
			flex: 0 0 calc(50% - 1rem);
			max-width: calc(50% - 1rem);
			margin-right: 1rem;
		}
		.returns {
			background-color: $code-bg;
			font-size: 1rem;
			font-weight: normal;
		}
	}
	&__description {
		code {
			background-color: $code-bg;
		}
	}
	&__example {
		@media (min-width: 90rem) {
			flex: 0 0 calc(50% - 1rem);
			max-width: calc(50% - 1rem);
			margin-left: 1rem;
		}
		pre {
			padding: 1rem;
			background-color: $code-bg;
			border-radius: 0.3125rem;
			white-space: pre-wrap;
			> code {
				color: $white;
			}
		}
		.return {
			opacity: 0.7;
		}
	}
}
</style>
