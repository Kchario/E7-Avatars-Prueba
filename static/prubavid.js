< script  src = " CCapture.all.min.js " > </ script >
var  capturer  =  new  CCapture (  {  format : 'webm'  }  ) ;
function render(){
	requestAnimationFrame(render);
	// rendering stuff ...
	capturer.capture( canvas );
}

render()
capturer.save();

