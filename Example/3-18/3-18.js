window.onload = function() {
	var profile = {
		name: 'TY Chen',
		age: 39,
		height:100
	};
	for (var key in profile) {
		console.log(key);
		console.log(profile[key]);
		console.log(profile.key); // Doesn't work
	}

};