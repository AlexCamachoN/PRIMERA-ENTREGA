/*Funcion isStock verifica si se posee el stock suficiente para realizar la venta
RECIBE:
qty: Cantidad deseada por el cliente
stock: Stock disponible del producto
DEVUELVE
TRUE: Si hay suficiente stock
FALSE: Si no hay suficiente stock
*/
const isInStock = (qty, stock) => {
    if(qty > stock){
        alert(`No contamos con suficiente stock, solo tenemos: ${stock}und`);
        return false;
    }
    else return true;
}

/*Funcion (addToCart -añadir al carrito-) ejectuta la venta del producto seleccionado
RECIBE
Option: Opcion seleccionada
Qty: Cantidad deseada por el usuario, declarada en variable gneral
*/
const addToCart = (option,qty) =>{
    const found = artGallery.find(material => material.id === option)
    
    if(isInStock(qty , found.stock)){
        cart += (qty * found.price);
        artGallery[found.id -1].stock -= qty
        alert(`${found.name} fue agregado al carrito`);
    }
}

//con estos pocos codigos se puede tener y agregar la cantidad de objetos para arrays
//------metodo de array foreach------------
const showMenu = () =>{
    console.log(artGallery);
    let menu = "Escoge la pintura deseada: \n";
    // for(let i=0; i<artGallery.length; i++){

    // }
    artGallery.forEach((material) =>{
        menu += material.id + ".-" + material.name + "\n";
    });
    menu += (artGallery.length + 1) + ".-" + "Salir";
    let option = parseInt(prompt(menu))
    return option;
}

