
    var Val1 = null;
    var Val2 = null;

function valore1(){
            Val1 = document.getElementById("n1").value;
         alert(Val1+"/"+"s");
};  

function valore2(){
            Val2 = document.getElementById("n5").value;
         alert("1"+"/"+"s-"+Val2);
}; 

function factorial() {
          var Val3 = document.getElementById("n2").value;
          var valor3resultado = 1;
            for (i=1; i<=Val3; i++) {
            valor3resultado = valor3resultado * i;
            }
            var numero1= Val3 ++ +1;
        alert(valor3resultado+"/"+"s^"+"("+numero1+")");
};

function calc5() {
          var Val5 = document.getElementById("n7").value;
          var Val6 = Val5 * Val5;
        alert(Val5+"/"+"s^(2)+"+Val6);
};

function calc6() {
          var Val7 = document.getElementById("n8").value;
          var Val8 = Val7 * Val7;
        alert("s/"+"s^(2)+"+Val8);
};

function calc7() {
          var Val9 = document.getElementById("n9").value;
          var Val10 = Val9 * Val9;
        alert(Val9+"/"+"s^(2)-"+Val10);
};

function calc8() {
          var Val11 = document.getElementById("n10").value;
          var Val12 = Val11 * Val11;
        alert("s/"+"s^(2)-"+Val12);
};

function calc9() {
          var Val13 = document.getElementById("n6").value;
          var Val14 = document.getElementById("n61").value;
          var valor13resultado = 1;
            for (i=1; i<=Val13; i++) {
            valor13resultado = valor13resultado * i;
            }
          var numero2 = Val13 ++ +1;
        alert(valor13resultado+"/"+"(s+"+Val14+")^("+numero2+")");
};

function calc10() {
          var Val15 = document.getElementById("camp10").value;
          var Val16 = document.getElementById("camp11").value;
          var numero3 = Val15 * Val15;
        alert("s-"+Val16+"/"+"((s-"+Val16+")^(2))+"+numero3);
};

function calc11() {
          var Val17 = document.getElementById("n11").value;
          var Val18 = document.getElementById("n111").value;
          var numero4 = Val17 * Val17;
        alert(Val17+"/"+"((s-"+Val18+")^(2))+"+numero4);
};

function calc12() {
          var Val19 = document.getElementById("camp14").value;
          var Val20 = document.getElementById("camp15").value;
          var numero5 = Val19 * Val19;
        alert("s-"+Val20+"/"+"((s-"+Val20+")^(2))-"+numero5);
};

function calc13() {
          var Val21 = document.getElementById("camp16").value;
          var Val22 = document.getElementById("camp17").value;
          var numero6 = Val21 * Val21;
        alert(Val21+"/"+"((s-"+Val22+")^(2))-"+numero6);
};
