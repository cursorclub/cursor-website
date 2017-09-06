const express = require('express');
const Datastore = require('nedb-promise');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = express.Router()
router.use(cors())
router.use(bodyParser.json())

const events = new Datastore({ filename: 'data/events.db' });

router.get('/mutations/events', async (req, res, next) => {
  const updates = await events.find({ private: false, deleted: null, updated: { $gte: req.query.after }})
  const deletions = await events.find({ private: false, deleted: { $gte: req.query.after }}, { _id: 1 })
  deletions = deletions.map(deletion => deletion._id)
  const { updated } = await events.cfind({ private: false }, { updated: 1 }).sort({ updated: -1 }).limit(1).exec()
  res.send({ updates, deletions, updated })
})

router.get('/events', (req, res, next) => events.find({ private: false, deleted: null }).then(res.send).catch(next))
router.post('/events', (req, res, next) => events.add(req.body).then(res.send).catch(next))
router.get('/events/next', (req, res, next) => events.cfind({ private: false, deleted: null, endTime: { $gte: new Date().toISOString() }}).sort({ endTime: 1 }).limit(1).exec().then(res.send).catch(next))
