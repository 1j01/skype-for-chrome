
var inject = function(fn){
	// Run a function's code in the page's context
	var script = document.createElement('script');
	script.textContent = '(' + fn + ')();';
	(document.head||document.documentElement).appendChild(script);
	script.parentNode.removeChild(script);
};

inject(function(){
	console.debug("notifications.js injected");
	
	var lastReadTimestamp = 0;
	var pollMessages = function(){
		if(typeof $ === "undefined"){ return; }
		$(".t_received").each(function(){
			var $msg = $(this);
			var timestamp = $msg.parent().attr("ts");
			if(timestamp > lastReadTimestamp){
				lastReadTimestamp = timestamp;
				///var sendername = $li.find(".ModernConversationHistoryItemNode_Sender").text();
				/// wait, they didn't actually implement this did they? it's simply empty
				var text = $msg.find(".ModernConversationHistoryItemNode_Text").text();
				//console.debug("new message at", timestamp, ":::\n"+text);
				lastReadTimestamp = timestamp;
				
				sendMessage({command: 'notify', text: text, timestamp: timestamp});
				//chrome.runtime.sendMessage({text: text, timestamp: timestamp});
			}
		});
	};
	setInterval(pollMessages, 50);
	
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
	
	
	var appWindow, appOrigin;
	
	function sendMessage(data) {
		if (!appWindow || !appOrigin) {
			return console.error('Cannot send message to Chrome wrapper app - communication channel has not yet been opened');
		}
		appWindow.postMessage(data, appOrigin);
		console.debug('Sent message:', data);
	}
	
	window.addEventListener('message', function(event){
		
		//console.debug('Received message:', event.data, 'from', event.origin);
		console.debug('Received message from', event.origin, event.data);
		
		if(event.origin.match(/^chrome-extension:/)){
			// First message: store appWindow and appOrigin
			if(!appWindow || !appOrigin){
				appWindow = event.source;
				appOrigin = event.origin;
				console.debug('Opened communication with the Chrome wrapper app.');
				
				sendMessage({
					command: 'handshakereply'
				});
			}
		}
		
	});
	
	
});

/*
chrome.runtime.onMessage.addListener(
	function(message, sender, sendResponse){
		new Notification("Person", {
			icon: 'images/icons/48x48.png',
			body: message.text
		});
	}
);
*/



