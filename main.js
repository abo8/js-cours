$(function(){
	var jqxhr = $.ajax({
		url : "https://www.googleapis.com/customsearch/v1",
		method : "get",
		data : {
			q: ((Math.random() > 0.5)?"dead cat":"happy cat"),
			num : 10,
			start : 1,
			imgSize : "medium",
			searchType : "image",
			key : "AIzaSyDrG8QzpQAVZr5UWcj-DY0Eg_0j4wUA0os",
			cx : "004582482600805082136:hx9z600l3lg"
		}
	})
  .done(function(e) {
    if (e.items && e.items.length > 0){
    	console.log(e);
    	$("body").css( {'background': 'url("'+ e.items[Math.floor(Math.random()*e.items.length)].link +'") top center / cover'});
    }
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
  });
});