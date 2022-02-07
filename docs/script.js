var num = Math.floor(Math.random() * 5);

function tagToggle(hash) {
	var posts = document.querySelectorAll('.post');
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
	document.body.classList.add('bg-' + num);
	// Add a click event to all the tags
	var elements = document.querySelectorAll('.tag-select');
	for (var i = 0; i < elements.length; i++) {
	   elements[i].addEventListener('click', (e) => {
			tagToggle(e.target.hash);
		});
	}
});


