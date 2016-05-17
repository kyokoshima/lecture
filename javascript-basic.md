### 何故JavaScriptが必要なのか
* HTML/cssで作成されたページの要素を動かすため

### JavaScriptの記入場所
* &lt;script&gt;&lt;/script&gt;で囲った中に記述。

インラインで記述する、とよく言います
```html
<body>
	...
	<script type="text/javascript">
		...
	</script>
</body>
```
* 別ファイルに定義しておき、それをscriptタグで読み込ませる。

```html
<html>
	<head>
		<script type="text/javascript" src="script.js" />
	</head>
</html>
```
* 記載場所は、なるべくbodyタグの終わり付近が良いとされている。


JavaScriptはDOMの操作をする事が殆どだが、
head要素内などの先頭付近に書いてしまうとDOMの読み込みが終わらないうちにJavaScriptの処理が起動してしまい、
DOM要素の読み込み完了のタイミングを待つ処理を記載する手間が掛かるため。

### documentオブジェクト

documentオブジェクトは通常、DOM(HTML文書)自体を指します。
従って、全てのDOM要素はdocumentの子要素になります。

### idとクラス

idはドキュメント内で一つ、classはドキュメント内に複数存在すると言う前提でがあります。
もしそうでない場合は、HTMLを修正して上記ルールに則るようにしましょう。

```html
※ ダメなID指定の例
<p id="paragraph">段落１</p>
<p id="paragraph">段落２</p> ← 同じIDが複数定義されているので間違い
※ classならOK
<p class="paragraph">段落１</p>
<p class="paragraph">段落２</p> ← 同じclass指定は問題なし
```

* idを指定して要素を取得する場合
```javascript
	var paragraph = document.getElementById("p1");
```

* classを指定して要素を取得する場合
```javascript
	var paragraphs = document.getElementsByClassName("paragraph");
```
### ボタンクリック時の処理の記述
JavaScriptの関数を定義し、要素のonclick属性、あるいはaタグのhref属性にその関数を記載する

* ボタンクリックの場合

```html
<p id="p1">段落1</p>
<p id="p2">段落2</p>
<button id="btn" onclick="changeParagraph()">変更</button>
<script>
function changeParagraph() {
	document.getElementById("p1").innerHTML = "変更後文字列1";
	document.getElementById("p2").innerHTML = "変更後文字列2";
}
</script>
```
* aタグの場合

```html
<p id="p1">段落1</p>
<p id="p2">段落2</p>
<a id="btn" href="changeParagraph()">変更</a>
<script>
function changeParagraph() {
	document.getElementById("p1").innerHTML = "変更後文字列1";
	document.getElementById("p2").innerHTML = "変更後文字列2";
}
</script>
```
### 関数の定義
JavaScriptで実行する一定のまとまりを「関数」と言います。
数学の関数と言うよりは、処理を実行する単位だと考えた方がわかりやすいかと思います。
関数は、下記のように定義します。

```javascript
function 関数名(引数名, ...) {
	処理
}
```
### 変数
変数と言うのは、関数内で扱う為の入れ物のことです。
関数内で変数を定義し、値を代入して操作します。

```javascript
function sample() {
	var variable = "変数"; // ←これが変数
	var element = document.getElementById("p1"); // ←これも変数
	variable = "変数変換"; // 変数を書き換え
	element.innerHTML = "段落変更"; // 変数の属性を書き換え
}
```
#### 演習A
p要素をHTML内にひとつ作成して、idとclassを付与します。
また、button要素も同様に作成し、idを付与します。
さらにJavaScriptの関数を作成して、ボタンをクリックしたらp要素内の文字列を変更する処理を作成しましょう。
p要素内の文字列を変更するには、innerHTML属性に変更したい文字列を代入します。
関数が作成出来たなら、p要素のonclick属性でその関数を実行するようにします。

```html
<p id="p1" class="paragraph">変更前文字列</p>
<button id="btn" onclick="changeParagraph()">変更</button>
<script>
	function changeParagraph(){
		var p1 = document.getElementById("p1");
		p1.innerHTML = "へんこうごへんこうご";
	}
</script>
```

### 引数を受け取る
引数とは、関数に渡す値のことです。
関数にどんな引数をいくつ渡すのかを定義しておけば、関数に引数を渡す事ができます。

```javascript
function sample(name, age) { // ←　name, ageの２つの引数が設定されている
	var textName = document.getElementById("name");
	var textAge = document.getElementById("age");
	textName.value = name;
	textAge.value = age;
}
```
#### 演習B
演習Aと同様にp要素、button要素、JavaScriptの関数を定義しますが、
関数に引数を定義し、呼び出し元（onclick属性の値）から変更する文字列を渡せるようにしましょう。

```html
<p id="p1" class="paragraph" >変更前文字列</p>
<button id="btn" onclick="changeParagraph('変更前')">変更</button>
<script>
	function changeParagraph(str){
		var p1 = document.getElementById("p1");
		p1.innerHTML = str;
	}
</script>
```

### イベントリスナ
DOM要素にイベントリスナと言うものを設定しておくと、登録したイベントが発生した時に処理を実行させる事が出来る。

```javascript
	var btn = document.getElementById("btn");
	btn.addEventListener("click", function(){
		...
	});
```

要素のonclick属性に処理を記載してしまうと、JavaScriptの処理とHTMLの記載を切り離しにくくなり、
メンテナンスしやすいとは言えなくなってしまうため、現在はイベントリスナに登録する方法が普通。

#### 演習C
演習Bと同様ですが、onclick属性から呼び出すのではなく、イベントリスナに登録して実行するように演習Bの処理を変更してみましょう。

```html
	<p id="p1" class="paragraph">変更前文字列</p>
	<button id="btn">変更</button>

	<script type="text/javascript">
		var btn = document.getElementById("btn");
		btn.addEventListener("click", function(){
			var p1 = document.getElementById("p1");
			p1.innerHTML = "変更したい文字列";
		});
	</script>
```

### ダイアログ表示

JavaScriptから確認ダイアログボックスを表示させることが出来ます。

```javascript
	alert("Hello JavaScript!");
```

### 条件文(if)

ある条件に従って処理を分岐させる事が出来ます。

```javascript
var value = document.getElementById("text").value;
	if (value == 1) {
		alert("1です！");
	} else {
		alert("1ではないです！");
	}
```

### 条件文(switch)

if文と同様にswitch文も条件分岐に使用できます。
switch文は条件がif文よりも多くなってきた際に採用すると良いでしょう。

```javascript
var value = document.getElementById("text").value;
	switch (value) {
		case 0:
			alert("0です！");
			break;
		case 1:
			alert("1です！");
			break;
		case 2:
			alert("2です！");
			break;
		default:
			alert("0-2以外です！");
			break;
	}
```

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

 取り出すときは、その添字を指定して取り出す。
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
####while

####演習D
計算機を作ろう！




### オブジェクト
### データ型


