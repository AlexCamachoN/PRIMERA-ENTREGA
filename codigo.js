//------------------------------------------------------
//--------------------------CODIGO -------------
//Archivo principal para el desarrollo de UNA GALERIA DE ARTE

//--------------------------------------------Ciclo Principal--------------------------------------------//

alert(`Bienvenido! a tu tienda de Arte Camacho`);

do{
    let option = showMenu();
    if(option ===( artGallery.length + 1)) break; //Opcion 6 es Salir
    let qty = parseInt(prompt(selectedQty));

    addToCart(option,qty);

    resp = prompt('¿Desea agregar mas obras de arte? Escribe: \nsi/no');
    resp.toLocaleLowerCase()//Esta opcion permite  retorna minuscula o mayuscula y va en reemplazo de resp==="SI"
    

}while(resp === 'si'); //|| resp === 'SI');se anula por que se escibio toLocaleLowerCase

if(cart > 0){
    alert(`El total a pagar es ${cart} soles`);
};

alert("Gracias, disfrute de su coleccion particular y vuelva pronto");

//las funciones y las variables se hicieron en oTro documento para una mejor organizacion
