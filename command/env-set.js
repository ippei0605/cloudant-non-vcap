/**
 * @file アプリの環境変数にサービス接続情報をセットする。
 *
 * <pre>
 * 前提条件
 * ・ibmcloud コマンドが使用できること
 * ・Bluemix CLI でログインしていること
 *
 * 処理概要
 * ・指定したキーからサービス資格情報を取得して文字列に変換する。
 * ・アプリの環境変数にサービス資格情報 (文字列) をセットする。
 * </pre>
 *
 * @author Ippei SUZUKI
 */

'use strict';

// モジュールを読み込む。
const exec = require('child_process').exec;

// パラメータチェックして、コマンドを実行する。
if (process.argv.length <= 4 || process.argv[2] === '-h' || process.argv[2] === '--help') {
  console.log(`USAGE:\n   node env-set APP_NAME KEY_NAME ENV_VAR_NAME`);
} else {
  getCredentials(v => {
    setEnv(v);
  });
}

function getCredentials (callback) {
  const command = `ibmcloud resource service-key ${process.argv[3]} --output JSON`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log('error:', error);
    } else {
      try {
        const v = JSON.stringify(JSON.parse(stdout)[0].credentials);
        if (typeof callback == 'function') callback(v);
      } catch (e) {
        console.log('error:', e);
      }
    }
  });
}

function setEnv (v) {
  const command = `ibmcloud app env-set ${process.argv[2]} ${process.argv[4]} '${v}'`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log('error:', error);
    } else {
      console.log(stdout);
    }
  });
}