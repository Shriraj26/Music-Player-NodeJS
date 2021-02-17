var b;
var c;
window.onload = function () {
	b = document.getElementById("profile-notification")
	c = b.querySelector('input[type="checkbox"]')
	if(c){
		c.addEventListener('change', switchTheme, false);
	}
	
}


function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
      
		localStorage.setItem('theme', 'dark');
    }    
}

