// let ball_8 = document.querySelector("#ball_8")
var k = 0;
var degree = 0;
var set;
function cl(t){
	if (k == 0){
		 set=setInterval(function (){
		 	t.style.transform='rotate('+ degree +'deg)';
		 	(degree == 360)? degree = 0 : "";
			++degree;
		},10)
		 k=1
	}
		

    else if (k == 1){
    	clearInterval(set)
    	k=2
    }

    else if(k == 2){
    	set=setInterval(function (){
		 	t.style.transform='rotate('+ degree +'deg)';
		 	(degree == -360)? degree = 0 : "";
			--degree;
		},10)
		k=3
    }
    else if (k == 3){
    	clearInterval(set)

    	k=0
    }
		
}