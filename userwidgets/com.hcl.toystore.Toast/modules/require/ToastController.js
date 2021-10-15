define(function() {

  return {
		_toastDuration: 1,
		
    constructor: function() {
      var me = this;

      me.view.flxBackground.onClick = function(){
				kony.timer.cancel("dismissToast");
        me.dismiss.call(me);
      };

    },

    onDismiss: function(){},

    show: function(){
			var me = this;
      me.view.isVisible = true;
			kony.timer.schedule("dismissToast", function(){
				if(me.view.isVisible){
					me.dismiss.call(me);	
				}
			}, me._toastDuration, false);
    },

    dismiss: function(){
      this.onDismiss.call(this);
      this.view.isVisible = false;
    },

    initGettersSetters: function() {
			defineSetter(this, "toastDuration", function(value){
				this._toastDuration = isNaN(Number(value)) ? 1 : Number(value); 
			});	
		}
  };
});