ig.module( 
	'game.entities.player' 
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityPlayer = ig.Entity.extend({
	size: {x:16, y:16},
	collides: ig.Entity.COLLIDES.ACTIVE,
	maxVel: {x:500,y:5000},
	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.B,
	direction:1,
	coins:0,
	lives:1,
	location:'overworld',
	flags:{onpipe:false,targetPipe:{x:0,y:0}},
	update: function(){
		if(ig.input.state('left')){
			if(ig.input.state('run')){
				this.vel.x=-100;
				this.currentAnim=this.anims.run_left_fast;
			}
			else{
				this.vel.x = -60;
				this.currentAnim=this.anims.run_left;
			}
			this.direction=-1;
		}
		else if(ig.input.state('right')){
			if(ig.input.state('run')){
				this.vel.x=100;
				this.currentAnim=this.anims.run_right_fast;
			}
			else{
				this.vel.x = 60;
				this.currentAnim=this.anims.run_right;
			}
			this.direction=1;
		}
		else{
			this.vel.x=0;
				if (this.vel.x==0 && this.direction<0)
				{
					this.currentAnim=this.anims.idle_left;
				}
				else if (this.vel.x==0 && this.direction>0)
				{
					this.currentAnim=this.anims.idle_right;
				}
		}
		
		if( ig.input.pressed('up') && this.standing ) {
			if(ig.input.state('run')){
				this.vel.y=-550;
				this.accel.y = -1000;
			}
			else{
				this.vel.y=-500;
				this.accel.y = -1000;
			}
			var jumpSound = new ig.Sound('media/mario/sounds/jump.ogg');
			jumpSound.volume=0.6;
			jumpSound.play();
		}
		if (ig.input.released('up') && this.vel.y<0){
			this.vel.y=0;
			this.accel.y=0;
		}
		
		if(!this.standing){
				if(this.direction<0)
				{
					this.currentAnim=this.anims.jump_left;
				}
				if(this.direction>0)
				{
					this.currentAnim=this.anims.jump_right;
				}
		}
		
		if(this.flags.onPipe==true){
			if(this.location=='overworld'){
				this.location='underworld';
			}
			else{
				this.location='overworld';
			}
			this.pos.y=this.flags.targetPipe.y;
			this.pos.x=this.flags.targetPipe.x;
			this.flags.onPipe=false;
		}
		
		if(this.coins>99){
			this.coins=0;
			this.lives++;
			var oneUpSound = new ig.Sound('media/mario/sounds/1up.ogg');
			oneUpSound.play();
		}
		
		if(this.lives<0){
			ig.system.setGame(SuperMario);
		}
		
		
		
		
		
		this.parent();
	}

	
});

});
