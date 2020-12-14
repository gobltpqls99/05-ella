/**
 ** A 알고리즘 
 ** 1. 1~45까지의 숫자 중 원하는 번호를 생성한다. - Math.random() 
 ** 2. 추출된 번호를 lotto 배열에 넣는다. 단 중독X
 ** 3. 6개의 번호가 추출되면 .resuly-wrap 에 공을 만들어 넣는다.

 ** B 알고리즘
 ** 1. 1~45까지의 번호가 존재하는 배열이 있다.
 ** 2. numbers에서 6개의 번호를 ㅊ출하여 lotto 배열에 넣는다.
 ** 3. 6개의 번호가 추출되면 .resuly-wrap 에 공을 만들어 넣는다.

 var numbers = [];
 for (var i=0; i<=45; i++) numbers.push(i)
 $(".result-wrap").empty();
 var lotto = [];
 */
 
function onLucky() {
	var lotto = [0,0,0,0,0,0];
	var num;
	var i=0
	$(".result-wrap").empty();
	// for (var i=0; i<=45; i++) ;
	do {
		num =Math.floor(Math.random()*45)+1;
		for (var j=0; j<=i; j++){
			if (num===lotto[j]) break;
		}
		if (j<i) continue;
		lotto[i]=num;
		i++;
	} while (i<6);

	for (var i=0; i<6; i++)document.write(lotto[i] +",");

};
$("#btLucky").click(onLucky);