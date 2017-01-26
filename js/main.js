/*
$(document).ready(function() {
    document.addEventListener("keydown", function (e) {
        if(e.which == '39'){
            console.log("right");
            $('#map').css('left', '-=10px');
            $('#player1').css('background-position-y', '360px').addClass('move');
        }
        else if(e.which == '37'){
            $('#map').css('left', '+=10px');
            $('#player1').css('background-position-y', '480px').addClass('move');
        }
        else if(e.which == '38'){
            console.log("up");
            $('#map').css('top', '+=10px');
            $('#player1').css('background-position-y', '240px').addClass('move');
        }
        else if(e.which == '40'){
            console.log("down");
            $('#map').css('top', '-=10px');
            $('#player1').css('background-position-y', '120px').addClass('move');
        }
    }, false);
    document.addEventListener("keyup", function (e) {
        if(e.which == '39'){
            console.log("right");
            $('#player1').css('background-position-y', '360px').removeClass('move');
        }
        else if(e.which == '37'){
            console.log("left");
            $('#player1').css('background-position-y', '480px').removeClass('move');
        }
        else if(e.which == '38'){
            console.log("up");
            $('#player1').css('background-position-y', '240px').removeClass('move');
        }
        else if(e.which == '40'){
            console.log("down");
            $('#player1').css('background-position-y', '120px').removeClass('move');
        }
    }, false)
});
*/

/*
 $(document).on('click', function(e){
 $('#player1').css({left:  e.pageX, top:   e.pageY}).addClass('move');
 });
 */
/*
 $(document).on('click', function(e){
 $('#player1').css({left:  e.pageX, top: e.pageY}).animate(3000);
 });
 */


$(function () {

    var worker = new Worker('js/worker.js');

    var moveRequest  = {
        top: 0,
        left:0
    };

    var map  = {
        top: 0,
        left:0
    };

    var player = $('#player1');

    var mapf = $('#map');

    mapf.on("keydown keyup", function (e) {
        switch (e.which) {
            case 39:
                //right
                moveRequest.left = (e.type == "keydown")?1:0;
                player.css('background-position-y','360px');
                break;
            case 40:
                //down
                moveRequest.top = (e.type == "keydown")?1:0;
                player.css('background-position-y','120px');
                break;
            case 37:
                //left
                moveRequest.left = (e.type == "keydown")?-1:0;
                player.css('background-position-y','480px');
                break;
            case 38:
                //up
                moveRequest.top = (e.type == "keydown")?-1:0;
                player.css('background-position-y','240px');
                break;
         }
         worker.postMessage(moveRequest);
    });

    worker.onmessage =  function(event) {
        console.log(event.data);
        mapf.css('transform', 'translate(' + event.data.left*32 + 'px, ' + event.data.top*32 + 'px)');
    }
});

