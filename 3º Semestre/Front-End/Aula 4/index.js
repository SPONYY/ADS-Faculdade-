notaUm = 7;
notaDois = 7;

function calcularMedia() {
    
    let media = (notaUm*0.4)+(notaDois*0.6)/2;

    let numeroFormato = parseFloat(media.toFixed(1));

    document.write("A sua média do semestre é = " + numeroFormato);
}
