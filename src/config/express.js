"use strict";
const express = require("express");
const bodyParser = require('body-parser');
const slow = require('connect-slow');
const app = express();
app.use(bodyParser.json());
app.use(slow({
    url: /query/i,
    delay: 300
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Authorization, Access-Control-Request-Method, Access-Control-Request-Headers,x-xsrf-token");
    next();
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = app;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb25maWcvZXhwcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFFbkMsTUFBWSxVQUFVLFdBQU0sYUFBYSxDQUFDLENBQUE7QUFDMUMsTUFBWSxJQUFJLFdBQU0sY0FBYyxDQUFDLENBQUE7QUFFckMsTUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFFdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUUzQixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztJQUNaLEdBQUcsRUFBRSxRQUFRO0lBQ2IsS0FBSyxFQUFFLEdBQUc7Q0FDVixDQUFDLENBQUMsQ0FBQTtBQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFRLEVBQUUsR0FBUSxFQUFFLElBQVM7SUFDOUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlELEdBQUcsQ0FBQyxTQUFTLENBQUMsa0NBQWtDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUQsR0FBRyxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsRUFBRSxrQ0FBa0MsQ0FBQyxDQUFDO0lBQ2xGLEdBQUcsQ0FBQyxTQUFTLENBQUMsOEJBQThCLEVBQUUsd0tBQXdLLENBQUMsQ0FBQztJQUN4TixJQUFJLEVBQUUsQ0FBQztBQUNSLENBQUMsQ0FBQyxDQUFDO0FBRUg7a0JBQWUsR0FBRyxDQUFDIiwiZmlsZSI6ImNvbmZpZy9leHByZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
