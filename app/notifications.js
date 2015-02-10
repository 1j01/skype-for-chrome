
console.log("notifications.js got injected");

var skypeify = function(){
	
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
	
	/*
	var messagelis = [];
	var pollMessages = function(){
		var $ul = $("#ModernConversationHistoryControl > ul");
		$ul.children().each(function(){
			var li = this;
			if(messagelis.indexOf(li) < 0){
				messagelis.push(li);
				var $li = $(li);
				var timestamp = $li.attr("ts");
				///var sendername = $li.find(".ModernConversationHistoryItemNode_Sender").text();
				/// wait, they didn't actually implement this did they? it's blank; empty
				var message = $li.find(".ModernConversationHistoryItemNode_Text").text();
				console.log("new message at", timestamp, ":::\n"+message)
			}
		});
	};
	setInterval(pollMessages, 50);
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



