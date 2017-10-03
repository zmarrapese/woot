AFRAME.registerComponent('boc-click-listener', {
    init: function() {

	this.bocClickHandler = function(){
	    var ranResult = Math.random() * 100;

	    var rarity = " ";
	    if (ranResult > 90){
		rarity = " super-duper, elite level ";
	    }
	    else if (ranResult > 75){
		rarity = " pretty frickin awesome ";
	    }
	    else if (ranResult > 50){
		rarity = " good(ish) ";
	    }

	    alert("CONGRATS! You clicked a" + rarity + "BOC!");
	}

	var el = this.el.addEventListener('click', this.bocClickHandler);
    }
});
