ig.module(
	'game.entities.coinblock'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityCoinblock=ig.Entity.extend({
	size:{x:16,y:16},
	animSheet: new ig.AnimationSheet('media/mario/tileset.png',16,16),
	collides: ig.Entity.COLLIDES.FIXED,
	type: ig.Entity.TYPE.B,
	checkAgainst: ig.Entity.TYPE.A,
	coins:1,
	check: function(other){
		var offset=0;
		if((other.pos.y-(this.pos.y+this.size.y)>-6.5)  && ((this.pos.x)-(other.pos.x+(other.size.x/2))<this.size.x+offset  && (this.pos.x+this.size.x)-(other.pos.x+(other.size.x/2))>-offset)){
			if(this.coins>0){
				this.coins--;
				other.coins++;
				var coinSound = new ig.Sound('media/mario/sounds/coin.ogg');
				coinSound.volume=0.5;
				coinSound.play();
			}
			if(this.coins==0){
				this.currentAnim=this.anims.broken;
			}
		}
	},
	init: function(x,y,settings){
		this.parent(x,y,settings);
		this.addAnim('idle',0.2,[24,25,26,26,25,24]);
		this.addAnim('broken',0.2,[27]);
		this.gravityFactor=0;
	}
});
	
});