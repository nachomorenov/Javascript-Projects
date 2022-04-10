/*este ejercicio representa a 3 chicos queriendo saber cual es el helado mas caro que se pueden
comprar, y Rafa quiere saber cual seria su vuelto.
Rafa tiene 3usd
Roberto tiene 1.5usd
Pedro tiene 1.7usd
*/


dineroRafa = prompt("Cuanto dinero tenes Rafa?");
dineroRoberto = prompt("Cuanto dinero tenes Roberto?");
dineroPedro = prompt("Cuanto dinero tenes Pedro?");

dineroRafa = parseInt(dineroRafa);


if (dineroRafa >= 0.6 && dineroRafa < 1) {
    alert("Rafa, llegas al Helado de Agua")
    alert("Y tu vuelto seria de " + (dineroRafa - 0.6))

}
else if (dineroRafa >= 1 && dineroRafa < 1.6 ) {
    alert("Rafa, llegas al Helado de Crema")
    alert("Y tu vuelto seria de " + (dineroRafa - 1))
}

else if (dineroRafa >= 1.6 && dineroRafa < 1.7 ) {
    alert("Rafa, llegas al Bombon Helado")
    alert("Y tu vuelto seria de " + (dineroRafa - 1.6))
}

else if (dineroRafa >= 1.7 && dineroRafa < 1.8 ) {
    alert("Rafa, llegas al Cono Helado")
    alert("Y tu vuelto seria de " + (dineroRafa - 1.7))
}

else if (dineroRafa >= 1.8 && dineroRafa < 2.9 ) {
    alert("Rafa, llegas al Alfajor Helado")
    alert("Y tu vuelto seria de " + (dineroRafa - 1.8))
}

else if (dineroRafa >= 2.9) {
    alert("Rafa, llegas al Helado con Rocklets o el Pote de 1/4 de crema")
    alert("Y tu vuelto seria de " + (dineroRafa - 2.9))

} else {
    alert("Rafa, no te alcanza para ningun helado, fuera de aqui pobre")
}



if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto, llegas al Helado de Agua")

}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6 ) {
    alert("Roberto, llegas al Helado de Crema")
}

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7 ) {
    alert("Roberto, llegas al Bombon Helado")
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8 ) {
    alert("Roberto, llegas al Cono Helado")
}

else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9 ) {
    alert("Roberto, llegas al Alfajor Helado")
}

else if (dineroRoberto >= 2.9) {
    alert("Roberto, llegas al Helado con Rocklets o el Pote de 1/4 de crema")

} else {
    alert("Roberto, no te alcanza para ningun helado, fuera de aqui pobre")
}



if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro, llegas al Helado de Agua")

}
else if (dineroPedro >= 1 && dineroPedro < 1.6 ) {
    alert("Pedro, llegas al Helado de Crema")
}

else if (dineroPedro >= 1.6 && dineroPedro < 1.7 ) {
    alert("Pedro, llegas al Bombon Helado")
}

else if (dineroPedro >= 1.7 && dineroPedro < 1.8 ) {
    alert("Pedro, llegas al Cono Helado")
}

else if (dineroPedro >= 1.8 && dineroPedro < 2.9 ) {
    alert("Pedro, llegas al Alfajor Helado")
}

else if (dineroPedro >= 2.9) {
    alert("Pedro, llegas al Helado con Rocklets o el Pote de 1/4 de crema")

} else {
    alert("Pedro, no te alcanza para ningun helado, fuera de aqui pobre")
}
