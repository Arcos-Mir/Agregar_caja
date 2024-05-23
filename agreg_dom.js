$(document).ready(function(){

    var contenedor = $('#contenedor');
    var contador = 1;

    $('#agregar').on('click', function(){
        var caja = $('<div></div>').attr('class', 'caja').text(contador);
        contador++;

        //contenedor.append(caja); agrega en order ascendente
        //contenedor.prepend(caja); //orden diferente

        contenedor.before(caja);
        contenedor.after(caja);
    });
});