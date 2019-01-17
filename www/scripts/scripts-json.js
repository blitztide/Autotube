var arrayjson;
$(document).ready(function() {
	$.getJSON( "./database/test-array.json", function (data) {
		arrayjson = data;
		buildDocument(arrayjson,"autotube-tiles");
	})
});

function buildDocument( data, dataClass ) {
	dataLen = data.length;
	var text = ""
	for (i = 0; i < dataLen; i++) {
		text += "<div class='" + dataClass +"'>";
		text += "<a href='./" + data[i].image + "'>";
		text += "<img src='" + data[i].image + "'/>";
		text += "<h2>" + data[i].header + "</h2>";
		text += "<div class='" + dataClass + "-body'>" + 
data[i].body + "</div>";
		text += "<div class='" + dataClass + "-footer'>" 
+ data[i].footer + "</div>"; 
		text +="</a></div>";
	};
	$(".autotube-content").append(text);
}; 
