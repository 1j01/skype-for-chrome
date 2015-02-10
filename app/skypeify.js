
var inject = function(fn){
	// Run a function's code in the page's context
	var script = document.createElement('script');
	script.textContent = '(' + fn + ')();';
	(document.head||document.documentElement).appendChild(script);
	script.parentNode.removeChild(script);
};

inject(function(){
	
	// @TODO: Allow navigation to and from Edit Profile and such
	
	// Hide the button that toggles the chat
	document.querySelector("#c_hiconm").style.display = "none";
	
	var tryToShowTheChat = function(){
		if(window.$WLXIM){
			//console.log("Show the sidebar");
			$WLXIM.showSidebar();
			if($("#sidebar").is(":hidden")){
				//console.log("The sidebar's still hidden");
				// it still doesn't work at first
				setTimeout(tryToShowTheChat, 50);
			}else{
				//console.log("The sidebar is shown now (right?)");
				setTimeout(tryToShowTheChat, 50);
			}
		}else{
			//console.log("Can't show the sidebar yet");
			setTimeout(tryToShowTheChat, 5);
		}
	};
	window.addEventListener("load", function(){
		console.log(window.$WLXIM, "onload");
	});
	tryToShowTheChat();
	
});
