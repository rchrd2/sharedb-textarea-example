# ShareDB with textarea example

Note, there are a lot of console.logs, which should be removed outside of development.

## Simple sharedb client

```shell
npm install -g browserify
npm install
browserify client.js -o static/bundle.js
```

Run the server `node server.js` and go to `http://localhost:8080/index.html`


Sources:
* sharedb example https://github.com/geakstr/sharedb/tree/master/examples/websockets
* ottypes https://github.com/ottypes/text
* sharedb json example https://github.com/lubaochuan/sharedb_examples
* sharejs textarea https://github.com/share/ShareJS/blob/master/lib/client/textarea.js
