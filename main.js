function cerrar() {
    document.getElementById('alertaFondo').style.cssText = 'Top: -9999999999px;';
    document.getElementById('alertaFlotante').style.cssText = 'Top: -9999999999px;';    
}

function nada() {
    document.getElementById('alertaFondo').style.cssText = 'Top: 0px;';
    document.getElementById('alertaFlotante').style.cssText = 'Top: none;';    
}