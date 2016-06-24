#### 要素の作成
```javascript
	var e = document.createElement('div');
```

#### 属性の付与
```javascript
	var e = document.createElement('div');
	e.setAttribute("id", "div1");
```

#### 要素の追加
```javascript
	var e = document.createElement('div');
	e.setAttribute("id", "div1");
	document.body.appendChild(e);
```

#### 要素の削除
```javascript
	var e = document.getElementById("div1");
	document.body.removeChild(e);
	document.body
```

#### 子要素の取得
```javascript
	var e = document.getElementById("div1");
	var children = e.children
	// 最初の子要素
	var firstChild = e.firstChild
	// 最後の子要素
	var lastChild = e.lastChild
```

#### 親要素の取得
```javascript
	var e = document.getElementById("div1");
	var parent = e.parentNode
```