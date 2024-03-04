/**
 * @Author: Hgh
 * @Date: 2024-03-04 14:07:23
 * @LastEditTime: 2024-03-04 14:07:23
 * @LastEditors: Hgh
 * @Description:
 */

const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
}
