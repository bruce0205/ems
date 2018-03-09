### Install
```
$ bower install
$ npm install
```

### Start app
```
npm start
DEBUG=ems:* npm start
```


## reverse engineering
```
npm install -g sequelize-auto mysql
sequelize-auto -o "./models" -d fontripdb -h localhost -u root -p 3306 -x 53434976 -e mysql
```


## other
sequelize-cli