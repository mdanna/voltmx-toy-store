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

    onDismiss: function(){},

    initGettersSetters: function() {
			defineGetter(this, "toastDuration", () => {
				return this._toastDuration;
			});
			defineSetter(this, "toastDuration", (value) => {
				this._toastDuration = isNaN(Number(value)) ? 1 : Number(value); 
			});	
		}
  };
});