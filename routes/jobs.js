const express = require('express')
const router = express.Router()

const { getAllJobs, getJob, createJobs, updateJob, deleteJob } = require('../controllers/jobs')

router.route('/').post(createJobs).get(getAllJobs)
router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob)

module.exports = router
