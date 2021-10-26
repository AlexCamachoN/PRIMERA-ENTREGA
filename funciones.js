
//con JSN.parse(data) lo esta convirtiendo otra vez en un array de objetos y lo almacena en artGallery
const artGallery = JSON.parse(data);

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
    const found = artGallery.find(material => material.id === option);
    
    if(isInStock(qty , found.stock)){
        cart = localStorage.getItem("cart");//localStorage pregunta si existe algo encart
        if(!cart){//signo de exclamacion adelante quiere decir si no existe nada en cart
            cart = [];//define y guarda un array vacio
        }else{//si hay algo guardado ,sigue guardadno en el mismo cart
            cart = JSON.parse(cart);
        }
        let item = {qty:qty, price:qty * found.price, found};//guarda toda la informacion que el cliente se quiere llevar
        cart.push(item);

        const cartJSON = JSON.stringify(cart);
        localStorage.setItem('cart',cartJSON);

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
    menu += (artGallery.length + 1) + ".-" + "Ver obras de Arte\n";
    menu += (artGallery.length + 2) + ".-" + "Salir";
    let option = parseInt(prompt(menu))
    return option;
}


//funcion showCart muestra de forma dinamica los productos que el usuario agrego al carro

const showCart = () =>{
    let cartToShow = localStorage.getItem('cart');
    cart = localStorage.getItem('cart');
        if(!cartToShow){
            alert('No agregaste productos aun')
            cart = JSON.parse(cart);
        }else{
            let dataToShow = JSON.parse(cartToShow);
            let show = "";
            dataToShow.forEach(item =>{
                show += `Producto: ${item.found.name} cantidad: ${item.qty} Precio: ${item.price}\n`;
                

            })
            alert(show);
        }

}


//funcion showTotal
const showTotal = () =>{
    let cartToShow = localStorage.getItem('cart');
    cartToShow = JSON.parse(cartToShow);
    if(!cartToShow){
        alert('No compraste nada')
    }else{
        let total = 0
        for (const artGallery of cartToShow) {
            total += artGallery.price;
            let container = document.createElement('div');
            container.innerHTML = `<h3>producto: ${artGallery.found.name}</h3>
                                <p>cantidad: ${artGallery.qty}</p>
                                <b>precio: ${artGallery.price}</b>`;
            document.body.appendChild(container);
        }
        let containerTotal = document.createElement('div');
        containerTotal.innerHTML = `<h1>Total: ${total}</h1>`;
        document.body.appendChild(containerTotal);
    }
    localStorage.clear();
}
