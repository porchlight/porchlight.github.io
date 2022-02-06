var num = Math.floor(Math.random() * 5);
window.addEventListener('load', () => {
	document.body.classList.add('bg-' + num);
});
