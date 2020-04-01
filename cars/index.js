const express = require('express');
const { getFilters } = require('../database/service/getOwnersAndFilters');

const router = express.Router();

router.get('/filters', async (req, res) => {
  try {
    const filters = await getFilters();

    return res.status(200).json({
      statusCode: 200,
      data: filters,
    });
  } catch (err) {
    return res.status(500).json({
      statusCode: 500,
      error: err.toString(),
    });
  }
});

router.get('/filter/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const filteredResult = global.cache.get(id);

    if (!filteredResult) {
      return res.status(404).json({
        statusCode: 404,
        error: `There is no filter of id ${id}.`,
      });
    }

    return res.status(200).json({
      statusCode: 200,
      data: global.cache.get(id),
    });
  } catch (err) {
    return res.status(500).json({
      statusCode: 500,
      error: err.toString(),
    });
  }
});

module.exports = router;
