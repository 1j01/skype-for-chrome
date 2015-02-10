
chrome.app.runtime.onLaunched.addListener(function(){
	chrome.app.window.create(
		'index.html',
		{
			state: 'normal',
			innerBounds: {
				minWidth: 500,
				width: 800,
				minHeight: 400,
				height: 700
			}
		},
		function(win){
			win.contentWindow.onload = function(e){
				var webview = this.document.querySelector('webview');
				
				webview.addEventListener('loadcommit', function(e){
					webview.insertCSS({
						file: 'skypeify.css',
						runAt: 'document_start',
						allFrames: true
					});
				});
				
				webview.addEventListener('contentload', function() {
					webview.executeScript({
						file: 'notifications.js',
						runAt: 'document_end'
					});
				});
				webview.addEventListener('newwindow', function(e) {
					e.preventDefault();
					// e.targetUrl contains the target URL of the original link click
					// or window.open() call: use it to open your own window to it.
					// Something to keep in mind: window.open() called from the
					// app's event page is currently (Nov 2013) handicapped and buggy
					// (e.g. it doesn't have access to local storage, including cookie
					// store). You can try to use it here and below, but be prepare that
					// it may sometimes produce bad results.
					chrome.tabs.create({ url: e.targetUrl });
				});
			}
		}
	);
});

