var colors = ['red', 'green', 'orange', 'blue','pink']

function onCreateBox() {
	var cnt = Number($("input[name='cnt']").val());
	for (var i=0; i<cnt; i++){
		color = Math.ceil(Math.random() *5) -1;
		console.log(color);
		$(".wrapper").append('<div class="box '+colors[color]+'"></div>')
	}
}

function onResetBox() {
	$(".wrapper").empty();
}

$("#btCreate").click(onCreateBox);
$("#btReset").click(onResetBox);