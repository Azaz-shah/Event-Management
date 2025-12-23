const express = require('express');

const { createHost, getHostDetails, getHostDetailById, updateHostDetail, deleteHostDetail, toggleHostStatus } = require('../Controllers/AddHostDetail.controller');

const router = express.Router();

router.post('/create-host-detail', createHost);
router.get('/get-host-details', getHostDetails);
router.get('/get-host-detail/:id', getHostDetailById);
router.put('/update-host-detail/:id', updateHostDetail);
router.delete('/delete-host-detail/:id', deleteHostDetail);
router.put('/toggle-host-detail-status/:id', toggleHostStatus);

module.exports = router;