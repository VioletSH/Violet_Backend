module.exports = async function getInicialInfoStudent (req, res) { 
    var id = req.param('idEstudiante');
    if (isNaN(id)) {
        return res.badRequest(new Error('Any mail was specified, please provide it in params'));
    }

    var estudiante = await Estudiante.findOne({id:id}).populate('caminosEstudiante')
    estudiante.cursos = []
    var caminosAprendizaje = []
    for(caminoEstudiante of estudiante.caminosEstudiante){
        var caminoAsignado = await CaminoAprendizaje.findOne({id:caminoEstudiante.caminoAprendizaje}).populate('curso')
        var caminoRecorrido = await CaminoEstudiante.findOne({id:caminoEstudiante.id}).populate('respuestas')



        var curso = caminoAsignado.curso
        curso.caminoAsignado = caminoAsignado.contenidos

        curso.caminoEstudiante = {orden:[]}

        for(resp of caminoRecorrido.respuestas){
            curso.caminoEstudiante.orden.push(resp.contenido)
        }

        curso.proximaActividad = curso.caminoAsignado.orden.filter(x=>!curso.caminoEstudiante.orden.includes(x))[0]


        estudiante.cursos.push(caminoAsignado.curso)
    }
    delete(estudiante.caminosEstudiante) //Remove for preserve order
    return res.send(estudiante) 
}