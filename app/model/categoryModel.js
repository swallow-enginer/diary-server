const Sequelize = require('sequelize');
const DbConfig = require('../db/dbConfig');

/**
 * category テーブルの Entity モデル
 */
const categoryModel = DbConfig.define('category', {
  category_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull:false,
  }
}, {
  // テーブル名を変更したくない場合は次のプロパティを true
  // デフォルトでは sequelize はテーブル名を複数形に変更する
  freezeTableName: true,
  tableName: 'category'
});

categoryModel.sync();
module.exports = categoryModel;