const PetController = require('../controllers/pet.controller');

module.exports = function(app){
    app.get('/api', PetController.index)
    app.post('/api/pets/new', PetController.createPet)
    app.put('/api/pets/edit/:id', PetController.updatePet)
    app.delete('/api/pets/delete/:id', PetController.adoptPet)
    app.get('/api/pets/get/:id', PetController.findOnePet)
}
