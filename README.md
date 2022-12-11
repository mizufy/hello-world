# express-yarn-tsc

##  expressを導入
```shell
yarn init -y
yarn add typescript
yarn add ts-node
yarn add express
yarn run tsc --init
yarn install
```

##  デバッグ
```shell
yarn start
```

##  Dockerで動かす
```shell
docker build .
docker iamges
docker tag イメージID タグ名:バージョン
docker run -p 8080:8080 タグ名:バージョン
docker ps -a
docker rm -f コンテナID
docker images
docker rmi イメージID
```