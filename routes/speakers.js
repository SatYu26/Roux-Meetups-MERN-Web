const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => res.send('Speakers List'));

  router.get('/:shortname', (req, res) => res.send(`Detail Page of ${req.params.shortname}`));

  return router;
};
