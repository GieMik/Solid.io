<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>Essential Links</h2>
		<ul>
			<li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
			<li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
			<li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
			<li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
			<br>
			<li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
		</ul>
		<h2>Ecosystem</h2>
		<ul>
			<li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
			<li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
			<li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
			<li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

	@for $i from 1 through 4{
		.item-#{$i} { width: 2em * $i; }
	}

	@each $animal, $color, $cursor in 	(puma, black, default),
										(sea-slug, blue, pointer),
										(egret, white, move) {

		.#{$animal}-icon {
			background-image: url('/images/#{$animal}.png');
			border: 2px solid $color;
			cursor: $cursor;
		}
	}

	@each $header, $size in (h1: 2em, h2: 1.5em, h3: 1.2em) {
		#{$header} {
			font-size: $size;
		}
	}

	@mixin large-text {
		font: {
			family: Arial;
			size: 20px;
			weight: bold;
		}
		color: #ff0000;
	}

	$i: 6;
	@while $i > 0 {
		.item-#{$i} { width: 2em * $i; }
		$i: $i - 2;
	}

	@mixin box-shadow($shadows...) {
		-moz-box-shadow: $shadows;
		-webkit-box-shadow: $shadows;
		box-shadow: $shadows;
	}

	.shadows {
		@include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);
	}

	.class {
		grid-area: 'class';

		.child-1 {
			grid-area: 'child-1';

			@at-root .child-1-2 {
				grid-area: 'child-2';
			}
		}
	}

	@mixin colors($text, $background, $border) {
		color: $text;
		background-color: $background;
		border-color: $border;
	}

	$values: #ff0000, #00ff00, #0000ff;
	.primary {
		@include colors($values...);
	}

	$value-map: (text: #00ff00, background: #0000ff, border: #ff0000);
	.secondary {
		@include colors($value-map...);
	}

	$color: white;
	@mixin colors($color: blue) {
		background-color: $color;
		@content;
		border-color: $color;
	}
	.colors {
		@include colors { color: $color; }
	}

	h1, h2 {
	  	font-weight: normal;
	}

	ul {
		  list-style-type: none;
		  padding: 0;
	}

	li {
		  display: inline-block;
		  margin: 0 10px;
	}

	a {
	  	color: #42b983;
	}
</style>
