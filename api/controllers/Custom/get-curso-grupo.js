module.exports = async function getCursoGrupo (req, res) { 
    var idCurso = req.param('idCurso');
    var idGrupo = req.param('idGrupo');

    if (isNaN(idCurso)) {
        return res.badRequest(new Error('No Curso ID specified!'));
    
    }
    if (isNaN(idGrupo)) {
        return res.badRequest(new Error('No Grupo ID specified!'));
    } 
    var curso = await Curso.findOne({ id: idCurso });

    if(Object.entries(curso).length === 0){
        return res.badRequest(new Error('Not Found'));
    }
    var grupo = await Grupo.findOne({id: idGrupo}).populate('estudiantes')
    curso.grupo=grupo
   
    var modulos = await Modulo.find({curso : idCurso})
    curso.modulos=modulos

    for(var modulo in modulos){
        var actividades = await Actividad.find({modulo : modulos[modulo].id})
        modulos[modulo].actividades= actividades
        

        for(var actividad in actividades){
            var contenidos = await Contenido.find({actividad : actividades[actividad].id})
            actividades[actividad].contenidos = contenidos


            actividades[actividad].notaProm = 0;
            actividades[actividad].progreso = 0;
            actividades[actividad].notas = []

            for(var contenido in contenidos){
                var peticion = await Recurso.findOne({id : contenidos[contenido].peticion})
                contenidos[contenido].peticion = peticion
            }
        }

        modulos[modulo].notaProm = 0;
        modulos[modulo].progreso = 0;
        modulos[modulo].estudiantesTerminaron = 0;
        
    }

    //Calculo de progresos y notas:
    var estudiantes = grupo.estudiantes
    for(var estudiante in estudiantes){
        var notas = []
        var acNotaEstudiante = 0
        totalActividadesRealizadas = 0;
        totalActividades = 0;
        for(var modulo in modulos){
            
            var actividades = modulos[modulo].actividades
            var totalActividadesModuloRealizadas = Math.floor(Math.random() * actividades.length)

            if(actividades.length == totalActividadesModuloRealizadas){
                modulos[modulo].progreso+= 1/estudiantes.length*100
                modulos[modulo].estudiantesTerminaron ++;
            }

            totalActividadesRealizadas += totalActividadesModuloRealizadas;

            var notasModulo=[]

            for(var i= 0; i<actividades.length;i++){
                var nota = 0;
                if(i<totalActividadesModuloRealizadas){
                    nota = Math.floor(Math.random() * 51)/10;
                    actividades[i].progreso+= 1/estudiantes.length*100

                    var minDate = actividades[i].createdAt
                    var maxDate = new Date().getTime()
                    var randomDate = Math.floor(Math.random()*(maxDate-minDate+1)+minDate)

                    actividades[i].notas.push({
                        estudiante: estudiantes[estudiante].nombre,
                        nota:nota,
                        fechaEntrega:randomDate
                    })
                }
                acNotaEstudiante+=nota;
    
                notasModulo.push({
                    actividad: actividades[i].nombre,
                    nota:nota
                })
    
                actividades[i].notaProm += nota/estudiantes.length
                totalActividades++;

                modulos[modulo].notaProm+= actividades[i].notaProm/actividades.length
            }

            notas.push({
                modulo: modulos[modulo].nombre,
                notas:notasModulo
            })
        }

        estudiantes[estudiante].notas=notas;
        estudiantes[estudiante].progreso = Math.floor((totalActividadesRealizadas/totalActividades)*100);
        estudiantes[estudiante].notaProm = (totalActividadesRealizadas>0?acNotaEstudiante/totalActividadesRealizadas:0).toFixed(1);
    }

    return res.send(curso);
};