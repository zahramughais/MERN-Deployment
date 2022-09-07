const { Pet } = require('../models/pet.model');

module.exports.index = (req,res) => {
    Pet.find({}).sort({type: 'asc'})
    .then(allPets => res.json(allPets))
    .catch(err => res.json(err));
}

module.exports.createPet = (req, res) => {
    const { name, type, description, skills} = req.body;
    Pet.create({name, type, description, skills})
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err));
}

module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true })
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.status(400).json(err));
}

module.exports.adoptPet = (req,res) => {
    Pet.deleteOne({ _id: req.params.id })
    .then(result => res.json(result))
    .catch(err => res.json(err));
}

module.exports.findOnePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then(pet => res.json(pet))
        .catch(err => res.json(err));
}