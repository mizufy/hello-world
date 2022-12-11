#   環境構築

```shell
yarn init -y
yarn add typescript
yarn add ts-node
yarn add express
yarn run tsc --init
```

```
docker build .
docker tag イメージID タグ名:バージョン
docker run -p 8080:8080 
docker rm -f コンテナID
docker rmi イメージID
```