

let HomeComponent = Vue.component("home", {
	template: 
		`<div class="container" ref="container">
			<h1>Rick &amp; Morty Team Battles!</h1>
			<h2>Pick a team of characters and put them to the test!</h2>
			<h2>Battle friends and win!</h2>

			<router-link to="/battle" class="go">GO!</router-link>
		</div>`,
})






