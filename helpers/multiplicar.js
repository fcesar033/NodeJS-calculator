const fs = require('fs');
const colors = require('colors');

// const crearArchivo = (base = 5) => {

//     console.log('==============');
//     console.log(` Tabla del ${base}`);
//     console.log('==============');

//     let salida ='';

//     for (let i=1; i<=10; i++){
//         salida += (`${base} x ${i} = ${base*i}\n`);
//     }

//     console.log(salida);

//     fs.writeFileSync(`tabla-${base}.txt`, salida);
    
//     console.log(`tabla-${base}.txt creado`)
// }

// const crearArchivo = async(base) => {

//     try{
//         let salida ='';

//         for (let i=1; i<=10; i++){
//             salida += (`${base} x ${i} = ${base*i}\n`);
//         }

//         let nombreArchivo = `tabla-${base}.txt`
//         fs.writeFileSync(nombreArchivo, salida);

//         return `El archivo ${nombreArchivo} se creo con exito`
//     } catch (error) {
//         throw error;
//     }
    
    
// }

const crearArchivo = (base,listar,hasta) => {

    return new Promise ( (resolve,reject) => {
        let salida = '';
        let consola = '';

        for (let i=1; i<=hasta; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${colors.red(base)} ${'x'.green} ${colors.red(i)} ${'='.green} ${colors.blue(base*i)}\n`;
        }

        if (listar) {
            console.log(consola);
        }

        let nombreArchivo = `./salida/tabla-${base}-hasta-${hasta}.txt`
        fs.writeFileSync(nombreArchivo, salida);
        (salida)
            ? resolve (`El archivo ${nombreArchivo} se creo con exito`)
            : reject ('Error en la creacion del archivo');
        
    });
  
    
    
}

module.exports = {
    crearArchivo
}