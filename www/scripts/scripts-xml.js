$(document).ready(function() {
	$.ajax({
		type: "GET" ,
		url: "./database/test.xml",
		dataType: "xml",
		success: function(xml) {
			$(xml).find('channel').each(function() {
				nm= $(this).text();
				original = $(".autotube-content").text();
				nm = original + nm;
				$(".autotube-content").html(nm);
			});
		}
	});
});
