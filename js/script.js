// JavaScript Document

/* Cambio de icono redes sociales */
function chgYoutube()
{
	document.getElementById("imgYoutube").src = "img/greyYoutube.png";
}
		
function nchgYoutube()
{
	document.getElementById("imgYoutube").src = "img/youtube.png";
}

function chgInstagram()
{
	document.getElementById("imgInstagram").src = "img/greyInstagram.png";
}
		
function nchgInstagram()
{
	document.getElementById("imgInstagram").src = "img/instagram.png";
}

function chgFacebook()
{
	document.getElementById("imgFacebook").src = "img/greyFacebook.png";
}
		
function nchgFacebook()
{
	document.getElementById("imgFacebook").src = "img/facebook.png";
}

function chgTwitter()
{
	document.getElementById("imgTwitter").src = "img/greyTwitter.png";
}
		
function nchgTwitter()
{
	document.getElementById("imgTwitter").src = "img/twitter.png";
}

/* Tooltips */
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});