"use strict";
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const config = require(`./${env}`);
const defaults = {
    root: path.join(__dirname, '/..')
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Object.assign(defaults, config);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb25maWcvZW52L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFZLElBQUksV0FBTSxNQUFNLENBQUMsQ0FBQTtBQUU3QixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQUM7QUFDbEQsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQztBQUVuQyxNQUFNLFFBQVEsR0FBRztJQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7Q0FDbEMsQ0FBQztBQUVGO2tCQUFlLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDIiwiZmlsZSI6ImNvbmZpZy9lbnYvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
