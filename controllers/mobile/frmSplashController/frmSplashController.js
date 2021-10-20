define({ 
	onViewCreated(){
		//#ifdef android
		kony.application.requestPermissionSet(["android.permission.CAMERA", "android.permission.RECORD_AUDIO"], (response) => {
			for(let key in response) {
				var result = response[key];
				if (result === kony.application.PERMISSION_NEVER_ASK_AGAIN) {
					kony.application.openApplicationSettings();
				}
			}
		});
		//#endif
	}
});

