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

## migration
```
RESTORE DATABASE oeeAPP
FROM DISK = '/var/opt/mssql/data/oeeAPP_20210202'
WITH MOVE 'oeeAPP' TO '/var/opt/mssql/data/oeeAPP.mdf',
MOVE 'oeeAPP_Log' TO '/var/opt/mssql/data/oeeAPP.ldf';
```
