const productService = require('../entities_service/Product');
const express = require('express');
var router = express.Router();
var DbClient = require('../dbManager');
const fs = require("fs");
const appSettings = JSON.parse(fs.readFileSync("./Src-back/appSettings.json"));

//database const
const dbUri = appSettings.database.mongo_uri;
const dbName = appSettings.database.product_database_name;
const product_collection_name = appSettings.database.product_collection_name;
const category_collection_name = appSettings.database.category_collection_name;


//customer web const
const default_page = appSettings.customer.default_page_display;
const default_limit = appSettings.customer.default_page_display_limit;
const default_sort = appSettings.customer.default_sort_product;
const default_ascending = appSettings.customer.default_ascending;


router.get('/',function(req,res){
    let page = (req.query.page!=undefined && req.query.page!=0)?req.query.page:1;
    let limit = (req.query.page!=undefined && req.query.page!=0)?req.query.page:appSettings.customer.page_display_limit;

    let startValue;
    let endValue;

    if(page>0)
    {
        startValue = (page*limit)-limit;
        endValue = page*limit;
    }
    else
    {
        startValue = 0;
        endValue = limit;
    }

    var client = new DbClient();

})