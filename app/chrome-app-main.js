
chrome.app.runtime.onLaunched.addListener(function(){
	chrome.app.window.create(
		'index.html',
		{
			state: 'normal',
			innerBounds: {
				minWidth: 500,
				width: 1000,
				minHeight: 400,
				height: 800,
			},
		},
		function(win){
			win.contentWindow.onload = function(){
				var webview = this.document.querySelector('webview');
				
				var stylesheets = [
					'skypeify.css',
					'get-rid-of-stuff.css',
					'fix-your-shit.css',
					'layout.css'
				];
				var scripts = [
					'notifications.js',
					'skypeify.js'
				];
				webview.addEventListener('loadcommit', function(){
					for(var i=0; i<stylesheets.length; i++){
						webview.insertCSS({
							file: "stylesheets/" + stylesheets[i],
							runAt: 'document_start',
							allFrames: true,
						});
					}
				});
				
				webview.addEventListener('contentload', function(){
					for(var i=0; i<scripts.length; i++){
						webview.executeScript({
							file: "scripts/" + scripts[i],
							runAt: 'document_end',
						});
					}
				});
				webview.addEventListener('newwindow', function(e){
					var a = document.createElement('a'); 
					a.href = e.targetUrl; 
					a.target = '_blank'; 
					a.click();
				});
				
				
				//var targetOrigin = "http://example.com";
				
				webview.addEventListener("loadstop", function(){
					win.contentWindow.addEventListener("message", function(e){
						console.log('window received message:', e);
						if(e.data.command === "notify"){
							var message = e.data;
							new Notification("Person", {
								icon: 'images/icons/48x48.png',
								body: message.text
							});
						}
					});
					console.log("posting handshake message");
					webview.contentWindow.postMessage({command: 'handshake'}, '*');
					// console.debug("Here's window:", window);
					// console.debug("Here's win.contentWindow:", win.contentWindow);
					// console.debug("Here's webview.contentWindow:", webview.contentWindow);
				});
			}
		}
	);
});

