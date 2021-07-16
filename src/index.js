/**
 * const, let等の変数宣言
 */

// var vall = "var変数";
// console.log(vall);

// // var変数は上書き可能
// vall = "var変数の上書き";
// console.log(vall);

// // var変数は再宣言可能
// var vall = "var変数を再宣言"
// console.log(vall);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可能
// val3 = "const変数を上書き"

// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "まゆけん",
//   age: 30
// };
// val4.name = "mayuken";
// val4.addres = "kanagawa";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 28;
// // 「私の名前はじゃけぇです。年齢は28歳です。」

// //　従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// // console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}だす。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str){
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "サトケン",
//   age: 30
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}だよ。年齢は${age}歳だよ。`;
// console.log(message2);

// const myProfile = ["サトケン", 30];

// const message3 = `名前は${myProfile[0]}だよ。年齢は${myProfile[1]}歳だよ！`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `私の名前は&{name}だすん。年齢は${age}歳だすん！`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "名無し") => console.log(`こんにちは！${name}くん！！`);
// sayHello("サトケン");

/**
 * スプレット構文 ...
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2)
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1)

// 纏める
// const arr2 =[1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["佐藤", "山田", "鈴木"];

// // for文を用いた従来の配列処理
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]); // 佐藤　山田　鈴木
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2); // ["佐藤", "山田", "鈴木"]

// nameArr.map((name) => console.log(name)); // 佐藤　山田　鈴木

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1; // 条件に当てはまるものだけreturnされる仕組み
// });
// console.log(newNumArr); // [1, 3, 5]

// // for文を用いた従来の配列処理
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`); // 1番目は佐藤です 2番目は山田です 3番目は鈴木です
// }

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です！`)) // 1番目は佐藤です！ 2番目は山田です！  3番目は鈴木です！

// const newNameArr = nameArr.map((name) => {
//   if (name === "佐藤") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// 　console.log(newNameArr); // ["佐藤", "山田さん", "鈴木さん"]

/**
 * 三項演算子
 */
// // ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1); // trueです

// const num = '1300';

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください。'
// console.log(formattedNum); // 数値を入力してください。

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています!!" : "許容範囲内です";
// };
// console.log(checkSum(50, 40)); // 許容範囲内です
// console.log(checkSum(50, 60)); // 100を超えています!!

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります")
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります")
// }

// || は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
