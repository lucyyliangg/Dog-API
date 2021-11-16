const app = {

	initialize: function() {
		
		const randomImg = document.getElementById('randomImage');

		function getRandomImage (){
			const randomImageAPIURL = "https://dog.ceo/api/breeds/image/random";

			fetch(randomImageAPIURL)
				.then(function(response){
					return response.json();
				})

				.then(function(json){
					console.log(json);
					var imageURL = json.message;
					randomImg.src = imageURL;
				})

				.catch(function(error){
					console.log(error);
				})

		}
	
		getRandomImage();
	}

	
};