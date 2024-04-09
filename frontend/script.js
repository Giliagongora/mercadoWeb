$( document ).ready(function() {
    let seleccion = "";

    $( ".img" ).one( "click", function() {
        $( this ).css( "opacity", ".5" );
      });
      
      $(".img").remove(".test, .demo");
      $( ".img" ).has( "opacity" ).removeClass( "opacity" );



});