$(function(){

	$(".carouslel-technologies").owlCarousel({
		loop:true,
		nav:true,
		navText: ["<i class='fa fa-angle-left fa-5x'></i>","<i class='fa fa-angle-right fa-5x'></i>"],
		margin: 40,
		responsive:{
				0:{
						items:1,
				},
				520:{
						items:1,
				},
				560:{
						items:1,
				},
				768:{
						items:1,
				},
				992:{
						items:3,
				},
				1200:{
						items:3,
				}
		}
	});


	$(".carousel-main").owlCarousel({
		loop:true,
		nav:true,
		responsive:{
				0:{
						items:1,
				},
				520:{
						items:1,
				},
				560:{
						items:1,
				},
				768:{
						items:1,
				},
				992:{
						items:1,
				},
				1200:{
						items:1,
				}
		}
	});



	$(function(){
		$(".types-item").each(function(e){
			var th = $(this);
			th.attr("href", "#types-img-" + e)
				.find(".item-popup")
					.attr("id", "types-img-" + e);
		});

	});

	$(".types-item").magnificPopup();

	$(".carousel-br").owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		responsive:{
				0:{
						items:1,
				},
				520:{
						items:1,
				},
				560:{
						items:2,
				},
				768:{
						items:2,
				},
				992:{
						items:3,
				},
				1200:{
						items:4,
				}
		}
	});

	$(".carousel-text").equalHeights();
	
	$(".toggle-mnu").click(function() {
	$(this).toggleClass("on");
	$(".main-mnu").slideToggle();
	return false;
});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
