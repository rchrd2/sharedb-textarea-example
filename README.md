# Examples for sharedb
## Simple sharedb client

```shell
npm install -g browserify
npm install
browserify client.js -o static/bundle.js
```

Run the server `node server.js` and go to `http://localhost:8080/index.html`

## Simple sharedb client with jsoneditor

```shell
npm install -g browserify
npm install
browserify node_modules/sharedb/lib/client/index.js --standalone sharedb > static/sharedb.js
```
Run the server `node server.js` and open multiple browsers/tabs that point to
`http://localhost:8080/jsoneditor.html`

Sources:
* sharedb example https://github.com/geakstr/sharedb/tree/master/examples/websockets
* sharejs example https://github.com/share/ShareJS/blob/master/examples/public/list.html
* ottypes https://github.com/ottypes/json0
* browserify http://browserify.org/


## Credits

Originally forked from https://github.com/lubaochuan/sharedb_examples
