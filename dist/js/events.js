var Tabs= (function($){
	
	var GenderToggle;
	var Girls;
	var Boys;
	var DropDownArrow = "<span class=\"caret\"></span>";
	var generalTab;
	var contactTab;


	function init(){
		cacheDom();
		bindHandlers();
		
	}
	function bindHandlers(){
		Boys.on("click",genderHandler);
		Girls.on("click",genderHandler);
	}

	function cacheDom(){
		GenderToggle = $("#Gender i");
		Boys = $("#Gender1");
		Girls = $("#Gender2");
		generalTab = $("#general-tab");
		contactTab = $("#contact-tab");
	}
	function genderHandler(e){
			var Gender = e.currentTarget.text;
			GenderToggle.text(Gender);
			generalTab.attr("href","#general-"+Gender);
			contactTab.attr("href","#contact-"+Gender);
			// generalTab.attr("aria-controls","general-"+Gender);
			// contactTab.attr("aria-controls","contact-"+Gender2);
			generalTab.trigger("click");
	}
	return{
		init_tabs: init,
	}



})(jQuery);

Tabs.init_tabs();