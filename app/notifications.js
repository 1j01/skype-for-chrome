
console.log("notifications.js got injected");

var skypeify = function(){
//	var toggleChat = function(){
		/*
		// This isn't actually a button. It's an anchor (<a>) with role="button"
		// We can't just do .click() because they're not even fucking listening to click events
		// This ""button"" handles click events like so: onclick="return false;return false"
		// Yeah. fucking brilliant
		// And it's not like it's just an accessability issue; the ""button"" is shitty
		// You can open it by right-mouse-downing on it
		
		var button = document.querySelector("#c_hiconm");

		var event = document.createEvent('Event');
		event.initEvent('mousedown', true, true);

		button.dispatchEvent(event);
		*/
		
//		$ToggleSidebar();
//	};
//	toggleChat();
	
	/*
	document.querySelector("#c_hiconm").style.display = "none";
	var tryToShowTheChat = function(){
		if(window.$WLXIM){
			console.log("Show the sidebar");
			$WLXIM.showSidebar();
			// it still doesn't work at first
			setTimeout(tryToShowTheChat, 50);
		}else{
			console.log("Can't show the sidebar yet");
			setTimeout(tryToShowTheChat, 5);
		}
	};
	window.addEventListener("load", function(){
		console.log(window.$WLXIM, "onload");
	});
	tryToShowTheChat();
	*/
	/*
	chrome.notifications.create("some message id", {
		iconUrl: "images/icons/48x48.png",
		message: "Hey dode whats up."
	}, function(){
		
	});*/
/*
	var active = true;//????

	new Notification("Person", {
		icon: 'images/icons/48x48.png',
		body: 'Time to make the toast.'
	});*/
	
};

// We want to run this in the page context
var script = document.createElement('script');
script.textContent = '(' + skypeify + ')();';
(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);



