
const batallar = (ejercito1, ejercito2) =>{
    const fuerza1 = ejercito1.fuerza
    const fuerza2 = ejercito2.fuerza

    if (fuerza1 > fuerza2) {
        ejercito1.cobrar(100)
        ejercito2.eliminaUnidad(ejercito2.posMejorUnidad)
        ejercito2.eliminaUnidad(ejercito2.posMejorUnidad)
    }
    else if (fuerza1 < fuerza2) {
        ejercito2.cobrar(100)
        ejercito1.eliminaUnidad(ejercito1.posMejorUnidad)
        ejercito1.eliminaUnidad(ejercito1.posMejorUnidad)

    }
    else if (fuerza1 === fuerza2) {
        //en caso de empate simplemente elimino la primera de las unidades de cada ejercito
        ejercito1.eliminaUnidad(0)
        ejercito2.eliminaUnidad(0)
    }
}

module.exports = {
    batallar
}