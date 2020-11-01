const configUnidades = require('../config').unidades

class Unidad {
    constructor(unidadTipo, ) {
        this.id = (Math.random() *1000000000).toPrecision(15);  //Se que este es un id debil pero a los efectos del ejemplo no veo nesesario implementar algo mas robusto, normalmente se usaria un id fuerte UUID
        this.tipo = unidadTipo;
        this.info = configUnidades[unidadTipo];
        this.fuerza = this.info.fuerza;
    }

    get esTransformable(){
        return this.info.transformacion.esTransformable;
    }

    //asumo que no hay limite a la cantidad de veces que la unidad puede ser entrenada.
    entrenar(ejercito){
        if(ejercito.oro >= this.info.transformacion.coste) {
            ejercito.pagar(this.info.entrenamiento.coste)
            this.fuerza += this.info.entrenamiento.incrFuerza;
            return (this.tipo + " ah sido entrenado, su nueva fuerza es " + this.fuerza);
        }
        else{
            return "No tienes suficiente oro."
        }
    }

    transformar(ejercito){
        if(this.esTransformable){
            if(ejercito.oro >= this.info.transformacion.coste){
                ejercito.pagar(this.info.transformacion.coste);
                //elimina unidad vieja del ejercito
                const pos = ejercito.unidades.map((e) => { return e.id; }).indexOf(this.id);
                ejercito.unidades.splice(pos, 1);
                //agrega nueva unidad a la que se convierte en el ejercito
                ejercito.unidades.push(new Unidad(this.info.transformacion.seConvierteEn))
                return "Unidad Transformada.";
            }
            else{
                return "No tienes suficiente oro"
            }
        }
        else{
            return "No es transformable"
        }
    }
}

module.exports = Unidad;