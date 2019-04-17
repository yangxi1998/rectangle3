$(function() {
  var $width=$('#width'),$height=$('#height'),$btnCal=$('#calcute'),$perimeter=$('#perimeter'),$area=$('#area'),$widthValidation=$('#width-validation'),$heightValidation=$('#height-validation');
  $width.focusout(function(){
    var result=valid($width.val());//eslint-disable-line no-unde

    if(!result.isOk){
      $widthValidation.html('宽度'+result.reason);
      $height.attr('disabled',true);
    }else{
      $widthValidation.val('');
    }
  });
   
  $height.focusout(function(){
    var result=valid($height.val());//eslint-disable-line no-undef

    if(!result.isOk){
      $heightValidation.html('高度'+result.reason);
    }else{
      $heightValidation.val('');
    }
  }); 
  $btnCal.click(function(){
    var w=$width.val(),
        h=$height.val();
    var validWidth=valid(w);//eslint-disable-line no-undef
    var validHeight=valid(h);//eslint-disable-line no-undef

    if(validWidth.isOk&&validHeight.isOk){
      var r=new Rectangle(w,h);//eslint-disable-line no-undef
      $perimeter.val(r.perimeter());
      $area.val(r.area());
    }
  });
});

