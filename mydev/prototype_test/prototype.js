/*prototype
-------------------------*/
function Yuusha(n) {
  this.name = n;
}//constructor プロパティは基本的にコンストラクタ内で宣言、thisはインスタンスを指す。

Yuusha.prototype.jikoshokai = function() {
  console.log("I'm " + this.name + ".");
};//prototype メソッドは基本的にプロトタイプで宣言

var yuusha1 = new Yuusha('勇者1');
yuusha1.jikoshokai();

/*継承
-------------------------*/
function Teki() {
  this.hp = 100;
}
function Dragon() {
  Teki.apply(this, arguments);//
}
Dragon.prototype = new Teki();
Dragon.prototype.attack = function() {
  console.log('ドラゴンの攻撃!!' + "hpは"+ this.hp + "だ。");
}
var boss = new Dragon();
boss.attack();
