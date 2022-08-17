
$(document).ready(function(){
  
  $('.image-wrap').on('click',function(){
  	$(this).prev().show();
  });
  
  $('.inst-name').on('click',function(){
  	$(this).prev().prev().show();
  });
  
  $('.inst-popup-close').on('click',function(){
  	$(this).closest('.inst-popup-wrapper').hide();
  });
  
  $(document).keyup(function(e) {
    if(e.key === "Escape") { // escape key maps to keycode `27`
      e.preventDefault();
      $('.inst-popup-wrapper').hide();
    }
  });
  
  $('body').on('click','.inst-popup-wrapper',function(e){
    //e.preventDefault();
    if(e.target.className == 'inst-popup-wrapper'){
      $('.inst-popup-wrapper').hide();
    }
  });
  
});