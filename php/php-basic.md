# PHPの基本

## 変数

値を入れておくための入れ物。
値同士を演算するために使用する。

### 命名規則
- $で始まる文字列出ないといけない
- 英字、数字、アンダースコアのみが使用できる
- 変数の始まりは数字以外でないといけない
- 大文字小文字は区別される

## ヒアドキュメント
改行を含む長い文字列を変数に代入する場合に使用する。
<<<とIDから始まって、ID;で終わるもの。

```php
$var = <<<EOT
長い文字列
長い文字列
長い文字列
EOT;
```

IDには伝統的にEOTやEODなど大文字が使われる。
ヒアドキュメントの終わりにはID文字列とセミコロン以外は含めない。

### 定義済み変数

予めphp内部で定義されている変数が存在する。

##### $_SERVER

Webサーバの情報が主に格納されている配列

##### $_GET

GETメソッドで送信されてきた内容が格納されている配列

##### $_POST
POSTメソッドで送信されてきた内容が格納されている配列

##### $_FILES
ファイルアップロード時に送信されてきた内容が格納されている配列

##### $_REQUEST
GET, POST, cookie情報など全てのリクエスト情報が格納されている配列


### 配列
複数の値を持つことが出来る変数を配列と言う

#### 通常の配列
添字に数字を使用した配列のこと

```php
$var = array('apple', 'banana', 'orange');
```

#### 連想配列
添字に文字列を使用したもの

```php
$var = array('red' => 'apple', 'yellow' => 'banana', 'orange' => 'orange');
```

## 多次元配列
配列の値を配列にすることも出来る。
但し非常に見難くなるのでカンマの数などには気をつける

```php
$var = array('red' => array('apple', 'cherry'), 'yellow' => array('banana', 'mango'), 'orange');
```

## データベース接続
### MySQL
#### インストール

```bash
$ sudo yum install -y mysql-server
```

#### 起動設定
```bash
$ sudo chkconfig mysqld on
```

#### 起動
```bash
$ sudo service mysqld start
```

#### ログイン
```bash
$ mysql -u root
mysql>
```

#### データベースの作成
```bash
mysql> create database blog character set 'utf8';
```

#### データベースの選択
```bash
mysql> use blog
```

#### テーブルの作成
```bash
mysql> create table posts (id int primary key auto_increment, title text not null, contents text not null, created datetime not null, updated datetime not null);
```

#### テーブルへのレコードの追加
```bash
mysql> insert into posts (title, contents, created, updated) values ('タイトル', 'メッセージ', current_timestamp, current_timestamp);
```

#### テーブルのレコードの検索
```bash
mysql> select * from posts where id = 1;
```

#### テーブルのレコードの変更
```bash
mysql> update posts set title = '変更後タイトル' where id = 1;
```

#### レコードの削除
```bash
mysql> delete from posts where id = 1;
```

### PHPからのアクセス
#### ライブラリインストール

```bash
$ sudo yum install -y php-mysql
```

#### DBアクセス

<?php
try{
  $db = new PDO('mysql:host=localhost;dbname=blog', 'root', '');
  $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $insert_sql = "insert into posts (title, contents, created, updated) values
    (?, ?, current_timestamp, current_timestamp)";
  $stmt = $db->prepare($insert_sql);
  $success = $stmt->execute(array("タイトル", "内容"));

  if (!$success) {
    print($stmt->errorInfo());
    print('データ追加に失敗');
  }

  $select_sql = "select * from posts";
  $stmt = $db->query($select_sql);
  foreach($stmt as $row){
    print_r($row);
  }
  } catch (PDOException $e) {
    print_r($e);
  }

?>