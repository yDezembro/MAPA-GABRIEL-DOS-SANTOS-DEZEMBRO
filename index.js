$(document).ready(function() {
    $('#form-cadastro').submit(function(event) {
        var senha = $('#senha').val();
        var confirmarSenha = $('#confirmar-senha').val();

        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem!');
            event.preventDefault();
        }
    });
});
