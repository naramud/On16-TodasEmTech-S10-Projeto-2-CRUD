const { request, response } = require("../app")

// retorna todos os pods
const getAllmusic = (request, response) => {
    try {
        response.status(200).json([{
            "music": music
        }])
    } catch (err) {
        response.status(500).send({ message: "Erro no server" })
    }
}

const getBuscar = (request, response) => {
    const idRequest = request.params.id
    const buscarRequest = request.body.id
    idFilter = pods.find((muscast) => muscast.id == idRequest)
    
    if (idFilter) {
        idFilter.stars = buscarRequest
        response.status(200).json([{
            message: "busca feito com sucesso", 
            music
        }])
    }else{
        response.status(404).json([{
            message: "Não foi modificado"
        }])
    }
}

const getartists = (request, response) => {
    const artistsRequest = request.query.artists
    const artistsFilter = music.filter(music => music.artists.includes(artistsRequest))
    if (titleFilter) {
        response.status(200).send(artistsFilter)
    } else {
        response.status(404).send ([{
            "mensagem": 'artists não encontrado'
        }])
    }
    
}

const addmusic= (request, response) => {
    let nameRequest = request.body.name
    let titleRequest = request.body.title
    let musicRequest = request.body.music

    let newtitle = {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        name: nameRequest,
        title:titleRequest,
        topic: topicRequest,
        music: musicRequest
    }
    musicas.push(newtitle)
    response.status(201).json([{
        "message": "nova musica cadatrada",
        newtitle
    }])
}

const updateId = (request, reponse) => {

    const idRequest = request.params.id
    let musicasRequest = request.body

    let indexEncontrado = music.findIndex(music => music.id == idRequest)


    music.splice(indexEncontrado, 1, musicasRequest)

    reponse.status(200).json([{
        "mensagem": "id atualizado?",
        music
    }])
}


const deletemusic = (request, response) => {
    
    const idRequest = request.params.id
    
    const indiceMusicas = music.findIndex(musicas => musicas.id == idRequest)
    
    music.splice(indiceMusicas, 1)
    
    response.status(200).json([{
        "message": "musica deletada ;)",
        "deletado": idRequest,
        music
    }])

    }

    const updateTitle = (request, response) => {
 
            const idRequest = request.params.id

            let musicaNova = request.body.title
        
         musicas = music.find(musicas => musicas.id == idRequest)
        
         musicas.title = musicaNova
        
            response.status(200).json([{
        
                "mensagem": "sua musica foi atualizado",
                musicas
        
            }])
        
        }





module.exports = {
    getAllmusic,
    getBuscar,
    getartists,
    addmusic,
    updateId,
    deletemusic,
    updateTitle
}
