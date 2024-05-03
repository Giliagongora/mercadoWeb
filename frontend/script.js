$(document).ready(function () {
  
  
  
  
  let carro = [];


  function select() {
    $(".img").on("click", function () {
      $(this).css("opacity", ".5");
      // carro.push(this.alt);
      // console.log("Contenido del arreglo seleccion al añadir: ", seleccion);
      const alt = this.alt;
      if (!carro.includes(alt)) {
        carro.push(alt); // Agregar el elemento solo si no está presente
        let rutaImagen = alt + ".png";
        // Crear un nuevo elemento img con el src igual a la ruta de la imagen
        let img = $("<img>").attr("src", rutaImagen);
        // Agregar la imagen al cuerpo del modal
        $(".modal-body").append(img);
        console.log("Contenido del arreglo seleccion al añadir: ", carro);

      } else {
        console.log("El elemento ya ha sido seleccionado previamente.");
      }

    });

    $(".img").on("dblclick", function () {
      $(this).css("opacity", "1");
      // carro.pop();
      // console.log("Contenido del arreglo seleccion al quitar: ", seleccion); 
      const alt = this.alt; // Almacenar el valor de alt en una variable local
      const index = carro.indexOf(alt);
      if (index !== -1) {
        carro.splice(index, 1); // Eliminar el elemento de la matriz carro
        let imagenAEliminar = $(".modal-body").find(`img[src='${alt}.png']`);
        // Eliminar la imagen del cuerpo del modal
        imagenAEliminar.remove();
        console.log("Contenido del arreglo seleccion al quitar: ", carro);
      }
      console.log("Contenido del arreglo seleccion al añadir: ", carro);
    });
  }
  select();




});
