const express = require('express');
const router = express.Router();

// Sample data store for bundles
let bundles = [];

// GET endpoint to retrieve all bundles
router.get('/', (req, res) => {
    res.json(bundles);
});

// POST endpoint to create a new bundle
router.post('/', (req, res) => {
    const newBundle = req.body;
    bundles.push(newBundle);
    res.status(201).json(newBundle);
});

module.exports = router;