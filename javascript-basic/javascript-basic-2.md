### 配列

配列は、複数個の値を保持出来る変数です。
通常変数は、一つにつき一つの値のみしか持つことが出来ませんが、配列にすると一つの変数で複数の値を持つ事ができます。
配列にはその値の位置を特定する数字の「添字」と、その添字に対応する値を持ちます。
配列を作成する際は、Arrayクラスをnewすることで作成できますが、初めから使用する値が決まっている場合は初期化子を使用して書くことも出来ます。

```javascript

var gender = new Array();
gender[0] = "Male";
gender[1] = "Female";
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; // これでも作成できる

```

取り出すときは、その添字を指定して取り出します。

```javascript
var january = months[0];
```

### ループ処理
ループ処理は、一定回数または既定の条件を満たすまで、処理を繰り返したい場合に使用します。

####for
ある一定の回数までのループ処理を行いたい時にはfor文を使用するのが良いでしょう。
for文は下記のような書式で記載します。

```javascript
for (変数 = 初期値; 終了条件; 繰り返し時の処理) {
	処理
}

// 処理例
for ( var i =0; i< 10; i++) {
	//
}
```

変数名は伝統的にi, j, kを使用する事が多いですが、これにしなければ行けないということではありません。

また、既定の繰り返し数を待たずに処理を抜けたい場合はbreak文を使ってfor文のループを抜ける事が出来ます。

```javascript
for (var i=0; i<10; i++) {
	if (i == 5) {
		break;
	}
}
```

さらに、ループ内でこのループの時には処理をせずループを続けたい場合にはcontinue文を使用して次のループへ処理を飛ばすことが出来ます。

```javascript
for (var i=0; i<10; i++) {
	if (i == 5) {
		continue;
	}
}
```
#### while
while文もループの方法の一つですが、for文が主に決まったループ回数のループをするのに対して、while文は回数ではなく別の終了条件でループを制御したい時に使用します。

```javascript
while (繰り返しの条件) {
	処理
}
```

繰り返しの条件とは、その条件が真(true)である状態であればループを続行し、偽(false)になったらループを終了するものです。
例えば、数字を10ずつ足していって、その合計が100を超えたらループを抜ける、と言う処理があったとすると

```javascript
var total = 0;
while(total < 100) {
	total = total + 10;
}
```

となります。while文は条件に気をつけないと簡単に無限ループになるので条件は十分検討しましょう。

### JavaScriptコードの外部ファイル化
scriptタグ内に直接JavaScriptを書いてしまうと、JavaScriptとHTMLが一つのファイルになってしまうため、HTMLのデザインと
JavaScriptのコードを別の人でメンテナンスする際などにしばし競合が発生するなどの問題があります。
cssファイルも同様ですが、JavaScriptの部分だけを外部ファイルに切り出して作成するのが一般的です。

ファイル名はなんでも良いのですが、慣例的に拡張子は「.js」で、もし可能であればそのスクリプトの処理内容を表す単語が使用できたら良いでしょう。

HTMLから読み込む際は、下記のようにscriptタグのsrc属性の値にurlを記載します。

```html
<script type="text/javascript" src="script.js"></script>
```

もちろん、自サイトではない場所においてあるJavaScriptを読みこむ事もできます。
下記のはAngularJsを読み込んだところです。

```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
```

### ダイアログ
Webページの内容とは関係なくシステムネイティブの画面を出す事ができます。
このような画面のことを「ダイアログボックス」と言い、JavaScriptを使ってこのダイアログボックスを出す事が出来ます。

#### アラートダイアログ
単純なメッセージを表示する場合にはアラート画面を使用します。

```javascript
alert("アラート表示");
```

#### 確認ダイアログ

