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
			
		},
		toggleNav: function(){
			console.log("helloWorld");
			this.container.toggleClass("open1");
			this.mainPage.toggleClass("open");
			this.sideBar.toggleClass("open2");
		},
		eventBind:function(){
			this.toggleButton.on("click",this.toggleNav.bind(this));
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
