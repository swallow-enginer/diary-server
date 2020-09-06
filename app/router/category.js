const Express   = require('express');
const Db = require('../db/dbConfig');
const Router    = Express.Router();
const CategoryModel  = require('../model/categoryModel.js');

Router.get('/',function(req,res) {
    CategoryModel
        .findAll()
        .then(function(category) {
            res.json(category);
        }).catch(function(err) {
            res.send(err);
        });
});

Router.post('/',function(req,res) {
    getMaxCategoryId()
    .then(function(row) {
        return row.max_category_id
    })
    .then(function(value) {
        CategoryModel
        .create({
            category_id      : value,
            name             : req.query.name,
            user_id          : req.query.user_id })
        .then(function(category) {
            res.json(category);
        }).catch(function(err) {
            res.send(err);
        });
    }).catch(function(err) {
        res.send(err);
    })
});

Router.put('/',function(req,res) {
    CategoryModel
        .upsert({
            category_id : req.query.category_id,
            name        : req.query.name,
            user_id     : req.query.user_id,
        })
        .then(function(result) {
            res.json(result);
        }).catch(function(err) {
            res.send(err);
        })
});

Router.delete('/',function(req,res) {
    CategoryModel
    .destroy({
        where: {category_id:req.query.category_id}
    })
    .then(function() {
        res.json();
    }).catch(function(err) {
        res.send(err);
    })
});

function getMaxCategoryId() {
    return Db.query(`
        SELECT COALESCE(MAX(category_id),0) + 1 AS max_category_id
        FROM category`, {
            plain : true,
            raw   : true,
            type  : Db.QueryTypes.SELECT
        }
    );
    // .then(function (row) {
    //     return row.max_category_id;
    // }).catch(function(err) {
    //     res.send(err);
    // });
    // return result.max_category_id;
}
// export default router;
module.exports = Router;