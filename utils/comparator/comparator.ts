/**
 * Class representing a comparator
 * @template {T} - The type of value to be compared
 */
class Comparator<T> {
  compare: (a: T, b: T) => number;
  /**
   * Creates a comparator instance
   * @param {function(T, T):number} compareFunction - Optional custom comparator function
   */
  constructor(compareFunction: (a: T, b: T) => number) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  /**
   * The default comparison function
   * @param {T} a - The first value to be compared
   * @param {T} b - The second value to be compared
   * @returns {number} - A positive number if a > b, negative number if a < b, or 0 if equal
   */
  static defaultCompareFunction<T>(a: T, b: T): number {
    if (a === b) {
      return 0;
    }
    return a > b ? 1 : -1;
  }

  /**
   * Checks if a and b are equal
   * @param {T} a - The first value to be compared
   * @param {T} b - The second value to be compared
   * @returns {boolean} - `true` if a = b, `false` otherwise
   */
  equal(a: T, b: T): boolean {
    return this.compare(a, b) === 0;
  }

  /**
   * Checks if a is less than b
   * @param {T} a - The first value to be compared
   * @param {T} b - The second value to be compared
   * @returns {boolean} - `true` if a < b, `false` otherwise
   */
  lessThan(a: T, b: T): boolean {
    return this.compare(a, b) < 0;
  }

  /**
   * Checks if a is greater than b
   * @param {T} a - The first value
   * @param {T} b - The second value
   * @returns {boolean} - `true` if a > b, `false` otherwise
   */
  greaterThan(a: T, b: T): boolean {
    return this.compare(a, b) > 0;
  }

  /**
   * Checks if a is less than or equal to b
   * @param {T} a - The first value
   * @param {T} b - The second value
   * @returns {boolean} - `true` if a <= b, `false` otherwise
   */
  lessThanOrEqual(a: T, b: T): boolean {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  /**
   * Checks if a is greater than or equal to b
   * @param {T} a - The first value
   * @param {T} b - The second value
   * @returns {boolean} - `true` if a >= b, `false` otherwise
   */
  greaterThanOrEqual(a: T, b: T): boolean {
    return this.greaterThan(a, b) || this.equal(a, b);
  }
}

export default Comparator;
