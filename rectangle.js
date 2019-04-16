$(function() {
  var $width=$('#width'),$height=$('#height'),$btnCal=$('#calcute'),$perimeter=$('#perimeter'),$area=$('#area');
  $btnCal.click(function(){
    var w=$width.val(),
        h=$height.val();
    var r = new Rectangle(w,h);//eslint-disable-line no-undef
    $perimeter.val(r.perimeter());
    $area.val(r.area());
  });
});
