$.get('../json/products.json',onGet);



function onGet(r) {
	var i, html
	for(i in r){

html += '<li class="product">';
html +=	 '<div class="img-wrap">';
html +=		 '<img src="'+r[i].src+'" style="width = 100%';
html +=	 '</div>';
html +=	 '<div class="info-wrapper">';
html +=		 '<h3 class="title">';
html +=			 '<span>'+r[i].src+'</span>';
html +=			 '<i class="far fa-heart"></i>';
html +=		 '</h3>';
html +=		 '<p class="summary">'+r[i].summary+'</p>';
html +=		 '<div class="price">'+r[i].salePrice+'</div>';
html +=		 '<div class="star-wrap">';
html +=         '<div></div>'
html +=         '</div>';
html +=	 '</div>';
html += '</li>	';	
$(".wrapper .prd-wrapper").append(html);
}
}