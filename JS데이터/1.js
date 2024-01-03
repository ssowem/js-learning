// 가져오기, 내보내기
// js파일에서는 import , export 키워드를 사용하여 가져오기,내보기가 가능하다
import _ from 'lodash' // From `node_modules`!
import checkType from '../getType' //getType.js
// import { random, user as SOYEON } from '../getRandom' // getRandom.js
import * as R from '../getRandom'

console.log(_.camelCase('the hello world'));
console.log(checkType([1, 2, 3]));
// console.log(random(), random());
console.log(R)
