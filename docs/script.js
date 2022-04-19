var num = Math.floor(Math.random() * 5);

window.addEventListener('load', () => {
	// Backgorund action  	
	document.body.classList.add('bg-' + num);

	// Responsive youtubes.
	var iframes = document.querySelectorAll('iframe[src*="youtube.com"]');
	for (var i = 0; i < iframes.length; i++) {
		var el = iframes[i];
		var wrapper = document.createElement('div');
		wrapper.classList.add('iframe-container');
		el.parentNode.insertBefore(wrapper, el);
		wrapper.appendChild(el);
	}

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

});


