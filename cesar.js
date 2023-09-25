$(document).ready(() => {

    $(document).on('click', '#cifrar', () => {

        var abecedario = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        var texto = $('#textarea').val();

        var desplazamiento = parseInt($('#desplazamiento').val());

        var cifrado = "";

        for (var i = 0; i < texto.length; i++) {
            var letra = texto[i].toLowerCase();
            var indice = abecedario.indexOf(letra);

            if (indice != -1) {
                var nuevoIndice = (indice + desplazamiento) % abecedario.length;
                var nuevaLetra = abecedario[nuevoIndice];
                cifrado += nuevaLetra;
            } else {
                cifrado += letra;
            }

        }

        $('#textocifrado').attr('style', 'display:inherit');
        $('#textocifrado').text(cifrado);

    })

});