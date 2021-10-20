define({ 

	onViewCreated(){
		this.view.init = () => {
			this.setCategories();

			this.view.txtSearch.onTouchStart = () => {
				if(!this.view.txtSearch.text){
					this.moveUp();
				}
			};

			this.view.txtSearch.onTextChange = () => {
				const text = this.view.txtSearch.text;
				if(text){
					this.moveUp();
				}
			};

			this.view.txtSearch.onDone = () => {
				const text = this.view.txtSearch.text;
				const data = this.view.segRecentKeywords.data || [];
				if(text){
					this.view.segRecentKeywords.addDataAt({
						lblKeyword: text.trim(),
						lblClear: 'f' 
					}, data.length, 0);
					this.search(text);
				}
			};

			this.view.flxMicrophone.onTouchEnd = () => {
				this.view.speechtotext.isVisible = true;
				this.view.speechtotext.speech();
			};

			this.view.flxScanner.onClick = () => {
				new kony.mvc.Navigation('frmScanner').navigate();
			};


			this.view.speechtotext.speechCallback = (text) => {
				this.view.speechtotext.isVisible = false;
				this.view.txtSearch.text = text;
				this.view.txtSearch.setFocus(true);
				this.moveUp();
				this.search(text);
			};

			this.view.flxCancel.onTouchEnd = () => {
				this.view.txtSearch.text = '';
				this.moveDown();
			};

			this.view.lblClearAll.onTouchEnd = () => {
				this.view.segRecentKeywords.setData([]);
			};

			mEventManager.subscribe(globals.ON_CLICK_KEYWORD, this.onClickRecentKeyword.bind(this));
			mEventManager.subscribe(globals.ON_CLEAR_KEYWORD, this.onClearRecentKeyword.bind(this));
		};
	},

	//this happens on the barcode scanner callback
	onNavigate(text){
		//#ifdef android
		if(kony.application.getPreviousForm().id === 'frmScanner'){
			kony.application.destroyForm('frmScanner');
		}
		//#endif

		if(text){
			this.view.txtSearch.text = text;
			this.view.txtSearch.setFocus(true);
			this.moveUp();
			this.search(text, /*isRandom*/true);
		}
	},

	setCategories(){
		this.view.flxCategories.removeAll();
		appData.categories.forEach((category, index) => {
			const label = new kony.ui.Label({
				id: `lblCategory${index}`,
				width: 'preferred',
				centerX: '50%',
				height: '30dp',
				contentAlignment: constants.CONTENT_ALIGN_CENTER
			}, {}, {});
			label.text = category;
			label.skin = 'sknDarkGrey100Light';
			label.onTouchEnd = () => {
				this.view.txtSearch.text = category;
				this.view.txtSearch.setFocus(true);
				this.moveUp();
				this.search(category);
			};
			this.view.flxCategories.add(label);
		});
	},

	moveUp() {
		this.view.cmpDefaultHeader.isVisible = false;
		this.view.flxContent.top = '0';
		this.view.flxContent.height = '100%';
		this.view.flxSearch.width = '70%';
		this.view.flxCancel.isVisible = true;
		this.view.flxMicrophone.isVisible = false;
		this.view.flxScanner.isVisible = false;
		this.view.flxCategories.isVisible = false;
		this.view.flxRecentKeywords.isVisible = true;
	},

	moveDown(){
		this.view.cmpDefaultHeader.isVisible = true;
		this.view.flxContent.top = '10%';
		this.view.flxContent.height = '90%';
		this.view.flxSearch.width = '59%';
		this.view.flxCancel.isVisible = false;
		this.view.flxMicrophone.isVisible = true;
		this.view.flxScanner.isVisible = true;
		this.view.flxCategories.isVisible = true;
		this.view.flxRecentKeywords.isVisible = false;
		this.view.cmpSearchResults.isVisible = false;
	},

	search(keyword, isRandom){
		this.view.cmpSearchResults.data = isRandom ? appData.randomSearch() : appData.search(keyword);
		this.view.cmpSearchResults.isVisible = true;
		this.view.flxCategories.isVisible = false;
		this.view.flxRecentKeywords.isVisible = false;
		//the following is necessary to refresh the form and enable the onClick events on search results
		new kony.mvc.Navigation('frmSearch').navigate();
	},

	onClickRecentKeyword(){
		this.view.txtSearch.text = this.view.segRecentKeywords.selectedRowItems[0].lblKeyword;
		this.view.txtSearch.setFocus(true);
		this.moveUp();
		this.search(this.view.txtSearch.text);
	},

	onClearRecentKeyword(){
		const index = this.view.segRecentKeywords.selectedIndex[1];
		this.view.segRecentKeywords.removeAt(index);
	}

});