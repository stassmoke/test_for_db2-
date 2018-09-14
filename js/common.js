$('.get_content').click(function() {
    var pageName = $(this).data('page');
    // ajax-запрос
    $.ajax({
        url: pageName,
        cache: false,
        success: function(html){
            $(".ajax-content").html(html);
        }
    });
});






var button = document.querySelector('#button-search');
var title = document.querySelector('#name');
var episodeid = document.querySelector('#episode_id');
var openingcrawl = document.querySelector('#opening_crawl');
var releasedate = document.querySelector('#release_date');
var species = document.querySelector('#species');
var vehicles = document.querySelector('#vehicles');
var characters = document.querySelector('#characters');
var planets = document.querySelector('#planets');
var urlі = document.querySelector('#url');
var created = document.querySelector('#created');
var edited = document.querySelector('#edited');





function getInfo() {
	var apiUrl = 'https://swapi.co/api/films/1/' 

	axios.get(apiUrl).then(response => {
		updateInfo(response.data);
	}).catch(e => {
		updateInfoWithError()
	})	
}

function updateInfo(data) {
	title.innerText 				= data.title
	episodeid.innerText 		= 'Id: ' +data.episode_id
	openingcrawl.innerText  = 'openingcrawl: '+ data.opening_crawl 
	releasedate.innerText 	= 'Release date: ' + data.release_date
	species.innerText     	= 'Species: ' + data.species
	vehicles.innerText    	= 'Vehicles: ' + data.vehicles
	characters.innerText  	= 'Characters: ' + data.characters
	planets.innerText     	= 'Planets: ' + data.planets
	urlі.innerText        	= 'Url: ' + data.url
	created.innerText     	= 'Created: ' + data.created
	edited.innerText      	= 'Edited: ' + data.edited
 
}


button.addEventListener('click', getInfo);