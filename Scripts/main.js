$(document).ready(function () {
 
    
});

var play;

//Bug divs
function newDiv() {
    var $div = $("<div class='a'>");
    $(".animatedDivs").append($div);
    animateDiv();

//Creates animation function for bugs
    function animateDiv() {
        var newq = makeNewPosition();
        var oldq = $div.offset();
        var speed = calcSpeed([oldq.top, oldq.left], newq);

        $div.animate({
            top: newq[0],
            left: newq[1]
        }, speed, function () {
            animateDiv();
        });

    };
}
//Create random positioning for animatedDivs
function makeNewPosition() {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 70;
    var w = $(window).width() - 30;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}
//Create a speed function for animatedDivs
function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = .1;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;
}

//Start button function that also begins a timer
$("#btnStart").click(function() {
   console.log("buttonclicked");
   newDiv();//creates divs on click function
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();
   newDiv();


$('.animatedDivs').click(function() {
	$('#output').html(function(i, val) { return val*1+1 });
$('.animatedDivs').on('click', 'div.a', removenewDiv);
	document.getElementById('smash').play();//Sound effect on clicked bugs
	//document.getElementById('smah').loop = true;
	function removenewDiv() {
	$(this).remove();
	
	}

});

//Sound effect and loop of bugs
	document.getElementById('play').play();
	document.getElementById('play').loop = true;

//Timer Countdown
   var counter = 20;//Set 30secs on timer
   setInterval(function() {
     console.log("testing");
     counter--;
      
      if (counter >= 0) {
         span = document.getElementById("count");
         span.innerHTML = counter;
      
      
      //if (output >= 37) {
      	 //span = document.getElementById("output");
      	 //span.innnerHTML = output;
      	 //alert('All threats terminated!', window.loacation.reload());
      //} else { 
      
      if (counter === 0) {
         alert( 'System Fail!', window.location.reload());
         clearInterval(counter);
       
       }
     }
   }
 
     , 1000);
 

});




