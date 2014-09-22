documentTitle = document.title;

// NOTIFICAÇÃO OFERTAS

firstOfferHide();

setTimeout(function() {
	var numeroDeOfertas = $(".of-rel").length;
	if (numeroDeOfertas !== 0) {
		newOfferNotification(numeroDeOfertas);
	};
}, tempoParaNotificacaoOfertas);

function firstOfferHide() {
	$(".of-rel").css({"display": "none"});
}

function newOfferNotification(qtdOfertas) {
	var pluralOfertas = "";
	if (qtdOfertas > 1) {
		var pluralOfertas = "S";
	};
	$(".notification-number").text(qtdOfertas);
	$(".notification-text").html("TEMOS "+qtdOfertas+" NOVA"+pluralOfertas+" OFERTA"+pluralOfertas+" PARA VOCÊ! <span>CLIQUE AQUI</span>");
	$(".notification-bar").addClass("notification-bar-show");
	var backgroundInterval = setInterval(function(){
		$(".notification-bar").toggleClass("notification-bar-blink");
	}, 500);
	document.title = "("+qtdOfertas+") "+documentTitle;
	document.getElementById("notification").play();
}

function showNewOffers() {
	document.title = documentTitle;
	$(".notification-bar").removeClass("notification-bar-show");
	$(".of-rel").append('<div class="of-rel-cover"><img class="of-rel-thunder-icon-large" src="img/icons/thunder.svg"></div>');
	$(".of-rel").css({"display": "block"});
	msnry.layout();
	$('html, body').animate({
        scrollTop: $(".of-rel").offset().top - 120
    }, 1000);
	setTimeout(function() {
		$(".of-rel-cover").css({'opacity': 0});
	}, 1500);
	setTimeout(function() {
		$(".of-rel-cover").remove();
	}, 4500);
}

// CONTADOR

dataDeVencimentoOfertasSplit = dataDeVencimentoOfertas.split("/");
dataDeVencimentoOfertasOrder = dataDeVencimentoOfertasSplit[2]+"/"+dataDeVencimentoOfertasSplit[1]+"/"+dataDeVencimentoOfertasSplit[0]+" "+horarioDeVencimentoOfertas;
$("#contador").ResponsiveCountdown({
	target_date: dataDeVencimentoOfertasOrder,
	time_zone:-3,target_future:true,
	set_id:0,pan_id:0,day_digits:2,
	fillStyleSymbol1:"rgba(255, 168, 32, 1)",
	fillStyleSymbol2:"rgba(91, 91, 91, 1)",
	fillStylesPanel_g1_1:"rgba(253, 253, 254, 1)",
	fillStylesPanel_g1_2:"rgba(217, 217, 234, 1)",
	fillStylesPanel_g2_1:"rgba(253, 253, 254, 1)",
	fillStylesPanel_g2_2:"rgba(217, 217, 234, 1)",
	text_color:"rgba(255,255,255,1)",
	text_glow:"rgba(0,0,0,1)",
	show_ss:true,show_mm:true,
	show_hh:true,show_dd:true,
	f_family:"Verdana",show_labels:true,
	type3d:"single",max_height:300,
	days_long:"DIAS",days_short:"DIAS",
	hours_long:"HORAS",hours_short:"hh",
	mins_long:"MINUTOS",mins_short:"MÊS",
	secs_long:"SEGUNDOS",secs_short:"SEG",
	min_f_size:9,max_f_size:30,
	spacer:"none",groups_spacing:0,text_blur:2,
	font_to_digit_ratio:0.1,labels_space:1.3
});

// MASONRY

if (location.pathname.split("/")[3] == "") {
	var container = document.querySelector('#container');
	var msnry = new Masonry( container, {
	  // options
	  columnWidth: 200,
	  itemSelector: '.item',
	  "gutter": 40
	});
};


// COOKIE

function setCookie(cname,cvalue) {
    document.cookie = cname+"="+cvalue+"; ";
};

// FOMULARIO MOBILE 

function showHideFormMobile() {
	if ($(".busca-mobile-close").css("display") == "none") {
		$(".busca-mobile-close, .search-field").fadeIn();
	} else {
		$(".busca-mobile-close, .search-field").fadeOut();
	}
}

function showHideInfoModal() {
	if ($(".info-modal-container").css("display") == "none") {
		$(".info-modal-container").fadeIn();
	} else {
		$(".info-modal-container").fadeOut();
	}
}

$(document).scroll(function(){
	$(".busca-mobile-close, .search-field").fadeOut();
});

var offerInfoItemsQtd = $(".offer-info-list-item-container").length;
for (var i = 0; i <= offerInfoItemsQtd -1; i++) {
	if (i % 2 == 0) {
    	$(".offer-info-list-item-container:eq("+i+")").addClass("oil-item-data-a");
    	$(".offer-info-list-item-container:eq("+i+") .oil-item-title").addClass("oil-item-title-a");
	};
};

