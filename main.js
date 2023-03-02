const platos = [
    { nombre:"La_fortaleza", precio: 1500},
    { nombre:"Especial", precio: 1900},
    { nombre:"Rubi", precio: 1600},
    { nombre:"Hamburguesas", precio: 1200},
    { nombre:"Jugo_de_zanahoria", precio: 600},
    { nombre:"Ensalada_de_palta_y_queso_tomate_y_cebolla", precio: 1500},
    { nombre:"Pastel_de_brocoli_con_queso", precio: 1400},
    { nombre:"pollo_salteado_con_brocoli_y_soja", precio: 1200},
    { nombre:"salmon_con_arroz_cebolla_y_pepino", precio: 800},
    { nombre:"frutas", precio: 800},
];
let carrito = []

let seleccion = prompt("hola decea seleccionar algun plato si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresa si o no")
    seleccion = prompt("decea seleccionar algo si o no")
}

if(seleccion == "si"){
    alert("a continuacion le mostramos nuestro menu de platos")
let todoslosPlatos = platos.map((plato) => plato.nombre + "" + 
plato.precio + "$");
alert(todoslosPlatos.join(" - ")) 
}
else if(seleccion == "no"){
    alert("bueno,le agradecemos por venir")
} 
while(seleccion != "no"){
    let plato = prompt ("selecciona un plato a tu carrito")
    let precio = 0 

    if(plato == "La_fortaleza" || plato == "Especial" || plato == "Rubi" || plato == "Hamburguesas" || producto == "Jugo_de_zanahoria" 
    || plato == "Ensalada_de_palta_y_queso_tomate_y_cebolla" || plato == "Pastel_de_brocoli_con_queso" || producto == "pollo_salteado_con_brocoli_y_soja"
    || plato == "salmon_con_arroz_cebolla_y_pepino" || plato == "frutas"
    ){ 
    switch (plato){
        case "La_fortaleza":
        precio = 1500;
        break;
        case "Especial":
        precio: 1900
        break;
        case "Rubi":
        precio: 1600
        break;
        case "Hamburguesas": 
        precio: 1200;
        break;
        case "Jugo_de_zanahoria": 
        precio: 600;
        break; 
        case "Ensalada_de_palta_y_queso_tomate_y_cebolla":
        precio: 1500;
        break;
        case "Pastel_de_brocoli_con_queso": 
        precio: 1400;
        break;
        case "pollo_salteado_con_brocoli_y_soja": 
        precio:1200;
        break;
        case "salmon_con_arroz_cebolla_y_pepino": 
        precio:800;
        break; 
        case "frutas":
        precio:800;
        break;
        defoult:
        break;
    }
    let unidades = parseInt(prompt("cuantos platos quiere llevar"))
    carrito.push({plato, unidades, precio})
    console.log(carrito)
    } else{
        alert("no tenemos ese plato disponible")
    }
    seleccion = prompt("decea seguir eligiendo??")

    while(seleccion === "no"){
        alert("gracias por la compra, hasta pronto")
        carrito.forEach((carritoFinal) => {
        console.log('plato: ${carritoFinal.plato}, + unidades: ${carritoFinal.unidades}, + total a pagar por plato ${carritoFinal.unidades * carritoFinal.precio}')
        })
    break;  
    }
}
const total = carrito.reduce((acc,el)=> acc, + el.precio * el.unidades, 0) 
console.log('el total a pagar por su compra es: ${total}')