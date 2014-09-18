$(function() {
	$( "#slider-range" ).slider({
		range: true,
		min: 30,
		max: 100,
		values: [ 30, 100 ],
		animate: "slow",
		step: 2,
		slide: function( event, ui ) {
		  $( "#amount" ).val( "R$" + ui.values[ 0 ] + ".000,00 - R$" + ui.values[ 1 ] + ".000,00");
		  atualizaOfertasComDadosDoFiltro();
		}
	});
	$( "#amount" ).val( "R$" + $( "#slider-range" ).slider( "values", 0 ) + ".000,00 - R$" + $( "#slider-range" ).slider( "values", 1 ) + ".000,00" );
});

atualizaOfertasComDadosDoFiltro();

function alteraValoresRange(value1, value2){
	$( "#slider-range" ).slider({ values: [ value1, value2 ] });
	atualizaValoresRange();
	atualizaOfertasComDadosDoFiltro();
}

function atualizaValoresRange() {
	$( "#amount" ).val( "R$" + $( "#slider-range" ).slider( "values", 0 ) +
	  ".000,00 - R$" + $( "#slider-range" ).slider( "values", 1 ) + ".000,00" );
}

function atualizaOfertasComDadosDoFiltro() {
	var precoMinRange = $( "#slider-range" ).slider("values")[0];
	var precoMaxRange = $( "#slider-range" ).slider("values")[1];
	var numeroTotalOfertas = $(".oferta").length;
	for (var i = 0; i <= $(".oferta").length - 1; i++) {
		var ofertaAtual = $(".oferta:eq("+i+")");
		var precoOfertaAtual = ofertaAtual.attr("preco");
		if (precoOfertaAtual >= precoMinRange && precoOfertaAtual <= precoMaxRange) {
			ofertaAtual.css({"display": "block"});
		} else {
			ofertaAtual.css({"display": "none"});
		}
	};
	msnry.layout();
}