ig.module(
	'game.entities.pipe'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityPipe = ig.Entity.extend({
	size:{x:32,y:16},
	animSheet: new ig.AnimationSheet('media/mario/tileset.png',32,16),
	collides: ig.Entity.COLLIDES.FIXED,
	type: ig.Entity.TYPE.B,
	checkAgainst:ig.Entity.TYPE.A,
	direction: 'up',
	check: function(other){
			if(this.direction=='left'){
				if(ig.input.pressed('right')){
				for( var t in this.target ) {
		            var tar = ig.game.getEntityByName( this.target[t] );
		            if( tar && tar instanceof EntityPipe ) {
		                var offset=other.pos.x-(this.pos.x);
						other.flags.targetPipe.x=tar.pos.x+offset;
						other.flags.targetPipe.y=tar.pos.y-tar.size.y;
						other.flags.onPipe=true; 
		            }
		        }
			}
			}
			else{
				if(ig.input.pressed('down')){
					for( var t in this.target ) {
			            var tar = ig.game.getEntityByName( this.target[t] );
			            if( tar && tar instanceof EntityPipe ) {
			                var offset=other.pos.x-(this.pos.x);
							other.flags.targetPipe.x=tar.pos.x+offset;
							other.flags.targetPipe.y=tar.pos.y-tar.size.y;
							other.flags.onPipe=true; 
			            }
			        }
				}	
			} 
	},
	init: function(x,y,settings){
		this.parent(x,y,settings);
		if(this.direction=='up'){
			this.addAnim('up',.5,[132]);
			this.currentAnim=this.anims.up;
		}
		if(this.direction=='left'){
			this.animSheet=new ig.AnimationSheet('media/mario/tileset.png',16,32);
			this.size.x=16;
			this.size.y=32;
			this.addAnim('left',.5,[134]);
			this.currentAnim=this.anims.left;
		}
		if(this.direction=='down'){
			this.size.x=0;
			this.size.y=0;
		}

		this.gravityFactor=0;
	},
	update: function(){
		this.parent();
	}
});	

});