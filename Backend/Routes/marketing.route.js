const express = require('express');
const { createMarketingCampaign, getMarketingCampaigns, getMarketingCampaignById, updateMarketingCampaign, deleteMarketingCampaign } = require("../Controllers/marketing.controller");

const router = express.Router();

router.post('/create-marketing-campaign', createMarketingCampaign);
router.get('/get-marketing-campaigns', getMarketingCampaigns);
router.get('/get-marketing-campaign/:id', getMarketingCampaignById);
router.put('/update-marketing-campaign/:id', updateMarketingCampaign);
router.delete('/delete-marketing-campaign/:id', deleteMarketingCampaign);

module.exports = router;