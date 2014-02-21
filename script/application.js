$(document).ready(function() {
	toolkit.init();
});

var toolkit = {
	init: function() {
		$(".button").on("click", this.changeMessage);
		$(".button").on("mouseenter", function() { $(".button").toggleClass("highlight");});
		$(".button").on("mouseleave", function() { $(".button").toggleClass("highlight");});
	},
	changeMessage: function(e) {
		e.preventDefault();
		//$("h1").toggleClass("highlight");
		$(".blurb").fadeToggle();
	}
};