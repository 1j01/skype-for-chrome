
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
			win.contentWindow.onload = function(e){
				var webview = this.document.querySelector('webview');
				
				var stylesheets = [
					'skypeify.css',
					'get-rid-of-stuff.css',
					'fix-your-shit.css',
					'layout.css'
				];
				webview.addEventListener('loadcommit', function(e){
					for(var i=0; i<stylesheets.length; i++){
						webview.insertCSS({
							file: "stylesheets/" + stylesheets[i],
							runAt: 'document_start',
							allFrames: true,
						});
					}
				});
				
				webview.addEventListener('contentload', function(){
					webview.executeScript({
						file: 'notifications.js',
						runAt: 'document_end',
					});
				});
				webview.addEventListener('newwindow', function(e){
					var a = document.createElement('a'); 
					a.href = e.targetUrl; 
					a.target = '_blank'; 
					a.click();
				});
			}
		}
	);
});

