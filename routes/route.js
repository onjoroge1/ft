const express = require("express");
const routers = express.Router();
const {textToEmoji , questionAnswer , grammerCorrection , languageConversion , summerizeContent, keywordExtracter}  = require('../controller/AiToolsController')


routers.post("/movieEmoji", textToEmoji);
routers.post('/questionAnswer' , questionAnswer)
routers.post('/grammerCorrection' , grammerCorrection)
routers.post('/languageConvertion' , languageConversion)
routers.post('/summarizeContent' , summerizeContent )
routers.post('/keywordsExtract' , keywordExtracter)

module.exports = routers;
