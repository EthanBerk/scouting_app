// routes/api/teams.js

const express = require('express');
const router = express.Router();
const app = express();

// Load Team model
const Team = require('../../models/Team');




// @route GET api/teams/test
// @description tests teams route
// @access Public
app.get('/test', (req, res) => res.send('team route testing!'));

// @route GET api/teams
// @description Get all teams
// @access Public
router.get('/', (req, res) => {
    Team.find()

        .then(books => res.json(books))
        .catch(err => res.status(404).json({ noteamsfound: 'No Teams found' }));
});

// @route GET api/teams/:id
// @description Get single team by id
// @access Public
router.get('/:id', (req, res) => {
    Team.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({ nobookfound: 'No Team found' }));
});

// @route GET api/teams
// @description add/save team
// @access Public
router.post('/', (req, res) => {
    Team.create(req.body)
        .then(book => res.json({ msg: 'Team added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this team' }));
});

// @route GET api/teams/:id
// @description Update team
// @access Public
router.put('/:id', (req, res) => {
    Team.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route GET api/teams/:id
// @description Delete team by id
// @access Public
router.delete('/:id', (req, res) => {
    Team.findByIdAndRemove(req.params.id, req.body)
        .then(book => res.json({ mgs: 'Team entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such a team' }));
});

module.exports = router;