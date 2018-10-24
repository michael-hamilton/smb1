ig.module( 
	'game.entities.koopa' 
)
.requires(
	'game.entities.enemy'
)
.defines(function(){

EntityKoopa = EntityEnemy.extend({
	animSheet: new ig.AnimationSheet( 'media/mario/koopas.png', 16, 24),
	bounciness:1,
	size: {x:16, y:24},
	direction: 1,
	check: function(other){
		if(this.pos.y-other.pos.y>15 && !other.standing){
			this.kill();
			other.vel.y=-300;
			other.accel.y = -1000;
		}
	},
	init: function(x,y,settings) {
		this.parent( x, y, settings );
		this.addAnim('move',.2,[0,1]);
		this.currentAnim=this.anims.move;
		this.gravityFactor=1;
		if(this.pos.y>240){
			this.kill();
		}
	},
	update: function(){
		if(this.vel.x<0){
			this.direction=-1;
		}
		if(this.vel.x>0){
			this.direction=1;
		}
		if(this.direction<0){
			this.anims.move.flip.x=false;
		}
		else{
			this.anims.move.flip.x=true;
		}
		this.parent();
	},
	minBounceVelocity:0,
	vel: {x:20,y:0}
});

});