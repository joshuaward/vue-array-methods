import { createStore } from 'vuex'

export default createStore({
  state: {
		arrayMethods: [
			{
				name: "Array.prototype.at()",
				nameTag: "",
				description: "Returns the array at the given index. Accepts negative integers, which count back from the last item in the array."
			},
			{
				name: "Array.prototype.concat()",
				nameTag: "New Array",
				description: "Returns a NEW array that is calling array joined with other array(s) and/or value(s)."
			},
			{
				name: "Array.prototype.every()",
				nameTag: "Boolean",
				description: "Returns <code><code>true</code></code> if every element in the calling array satisfies the testing function."
			},
			{
				name: "Array.prototype.filter()",
				nameTag: "New Array",
				description: "Returns a NEW array containing all elements of the calling array for which the provided filtering function returns <code>true</code>."
			},
			{
				name: "Array.prototype.forEach()",
				nameTag: "Iterator",
				description: "Calls a function for each element in the calling array."
			},
			{
				name: "Array.prototype.includes()",
				nameTag: "Boolean",
				description: "Determines whether the calling array contains a value, returning <code>true</code> or <code>false</code> as appropriate."
			},
			{
				name: "Array.prototype.join()",
				nameTag: "",
				description: "Joins all elements of an array into a string."
			},
			{
				name: "Array.prototype.map()",
				nameTag: "New Array",
				description: "Returns a NEW array containing the results of invoking function on every element in the calling array."
			},
			{
				name: "Array.prototype.pop()",
				nameTag: "",
				description: "Removes the last element from an array and returns that element."
			},
			{
				name: "Array.prototype.push()",
				nameTag: "",
				description: "Adds one or more elements to the end of an array, and returns the new length of the array."
			},
			{
				name: "Array.prototype.reduce()",
				nameTag: "",
				description: "Executes a user supplied \"reducer\" callback function on each element of the array (from left to right), to reduce it to a single value."
			},
			{
				name: "Array.prototype.reduceRight()",
				nameTag: "",
				description: "Executes a user-supplied \"reducer\" callback function on each element of the array (from right to left), to reduce it to a sigle value."
			},
			{
				name: "Array.prototype.reverse()",
				nameTag: "",
				description: "Reverses the order of the elements of an array in place. (First becomes the last, last becomes the first)"
			},
			{
				name: "Array.prototype.shift()",
				nameTag: "",
				description: "Removes the first element from an array and returns that element."
			},
			{
				name: "Array.prototype.slice()",
				nameTag: "New Array",
				description: "Extracts a section of the calling array and returns a new array."
			},
			{
				name: "Array.prototype.some()",
				nameTag: "Boolean",
				description: "Returns <code>true</code> if at least one element in the calling array satisfies the provided testing function."
			},
			{
				name: "Array.prototype.sort()",
				nameTag: "",
				description: "Sorts the elements of an array in place and returns the array."
			},
			{
				name: "Array.prototype.splice()",
				nameTag: "",
				description: "Adds and/or removes elements of an array."
			},
			{
				name: "Array.prototype.toString()",
				nameTag: "",
				description: "Returns a string representing the calling array and its elements. Overrides the <code>Object.prototype.toString()</code> method."
			},
			{
				name: "",
				nameTag: "",
				description: ""
			},
			{
				name: "",
				nameTag: "",
				description: ""
			},
			{
				name: "",
				nameTag: "",
				description: ""
			}
		]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
