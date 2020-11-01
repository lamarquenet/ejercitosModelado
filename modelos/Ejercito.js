const tropasInicialesPorCiv = require("../config").tropasInicialesPorCiv;
const claseUnidad = require("./Unidad");

class Ejercito {
    constructor(civilization) {
        this.oro = 1000;
        this.civilizacion = civilization;
        this.unidades = this.inicializaUnidadesSegunCiv(civilization);
    }

    get fuerza() {
        let fuerza = 0;
        this.unidades.forEach(unidad => {
            fuerza += unidad.fuerza;
        })
        return fuerza;
    }

    get posMejorUnidad(){
        let mayorFuerza = 0
        let posicion = 0;
        for(let i = 0; i < this.unidades.length; i++) {
            let fuerza = this.unidades[i].fuerza;
            if (fuerza > mayorFuerza) {
                mayorFuerza = fuerza
                posicion = i;
            }
        }
        return posicion;
    }

    eliminaUnidad(index) {
        this.unidades.splice(index, 1)
    }

    pagar(monto){
        this.oro -= monto;
    }

    cobrar(monto){
        this.oro += monto;
    }

    unidadesDeClase(tipoUnidad){
        let unidadesPedidas = [];
        this.unidades.forEach(unidad => {
            if(unidad.tipo === tipoUnidad){
                unidadesPedidas.push(unidad);
            }
        })
        return unidadesPedidas;
    }

    inicializaUnidadesSegunCiv(civ) {
        let infoCiv = tropasInicialesPorCiv[civ];
        let unidadesIniciales = [];
        Object.keys(infoCiv).forEach(tipoDeUnidad => {
            for (let i = 0; i < infoCiv[tipoDeUnidad]; i++) {
                unidadesIniciales.push(new claseUnidad(tipoDeUnidad))
            }
        })
        return unidadesIniciales
    }

    entrenaUnaUnidad(tipoDeUnidad){
        //obtengo las unidades del tipo que quiero entrenar presentes en este ejercito
        let unidades = this.unidadesDeClase(tipoDeUnidad);
        if(unidades.length > 0){
            //entreno siempre primero las tropas mas debiles para obtener el mejor incremento de fuerza por unidad monetaria
            //asumo que la orden de entrenar es generica a nivel ejercito por tipo de unidad y no a nivel unidad.
            let UnidadesOrdenadasPorFuerza = unidades.sort((a, b) => {
                return a.fuerza - b.fuerza;
            });

            return UnidadesOrdenadasPorFuerza[0].entrenar(this);
        }
    }

    transformaUnaUnidad(tipoDeUnidad){
        let unidades = this.unidadesDeClase(tipoDeUnidad);
        if(unidades.length > 0){
            let UnidadesOrdenadasPorFuerza = unidades.sort((a, b) => {
                return a.fuerza - b.fuerza;
            });
            return UnidadesOrdenadasPorFuerza[0].transformar(this);
        }
        else {
            return "Este ejercito no tiene unidades transformables de tipo "+ tipoDeUnidad
        }

    }


}

module.exports = Ejercito;
