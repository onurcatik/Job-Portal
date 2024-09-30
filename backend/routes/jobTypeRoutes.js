const express = require('express');
const router = express.Router();
const { createJobType, allJobsType, updateJobType, deleteJobType } = require('../controllers/jobsTypeController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');



//job type routes

// /api/type/create
router.post('/type/create', isAuthenticated, createJobType)
// /api/type/jobs
router.get('/type/jobs', allJobsType)

// api/type/update/type_id
router.put('/type/update/:type_id', updateJobType, isAuthenticated, isAdmin)

router.delete('/type/delete/:type_id', isAuthenticated, isAdmin, deleteJobType)




module.exports = router;