ig.module(
	'game.entities.coin'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityCoin = ig.Entity.extend({
	size:{x:16,y:16},
	type: ig.Entity.TYPE.B,
	checkAgainst: ig.Entity.TYPE.A,
	check: function(other){
		this.kill();
		var coinSound = new ig.Sound('media/mario/sounds/coin.ogg');
			coinSound.volume=0.5;
			coinSound.play();
			other.coins++;
	},
	animSheet: new ig.AnimationSheet('media/mario/tileset.png',16,16),
	init: function(x,y,settings){
		this.parent(x,y,settings);
		this.gravityFactor=0;
		this.addAnim('idle',.1,[57,58,59,59,58,57]);
		this.currentAnim=this.anims.idle;
	},
	update: function(){
		this.parent();
	}
});

});