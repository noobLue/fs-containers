const express = require('express');
const router = express.Router();


const redis = require('../redis')

async function getRedisTodos()
{
  return Number(await redis.get('added_todos')) || 0
}

router.get('/statistics', async (req, res) => {
  res.json({ added_todos: await getRedisTodos()})
})


const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

module.exports = router;
