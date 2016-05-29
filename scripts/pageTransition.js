

$(document).ready(function () {
$('#navTab').hide();
$("#navTab").delay("slow").fadeIn();


$('#Mainheader').click(function(){
	$( this ).css('background-color','#0080ff');
	$( this ).css('border-radius','5px');
	$('#headText').css('color','white');
});

$( "#header1" ).click(function() {
       $( "#seaWonder" ).toggle( "slow", function() {
                        
		});
});

$( "#header2" ).click(function() {
       $( "#seaMove" ).toggle( "slow", function() {
                        
		});
});

$("#downBtnRSL").click(function(){
 $("#anchorRSL").css('class','btn btn-success');
});




});


