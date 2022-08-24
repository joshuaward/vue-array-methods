<template lang="pug">
.container
	.row 
		h1 JavaScript [Array] Methods
.container
	.row
		AppFilters(:filters="filters" @filteredList="filteredList")
.container
	ArrayMethod(
		v-for="(item,i) in filteredList"
		:key="i"
		:item="item"
	)
</template>

<script>
// @ is an alias to /src
import AppFilters from '@/components/AppFilters.vue'
import ArrayMethod from '@/components/ArrayMethod.vue'

export default {
  name: 'HomeView',
  components: {
    ArrayMethod,
		AppFilters
  },
	data() {
		return {
			filters: {
				newArray: false,
				boolean: false,
				iterator: false,
				searchQuery: ''
			},
			arrayMethods: [
				{
					name: "Array.prototype.at()",
					tag: "",
					description: "Returns the array at the given index. Accepts negative integers, which count back from the last item in the array.",
					example: ""
				},
				{
					name: "Array.prototype.concat()",
					tag: "New Array",
					description: "Returns a <strong>new</strong> array that is calling array joined with other array(s) and/or value(s)."
				},
				{
					name: "Array.prototype.every()",
					tag: "Boolean",
					description: "Returns <code><code>true</code></code> if every element in the calling array satisfies the testing function."
				},
				{
					name: "Array.prototype.filter()",
					tag: "New Array",
					description: "Returns a <strong>new</strong> array containing all elements of the calling array for which the provided filtering function returns <code>true</code>."
				},
				{
					name: "Array.prototype.forEach()",
					tag: "Iterator",
					description: "Calls a function for each element in the calling array."
				},
				{
					name: "Array.prototype.includes()",
					tag: "Boolean",
					description: "Determines whether the calling array contains a value, returning <code>true</code> or <code>false</code> as appropriate."
				},
				{
					name: "Array.prototype.join()",
					tag: "",
					description: "Joins all elements of an array into a string."
				},
				{
					name: "Array.prototype.map()",
					tag: "New Array",
					description: "Returns a <strong>new</strong> array containing the results of invoking function on every element in the calling array.",
					example: "<code>let arr = [1,2,3,4,5,6];<br>let arr2 = arr.map(item => item < 5);<br><br>New Array <span class=\"return\">// [true, true, true, true, false, false]</span></code>"
				},
				{
					name: "Array.prototype.pop()",
					tag: "",
					description: "Removes the last element from an array and returns that element."
				},
				{
					name: "Array.prototype.push()",
					tag: "",
					description: "Adds one or more elements to the end of an array, and returns the new <code>length</code> of the array."
				},
				{
					name: "Array.prototype.reduce()",
					tag: "",
					description: "Executes a user supplied \"reducer\" callback function on each element of the array (from left to right), to reduce it to a single value."
				},
				{
					name: "Array.prototype.reduceRight()",
					tag: "",
					description: "Executes a user-supplied \"reducer\" callback function on each element of the array (from right to left), to reduce it to a sigle value."
				},
				{
					name: "Array.prototype.reverse()",
					tag: "",
					description: "Reverses the order of the elements of an array in place. (First becomes the last, last becomes the first)"
				},
				{
					name: "Array.prototype.shift()",
					tag: "",
					description: "Removes the first element from an array and returns that element."
				},
				{
					name: "Array.prototype.slice()",
					tag: "New Array",
					description: "Extracts a section of the calling array and returns a <strong>new</strong> array."
				},
				{
					name: "Array.prototype.some()",
					tag: "Boolean",
					description: "Returns <code>true</code> if at least one element in the calling array satisfies the provided testing function."
				},
				{
					name: "Array.prototype.sort()",
					tag: "",
					description: "Sorts the elements of an array in place and returns the array."
				},
				{
					name: "Array.prototype.splice()",
					tag: "",
					description: "Adds and/or removes elements of an array."
				},
				{
					name: "Array.prototype.toString()",
					tag: "",
					description: "Returns a string representing the calling array and its elements. Overrides the <code>Object.prototype.toString()</code> method."
				},
				{
					name: "Array.prototype.unshift()",
					tag: "",
					description: "Adds one or more elements at the front of an array, and returns the new <code>length</code> of the array."
				},
				{
					name: "Array.prototype.XX()",
					tag: "Tag Name",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				},
				{
					name: "Array.prototype.XX()",
					tag: "Category",
					description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				}
			]
		}
	},
	computed: {
		filteredList() {
			return this.arrayMethods
				.filter(item => {
					if(this.filters.searchQuery.trim().length) {
						return item.name.toLowerCase().includes(this.filters.searchQuery.toLowerCase()) || item.tag.toLowerCase().includes(this.filters.searchQuery.toLowerCase()) || item.description.toLowerCase().includes(this.filters.searchQuery.toLowerCase());
					}
					return true;
				})
				.filter(item => {
					if(this.filters.newArray) {
						return item.tag.toLowerCase().includes('new array');
					}
					if(this.filters.boolean) {
						return item.tag.toLowerCase().includes('boolean');
					}
					if(this.filters.iterator) {
						return item.tag.toLowerCase().includes('iterator');
					}
					return item;
				})
		}
	},
	mounted() {
		console.log(this.filteredList)
	}
}
</script>

<style lang="scss">
@import '../assets/scss/variables';

</style>