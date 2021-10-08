define({ 

	imageClassifier: null,
	
	onNavigate(){
		this.view.flxResultBox.setVisibility(false);
	},
	
	onViewCreated(){
		this.view.init = () => {
			
			this.view.flxBack.onClick = () => {
				new kony.mvc.Navigation('frmHome').navigate();
			};
			
			var mlCamera = new kony.ui.MLCamera({
				"height": '100%',
				"id": "mlCamera",
				"isVisible": true,
				"left": "0dp",
				"top": "0dp",
				"width": "100%",
				"zIndex": 1
			}, {}, {}); 
			this.view.flxCamera.add(mlCamera);

			this.view.btnRoundFloat.onClick = () => {
				const irName = this.view.lblObjectType.text;
				const productName = appData.getProductNameByIRName(irName);
				if(productName){
					new kony.mvc.Navigation('frmProduct').navigate(productName);
				} else {
					alert('Product not found.');
				}
			};
		};
		
		this.view.postShow = () => {
			this.onFormPostShow();
		};
	},
	
	onFormPostShow(){
		var config = {};
		config.modelType = kony.ml.MODEL_TYPE_QUANTIZED;
		config.onSuccess = this.imageClassificationSuccess;
		config.onFailure = this.imageClassificationFailure;
		config.modelPathSource = kony.ml.MODEL_SOURCE_TYPE_BUNDLED;
		
		if(kony.os.deviceInfo().name.toLowerCase() === 'iphone'){
			config["modelInputSize"] = {"width": 299 ,"height": 299};
			config.modelPath =  "pluto";//"RubikCubeClassifier";
		} else if (kony.os.deviceInfo().name.toLowerCase() === 'android'){
			config.modelPath =  "model";
			config.labelPath = "label";
		}
		this.imageClassifier =  new kony.ml.ImageClassifier(config);
		this.view.mlCamera.setImageClassifier(this.imageClassifier);
		this.view.mlCamera.startDetection();
	},
	
	imageClassificationSuccess(resultArray){
		if(resultArray !== null && resultArray.length > 0){
			// resultArray is sorted in descending order ,hence 0th item will be highest confidence
			this.view.lblObjectType.text = resultArray[0].title; 
			this.view.lblConfidanceVal.text = (resultArray[0].confidence * 100).toFixed(2) + "%";
			if(!this.view.flxResultBox.isVisible){
				this.view.flxResultBox.setVisibility(true);
			}
		}
	},
	
	imageClassificationFailure(errorCode){
		alert("errorCode: " + errorCode);
	},
	
	
});