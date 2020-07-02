/* eslint-env jest */
const expect = require('expect.js');

// 测试 ts 编译后文件
const base = require('../src/index.ts');

describe('测试 Array 工具类', function () {

    // 裁剪数组array，从 start 位置开始到 end 结束，但不包括 end 本身的位置。
    describe('测试 slice 方法', function () {
      // var array = [1, 2, 3, 4]; base.slice(array, 2) => [3, 4]
      it('返回长度为2的数组', function () {
        const array = [1, 2, 3, 4];
        let actual = base.slice(array, 2);
        expect(actual).to.be.an('array');
        expect(actual).to.have.length(2);
        expect(actual).to.contain(3);
      });
    });
});
