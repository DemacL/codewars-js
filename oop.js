/** 
function Animal() {
    this.species = "动物";
}

function Cat(name, color) {
    this.name = name;
    this.color = color;
}
*/

//-----------------------------------------------------------------------------------
/** 一、 构造函数绑定
 *  第一种方法也是最简单的方法，使用call或apply方法，将父对象的构造函数绑定在子对象上，即在子对象构造函数中加一行
 * 父类的属性直接挂载到子类上了
 */

// function Animal() {
//     // console.log('Animal', arguments);
//     this.species = "动物";
// }

// function Cat(name, color) {
//     // console.log(arguments);
//     Animal.apply(this, arguments); // 把构造函数的参数全部传给父类
//     this.name = name;
//     this.color = color;
// }
// let cat1 = new Cat('hello Kate', 'pink');
// console.table(cat1);
// let cat2 = new Cat('hello Kate2', 'gray');
// console.table(cat2); 
//-----------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------
/** 二、 prototype模式
 * 如果"子类"构造函数的prototype对象，指向一个"父类"的实例，那么所有"子类"的实例，就能继承"父类"了。
*/
// function Animal() {
//     this.species = "动物";
// }

// function Cat(name, color) {
//     this.name = name;
//     this.color = color;
// }
// Cat.prototype = new Animal(); // 1 修改prototype引用 相当于完全删除了prototype 对象原先的值，然后赋予一个新值。

// console.log('Cat.prototype.constructor:', Cat.prototype.constructor);
// Cat.prototype.constructor = Cat; // 2 校正构造函数的指向 每一个实例也有一个constructor属性，默认调用prototype对象的constructor属性。
// console.log('Cat.prototype.constructor:', Cat.prototype.constructor);
// let cat1 = new Cat('hello Kate', 'pink');
// console.table(cat1);
// console.log(cat1.species);
// let cat2 = new Cat('hello Kate2', 'gray');
// console.table(cat2);
// console.log(cat1.species);
// console.log('cat1.constructor', cat1.constructor);
// console.log('cat1 is Cat', cat1 instanceof Cat);
// console.log('cat1 is Animal', cat1 instanceof Animal);
// console.log('cat1.constructor === Cat:', cat1.constructor === Cat);
// console.log('cat1.constructor === Animal:', cat1.constructor === Animal);
//-----------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------
/** 三、 直接继承prototype
 *  优点是效率比较高 不用执行和建立"父类"的实例了 比较省内存
 *  缺点是 存在问题 子类构造函数.prototype和父类构造函数.prototype现在指向了同一个对象，那么任何对子类构造函数.prototype的修改，都会反映到父类构造函数.prototype
*/
function Animal() {
}
Animal.prototype.species = "动物";

function Cat(name, color) {
    this.name = name;
    this.color = color;
}
Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;

let cat = new Cat('hello Kate', 'pink');
console.table(cat);
console.log(cat.species);
console.log('cat.constructor', cat.constructor);
console.log('Animal.prototype.constructor', Animal.prototype.constructor);
Cat.prototype.sound = 'miao';
console.log('Animal.prototype.sound', Animal.prototype.sound);// 任何对子类构造函数.prototype的修改，都会反映到父类构造函数.prototype
//-----------------------------------------------------------------------------------