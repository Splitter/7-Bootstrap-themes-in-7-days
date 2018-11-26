
jQuery(document).ready(function(){
	
    
    //Navigation on smaller screens
    mOnResize();
	jQuery('#jump').click(function(e){
		e.preventDefault();
		jQuery('.movement').stop().slideToggle(500);
	})    
    jQuery(window).on('resize', mOnResize);
    //Navigation on smaller screens
    
    
    //Gallery lightbox
    jQuery(".gallery-wrapper").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',
    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
    });
    //Gallery lightbox

});


//Show dropdown Navigation on smaller screens
var mOnResize = function(){
      if ($(window).width() <= 750) { 
          jQuery('#jump').css("display","block");
          jQuery('.movement').css("display","none");
      
      }        
      else{
          jQuery('#jump').css("display","none");
          jQuery('.movement').css("display","block");
          
      }
};