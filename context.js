/**
 * Cloudant Non-Vcapservices: コンテキスト
 * @module context
 * @author Ippei SUZUKI
 */

'use strict';

module.exports = {
  cloudantCreds: JSON.parse(process.env[process.env.npm_package_config_cloudant_creds]),
  dbName: process.env.npm_package_config_db_name,
  docName: process.env.npm_package_config_doc_name
};
