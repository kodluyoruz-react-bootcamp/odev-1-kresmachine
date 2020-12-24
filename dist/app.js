"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _service = require('./lib/service'); var _service2 = _interopRequireDefault(_service);

async function main() {
    const result = await _service2.default.call(void 0, 1)
    console.log(result)
}

main()