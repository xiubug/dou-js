/**
 * 裁剪数组array，从 start 位置开始到 end 结束，但不包括 end 本身的位置。
 *
 * **Note:** 这个方法用于代替 Array#slice 来确保数组正确返回。
 *
 * @since 0.1.2
 * @category Array
 * @param {Array} array 要裁剪数组。
 * @param {number} [start=0] 开始位置。
 * @param {number} [end=array.length] 结束位置。
 * @returns {Array} 返回 数组array 裁剪部分的新数组。
 * @example
 *
 * var array = [1, 2, 3, 4]
 *
 * slice(array, 2)
 * // => [3, 4]
 */
const slice = (array: any[], start: number = 0, end?: number): any[] => {
  let length = array === null ? 0 : array.length;
  if (!length) {
    return [];
  }
  start = start === null ? 0 : start;
  end = end === undefined ? length : end;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  let index = -1;
  const result = new Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
};

export default slice;