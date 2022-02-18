var num = Math.floor(Math.random() * 5);

function tagToggle(hash) {
	var posts = document.querySelectorAll('.post-teaser');
	for (var i = 0; i < posts.length; i++) {
		posts[i].style.display = 'block';
	}
	if (hash === '#all') {
		return false;
	}
	var taglists = document.querySelectorAll('.taglist');

	for (var i = 0; i < taglists.length; i++) {
		var tags = taglists[i].querySelectorAll('a');
		var hide = true;
		for (var j = 0; j < tags.length; j++) {
			if (tags[j].getAttribute('href') === hash) {
				hide = false;
				break;
			}
		}
		if (hide) {
			taglists[i].parentElement.style.display = 'none';
		}
	}
}

window.addEventListener('load', () => {
	// Backgorund action  	
	document.body.classList.add('bg-' + num);

	// Menu toggle.
	document.querySelector('.menu-toggle').addEventListener('click', (e) => {
		var responsive_menu = document.getElementById('responsive-menu');
		if (responsive_menu.className === 'responsive') {
	    	responsive_menu.className += ' active';
	    	document.querySelector('.menu-toggle').innerHTML = 'X';
	  	} else {
	    	responsive_menu.className = 'responsive';
	    	document.querySelector('.menu-toggle').innerHTML = '...';
	  	}
	});

	// Check for a hash on load, if there is then filter the page.
	var hash = window.location.hash.substr(1);
	if (hash) {
		tagToggle('#' + hash);
	}
	// Add a click event to all the tags
	var elements = document.querySelectorAll('.tag-select');
	for (var i = 0; i < elements.length; i++) {
	   elements[i].addEventListener('click', (e) => {
			tagToggle(e.target.hash);
		});
	}
});


