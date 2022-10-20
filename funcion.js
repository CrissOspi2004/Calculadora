
    var Valora1 = null;
    var Valora2 = null;


        //Julian Rodriguez
        //German Arango

function valore1(){
            Valora1 = document.getElementById("valor1").value;
         alert(Valora1+"/"+"s");
};  

function valore2(){
            Valora2 = document.getElementById("valor2").value;
         alert("1"+"/"+"s-"+Valora2);
}; 

function factorial() {
          var Valora3 = document.getElementById("valor3").value;
          var valor3resultado = 1;
            for (i=1; i<=Valora3; i++) {
            valor3resultado = valor3resultado * i;
            }
            var numero1= Valora3 ++ +1;
        alert(valor3resultado+"/"+"s^"+"("+numero1+")");
};

function calc5() {
          var Valora5 = document.getElementById("camp4").value;
          var Valora6 = Valora5 * Valora5;
        alert(Valora5+"/"+"s^(2)+"+Valora6);
};

function calc6() {
          var Valora7 = document.getElementById("camp5").value;
          var Valora8 = Valora7 * Valora7;
        alert("s/"+"s^(2)+"+Valora8);
};

function calc7() {
          var Valora9 = document.getElementById("camp6").value;
          var Valora10 = Valora9 * Valora9;
        alert(Valora9+"/"+"s^(2)-"+Valora10);
};

function calc8() {
          var Valora11 = document.getElementById("camp7").value;
          var Valora12 = Valora11 * Valora11;
        alert("s/"+"s^(2)-"+Valora12);
};

function calc9() {
          var Valora13 = document.getElementById("camp8").value;
          var Valora14 = document.getElementById("camp9").value;
          var valor13resultado = 1;
            for (i=1; i<=Valora13; i++) {
            valor13resultado = valor13resultado * i;
            }
          var numero2 = Valora13 ++ +1;
        alert(valor13resultado+"/"+"(s+"+Valora14+")^("+numero2+")");
};

function calc10() {
          var Valora15 = document.getElementById("camp10").value;
          var Valora16 = document.getElementById("camp11").value;
          var numero3 = Valora15 * Valora15;
        alert("s-"+Valora16+"/"+"((s-"+Valora16+")^(2))+"+numero3);
};

function calc11() {
          var Valora17 = document.getElementById("camp12").value;
          var Valora18 = document.getElementById("camp13").value;
          var numero4 = Valora17 * Valora17;
        alert(Valora17+"/"+"((s-"+Valora18+")^(2))+"+numero4);
};

function calc12() {
          var Valora19 = document.getElementById("camp14").value;
          var Valora20 = document.getElementById("camp15").value;
          var numero5 = Valora19 * Valora19;
        alert("s-"+Valora20+"/"+"((s-"+Valora20+")^(2))-"+numero5);
};

function calc13() {
          var Valora21 = document.getElementById("camp16").value;
          var Valora22 = document.getElementById("camp17").value;
          var numero6 = Valora21 * Valora21;
        alert(Valora21+"/"+"((s-"+Valora22+")^(2))-"+numero6);
};

