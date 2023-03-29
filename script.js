 //creamos una funcion que llama a una funcion calectario que contiene el objecto date y que posterior llamamos a sus propiedades y con innehtml lo establesemo en div que lleva una clase fecha
 function caletario(){
   var d=new Date();
   var horaactual= d.getHours();
   var minuto = d.getMinutes();
  var segundos=  d.getSeconds();
  var x=document.getElementById("hora").innerHTML = horaactual+":"+minuto +":"+segundos;  
 }
 
  setInterval(caletario,1000);
  function fecha(){ 
  var d=new Date();
  var semanas= d.getDate();
  var dia= d.getMonth();
 var año=  d.getFullYear();
 var x=document.getElementById("fecha").innerHTML = dia+"-"+semanas +"-"+año;  
}
 var mes = document.getElementById("mes");
 mes.addEventListener("click",my)
 function my (){
   alert("click");
 }

  
setInterval (fecha,1000);

