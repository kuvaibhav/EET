var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('./json-server/db.json');
var middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.rewriter({
    "/tab4/fetchCities" : "/cities",
    "/tab4/savePersonalInfo" : "/savePersonalInfo",
}));

server.use(router);

server.listen(9002, function () {
    console.log('JSON Server is running on port # 9002');
});
