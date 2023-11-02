window.onload = function () {
    "use strict";
    AOS.init({
        duration: 1500,
    });
};



function cargaGraficoBarras() {
    var datos = {
        labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
        datasets: [{
            label: "%",
            backgroundColor: "#202DCB",
            data: [81.1, 87.6, 55.2, 35.4, 26.7, 1,19.7]
        }]
    };
    var grafico = $("#barras")[0].getContext("2d");
    new Chart(grafico, {
        type: "bar",
        data: datos,
        options: {
            title: {
                display: true,
                text: "Navegadores utilizados para acceder a W3Schools en agosto de 2022"
            }
        }
    });
}

$ (document).ready(function(){
 "use strict";
 cargaGraficoBarras();
});

$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
  });


