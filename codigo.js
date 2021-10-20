//--------------------------PRIMERA ENTREGA----------------------------
//-------GALERIA DE ARTE-----------
class artGallery {
    constructor(pintura, medidas, tecnica, anioejecucion, genero){
        this.pintura=pintura;
        this.medidas=medidas;
        this.tecnica=tecnica;
        this.anioejecucion=anioejecucion;
        this.genero=genero;

    }
    //DECLARANDO METODO:
    medidaGrande(medida) {
        if((medida <= 150) && (medida >=50)) {
            return true; 
        }
        return false;
    }
}
const painting1 = new artGallery("pintura1", "150 x 150cm", "oleo/lienzo", "2020", "paisaje")
const painting2 = new artGallery("pintura2", "120 x 120cm", "oleo/lienzo", "2021", "desnudo")
const painting3 = new artGallery("pintura3", "100 x 100cm", "oleo/lienzo", "2019", "abstracto")
const painting4 = new artGallery("Pintura4", "130 x 150cm", "mixta/lienzo", "2021", "paisaje")
const painting5 = new artGallery("pintura5", "80 x 40 cm", "oleo/lienzo", "2020", "retrato")
for (let index = 0; index < 5 ; index++) {
    let entrada = parseInt(prompt("INGRESAR MEDIDA DE LA OBRA DESEADA "));
    if(painting1.medidaGrande(entrada)){
        alert("si tenemos pintura de  "+entrada+ "cm")
    }else{
        alert("No tenemos la medida de "+entrada+ " cm que esta buscando")
    }
    alert("vuelva pronto, LA GALERIA ESTA TRABAJANDO EN NUEVA PRODUCCION")
}




