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
