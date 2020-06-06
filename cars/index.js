const express = require('express');

const router = express.Router();

router.get('/filters', async (req, res) => {
  try {
    const filters = global.cache.get('filters');

    if (!filters) {
      return res.status(404).json({
        statusCode: 404,
        error: 'There are no filters at the moment. Please add some!',
      });
    }

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
      data: filteredResult,
    });
  } catch (err) {
    return res.status(500).json({
      statusCode: 500,
      error: err.toString(),
    });
  }
});

module.exports = router;
