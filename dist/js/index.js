(function($){


var NavbarHandler = {
		init: function() {
			this.cacheDom();
			this.eventBind();


		},
		cacheDom:function(){

			this.container = $("#container");
			this.mainPage = $("#main");
			this.sideBar =  $(".side-bar");
			this.toggleButton = $("#fuck");
			this.mainContainer = $("#main .container");
			this.window = $(window);
			this.usesVH = $(".usesvh");
			this.usesVH2 = $("div");
			
		},
		toggleNav: function(){
			console.log("helloWorld");
			this.container.toggleClass("open1");
			this.mainPage.toggleClass("open");
			this.sideBar.toggleClass("open2");
			
		}
		,
		calcVH: function(){
			usesVH.innerHeight($(this).innerHeight());
			usesVH2.innerHeight($(this).innerHeight());
		},
		fullscreen: function(){
			this.window.scrollTo(0,0);
		},
		preventDefaults: function(e){
			e.preventDefault();
			this.FullScreenDocument();

		},
		FullScreenDocument: function(){
			var body = document.documentElement;
			if (body.requestFullscreen) {
			  body.requestFullscreen();
			} else if (body.webkitrequestFullscreen) {
			  body.webkitrequestFullscreen();
			} else if (body.mozrequestFullscreen) {
			  body.mozrequestFullscreen();
			} else if (body.msrequestFullscreen) {
			  body.msrequestFullscreen();
			}
		},
		eventBind:function(){
			this.window.on("load",this.fullscreen.bind(this));
			document.on("touchmove",this.preventDefaults.bind(this));
			this.toggleButton.on("click",this.toggleNav.bind(this));
			this.window.on("orientationchange resize",this.calcVH.bind(this));
		}

};
NavbarHandler.init();
})(jQuery);









// function ToggleNav(){
// 	$('#container').toggleClass("open1");
// $('#main').toggleClass("open");
// 	$('.side-bar').toggleClass("open2");
// 	//flag = (flag==1 ? 0 : 1);
	
// }

// $('#fuck').on('click',function(){
// 		ToggleNav();	
// });



$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
