define({ 
  //#ifdef android
  onViewCreated(){
    //Fix for runtime permissions, otherwise, Voice Recognition and barcode scanner/image recognition won't work.
    kony.application.requestPermissionSet(["android.permission.CAMERA", "android.permission.RECORD_AUDIO"], permissionStatusCallback);
  }
  //#endif
});

//#ifdef android
function permissionStatusCallback(response) {

  for (var i in response) {

    /* iterating through permissionSet key value pair from response jsObject where 'i' is permission key and result is permission status */
    var result = response[i];

    if (result == kony.application.PERMISSION_DENIED) {

      // show message  and raise request again

    } else if (result == kony.application.PERMISSION_NEVER_ASK_AGAIN) {

      // show message and open settings page

      kony.application.openApplicationSettings();

    }

  }

}
//#endif