var enabled = true;
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		if(enabled) {
			console.log("blocking:", details.url);
		}
		return {cancel: enabled };
	},
	{urls: blacklist},
	//{urls: ["*://*.doubleclick.net/*"]}, /* replace with list of blacklisted urls */
	["blocking"]
);

