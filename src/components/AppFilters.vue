<template lang="pug">
.filters
	label(for="searchQuery")
		input(type="text" v-model="filters.searchQuery" placeholder="Search")
	label(for="newArray") New Array
		input(type="checkbox" value="newArray" v-model="filters.newArray")
	label(for="boolean") Boolean
		input(type="checkbox" value="boolean" v-model="filters.boolean")
	label(for="iterator") Iterator
		input(type="checkbox" value="iterator" v-model="filters.iterator")
</template>

<script>
export default {
	name: 'AppFilters',
	props: ['filters'],
	mounted() {
		// console.log(Object.entries(this.filters));
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/scss/variables';

</style>
