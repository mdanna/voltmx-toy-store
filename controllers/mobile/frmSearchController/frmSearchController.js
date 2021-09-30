define({ 

	onViewCreated(){
		this.view.init = () => {
			
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
				this.view.speechtotext.speech();
			};
			
			this.view.speechtotext.speechCallback = (text) => {
				this.view.txtSearch.text = text;
				this.view.txtSearch.setFocus(true);
				this.moveUp();
			};
			
			this.view.flxCancel.onTouchEnd = () => {
				this.view.txtSearch.text = '';
				this.moveDown();
			};
			
			for(let i = 1; i <= 8; i++){
				this.view[`lblKeyword${i}`].onTouchEnd = () => {
					this.view.txtSearch.text = this.view[`lblKeyword${i}`].text;
					this.view.txtSearch.setFocus(true);
					this.moveUp();
					this.search(this.view.txtSearch.text);
				};
			}
			
			this.view.lblClearAll.onTouchEnd = () => {
				this.view.segRecentKeywords.setData([]);
			};
			
			this.view.cmpIconListToggle.onModeChange = (mode) => {
				this.view.flxContentIcon.isVisible = mode === 'icon';
				this.view.flxContentList.isVisible = mode === 'list';
			};
			
			mEventManager.subscribe(globals.ON_CLICK_KEYWORD, this.onClickRecentKeyword.bind(this));
			mEventManager.subscribe(globals.ON_CLEAR_KEYWORD, this.onClearRecentKeyword.bind(this));
		};
	},
	
	moveUp() {
		this.view.cmpDefaultHeader.isVisible = false;
		this.view.flxContent.top = '0';
		this.view.flxContent.height = '100%';
		this.view.flxSearch.width = '70%';
		this.view.flxCancel.isVisible = true;
		this.view.flxMicrophone.isVisible = false;
		this.view.flxCamera.isVisible = false;
		this.view.flxSearchKeywords.isVisible = false;
		this.view.flxRecentKeywords.isVisible = true;
	},
	
	moveDown(){
		this.view.cmpDefaultHeader.isVisible = true;
		this.view.flxContent.top = '10%';
		this.view.flxContent.height = '90%';
		this.view.flxSearch.width = '59%';
		this.view.flxCancel.isVisible = false;
		this.view.flxMicrophone.isVisible = true;
		this.view.flxCamera.isVisible = true;
		this.view.flxSearchKeywords.isVisible = true;
		this.view.flxRecentKeywords.isVisible = false;
		this.view.flxSearchResults.isVisible = false;
	},
	
	search(keyword){
		this.view.flxSearchResults.isVisible = true;
		this.view.flxSearchKeywords.isVisible = false;
		this.view.flxRecentKeywords.isVisible = false;
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