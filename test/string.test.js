/* eslint-env jest */
const expect = require('expect.js');

// 测试 ts 编译后文件
const base = require('../src/index.ts');

describe('测试 String 工具类', function () {

    // 将“字符串”分割成单词的数组
    describe('测试 words 方法', function () {
      // words('fred, barney, & pebbles') => ['fred', 'barney', 'pebbles']
      it('返回长度为3的数组', function () {
        let actual = base.words('fred, barney, & pebbles');
        expect(actual).to.be.an('array');
        expect(actual).to.have.length(3);
        expect(actual).to.contain('pebbles');
      });

      it('返回长度为4的数组', function () {
        let actual = base.words('fred, barney, & pebbles', /[^, ]+/g);
        expect(actual).to.be.an('array');
        expect(actual).to.have.length(4);
        expect(actual).to.contain('&');
      });
    });
});
