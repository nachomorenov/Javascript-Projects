tiempoTrabajado = prompt("Cuantos años vas trabajando para el mismo empleador?")

if (tiempoTrabajado >= 0.5 && tiempoTrabajado < 5){
    alert("Te corresponden 14 dias de vacaciones")
}


else if(tiempoTrabajado >= 5 && tiempoTrabajado < 10){
    alert("Te corresponden 21 dias de vacaciones")
}

else if(tiempoTrabajado >= 10 && tiempoTrabajado <20){
    alert("Te corresponden 28 dias de vacaciones")
}

else if(tiempoTrabajado > 20){
    alert("Te corresponden 35 dias de vacaciones")
}