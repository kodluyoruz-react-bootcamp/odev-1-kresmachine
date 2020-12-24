"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);
var ENDPOINT = "https://jsonplaceholder.typicode.com"
 async function getData(id) {
    const { data: user } = await _axios2.default.get(`${ENDPOINT}/users/${id}`)
    const { data: posts } = await _axios2.default.get(`${ENDPOINT}/posts?userId=${id}`)
    return { ...user, posts }
} exports.default = getData;
