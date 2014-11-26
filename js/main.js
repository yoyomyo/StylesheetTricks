var timer = null;
var angle = 0; //in miliseconds
var numSteps = 10;
var stepSize  = 30 //in degree
var period = 2500; //in miliseconds
var cycle = 60 // in degree

$(".logo").hover(
	function(){
		startAnimation();
	},
	function(){
		console.log("angle: " + angle);
		//angle left should find out if angle is 30 or 0
		var angleLeft = cycle - (angle % cycle);
		var cycleLeft = angleLeft  / stepSize;
		console.log("angle left: " + angleLeft);
		console.log("cycle left: " + cycleLeft);
		console.log("time left: " + cycleLeft * period/numSteps);
		setTimeout(function(){
			endAnimation();
		}, cycleLeft * period/numSteps);
	}
)



var startAnimation = function(){
	console.log("animation starts");
	startTimer();
	$(".logo").addClass("active");
}


var endAnimation = function(){
	console.log("animation ends");
	endTimer();
	$(".logo").removeClass("active");
}

var startTimer = function() {
	if (timer === null) {
		timer = setInterval(function(){
			angle += stepSize
		}, (period/numSteps));
	}
}

var endTimer = function() {
	if(timer) {
        clearInterval(timer);
    }
    angle = 0;
    timer = null;
}