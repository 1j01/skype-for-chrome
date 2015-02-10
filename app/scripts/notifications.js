
var inject = function(fn){
	// Run a function's code in the page's context
	var script = document.createElement('script');
	script.textContent = '(' + fn + ')();';
	(document.head||document.documentElement).appendChild(script);
	script.parentNode.removeChild(script);
};

inject(function(){
	
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
	
});

