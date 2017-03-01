"use strict";
const express = require("express");
const bodyParser = require('body-parser');
const slow = require('connect-slow');
const app = express();
app.use(bodyParser.json());
app.use(slow({
    url: /query/i,
    delay: 150
}));
app.use(slow({
    url: /selected/i,
    delay: 350
}));
app.use(slow({
    url: /quote/i,
    delay: 2000
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb25maWcvZXhwcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFFbkMsTUFBWSxVQUFVLFdBQU0sYUFBYSxDQUFDLENBQUE7QUFDMUMsTUFBWSxJQUFJLFdBQU0sY0FBYyxDQUFDLENBQUE7QUFFckMsTUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFFdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUUzQixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztJQUNaLEdBQUcsRUFBRSxRQUFRO0lBQ2IsS0FBSyxFQUFFLEdBQUc7Q0FDVixDQUFDLENBQUMsQ0FBQTtBQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ1osR0FBRyxFQUFFLFdBQVc7SUFDaEIsS0FBSyxFQUFFLEdBQUc7Q0FDVixDQUFDLENBQUMsQ0FBQTtBQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ1osR0FBRyxFQUFFLFFBQVE7SUFDYixLQUFLLEVBQUUsSUFBSTtDQUNYLENBQUMsQ0FBQyxDQUFBO0FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQVEsRUFBRSxHQUFRLEVBQUUsSUFBUztJQUM5QyxHQUFHLENBQUMsTUFBTSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxrQ0FBa0MsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxRCxHQUFHLENBQUMsU0FBUyxDQUFDLDhCQUE4QixFQUFFLGtDQUFrQyxDQUFDLENBQUM7SUFDbEYsR0FBRyxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsRUFBRSx3S0FBd0ssQ0FBQyxDQUFDO0lBQ3hOLElBQUksRUFBRSxDQUFDO0FBQ1IsQ0FBQyxDQUFDLENBQUM7QUFFSDtrQkFBZSxHQUFHLENBQUMiLCJmaWxlIjoiY29uZmlnL2V4cHJlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
