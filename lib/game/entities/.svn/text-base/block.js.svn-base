ig.module(
	'game.entities.block'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityBlock = ig.Entity.extend({
	size: {x:16,y:16},
	animSheet: new ig.AnimationSheet('media/mario/tileset.png',16,16),
	collides: ig.Entity.COLLIDES.FIXED,
	type: ig.Entity.TYPE.B,
	checkAgainst: ig.Entity.TYPE.A,
	items:1,
	contains:null,
	check: function(other){
/* 		console.log((this.pos.x+this.size.x)-Math.round(other.pos.x)); */
/* 		console.log(other.pos.y-(this.pos.y+this.size.y)); */
		console.log((this.pos.x)-(other.pos.x+(other.size.x/2)));
		console.log((this.pos.x+this.size.x)-(other.pos.x+(other.size.x/2)));
		var offset=0;
		if((other.pos.y-(this.pos.y+this.size.y)>-6.5)  && ((this.pos.x)-(other.pos.x+(other.size.x/2))<this.size.x+offset  && (this.pos.x+this.size.x)-(other.pos.x+(other.size.x/2))>-offset)){
			if(this.contains==null){
				other.vel.y=-other.vel.y/2;
					this.kill();
			}
			else{
				if(this.items>0){
					this.items--;
					ig.game.spawnEntity(this.contains,this.pos.x,this.pos.y-16,{vel:{x:35,y:0}});
				}
				if(this.items==0){
					this.currentAnim=this.anims.broken;
				}
			}
		}
	},
	init: function(x,y,settings){
		this.parent(x,y,settings);
		this.addAnim('idle',.1,[2]);
		this.addAnim('broken',0.2,[27]);
		this.currentAnim=this.anims.idle;
		this.gravityFactor=0;
	}

});

});