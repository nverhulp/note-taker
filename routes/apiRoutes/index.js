const router = require('express').Router();
const notesRoutes = require('./noteRoutes')

router.use(noteRoutes);

module.exports = router;