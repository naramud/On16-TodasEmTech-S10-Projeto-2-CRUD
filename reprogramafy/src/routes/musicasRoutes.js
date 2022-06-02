const controller = require ('../controller/musicasController')

const express = require ('express')

const router = express.Router()

router.get("/musicas", controller.getAllmusic);
router.get("/musicas/buscar/:id", controller.getBuscar)
router.get("/musicas/artists", controller.getartists)
router.post("/musicas", controller.addmusic)
router.delete("musics/:id",controller.deletemusic)
router.put("/:id", controller.updateId)
router.patch("/atualizar/:id", controller.updateTitle)


module.exports = router