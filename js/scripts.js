$(document).ready(function (){
  $(".wave-button-open").click(function(e){
    e.preventDefault();
    $(".video").slideToggle();
  });
  $(".wave-button-close").click(function(e){
    e.preventDefault();
    $(".video").slideToggle();
  });
});
