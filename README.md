# cloudant-non-vcap

これは、非 manifest.yml、非 VCAP_SERVICES の研究です。

1. ログインします。 (エンドポイントはダラスを指定)
    ```
    $ npm run login
    ```

1. Cloudant サービスインスタンスを作成します。
    ```
    $ npm run service-create
    ```

1. Cloudant サービスインスタンスにサービスキーを作成します。
    ```
    $ npm run service--key-create
    ```

1. Cloudant サービスインスタンスにアクセスするためのサービスキーを作成します。
    ```
    $ npm run service--key-create
    ```

1. アプリをプッシュします。(初回のため、メモリ、ディスクをパラメータでセット、Cloudant接続はこの時点でできないので no-start モード)
    ```
    $ npm run push-no-start
    ```

1. アプリの環境変数にサービス資格情報をセットします。
    ```
    npm run env-set-cloudant
    ```

1. 普通にプッシュします。postinstall で Cloudant にデータベースが作成されます。
    ```
    $ npm run push
    ```

1. ページにアクセスします。
    ```
    $ npm run page
    ```


