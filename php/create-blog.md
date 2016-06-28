# ブログを作ろう！

## 準備
### 構成を考える

- インデックスページ  
ブログのリストページ

- 記事ページ  
1記事を表示するページ

- 新規作成用ページ  
記事を作成するページ

- 編集用ページ  
既にある記事を編集するページ

### PHPとWebサーバーとデータベースの準備
#### Apacheインストール

```bash
$ sudo yum install -y httpd
```

##### 起動・停止方法

* 起動

```bash
$ sudo service httpd start
```

* 停止

```bash
$ sudo service httpd stop
```

##### 自動起動の設定

```bash
$ sudo chkconfig httpd on
$ chkconfig httpd --list
```

##### 設定ファイル（httpd.conf）の場所

```bash
$ less /etc/httpd/conf/httpd.conf
```

##### DocumentRootの変更

```diff
- DocumentRoot /var/www/html
+ DocumentRoot /php
```

##### ファイルをキャッシュしない設定  
vagrant(VirtualBox)で、共有ディレクトリに指定してあるファイルはWebサーバーでキャッシュされてしまうことがあり、
変更してもすぐにWebサーバーで反映されないことがある。
下記設定でWebサーバー側でキャッシュしないようにする。

[EnableMMAP](https://httpd.apache.org/docs/2.2/ja/mod/core.html#enablemmap)  
[EnableSendfile](https://httpd.apache.org/docs/2.2/ja/mod/core.html#enablesendfile)

```apacheconf
<Directory>
	EnableMMAP Off
	EnableSendfile Off
</Directory>
```

#### PHPインストール

```bash
$ sudo yum install -y php
```

##### phpの設定ファイル

```bash
$ less /etc/php.ini
```

##### エラーを画面に表示する設定  
デフォルトではphpでのエラー内容を確認する為にはログを見る必要があるが、画面にエラー内容を表示する事が出来る

```bash
$ vim /etc/php.ini
```
```diff
- display_errors Off
+ display_errors On
```

#### MySQLのインストール

```bash
$ sudo yum install -y mysql-server
```

##### MySQL起動・停止

* 起動

```bash
$ sudo service mysqld start
```

* 停止

```bash
$ sudo service mysqld stop
```

##### 自動起動の設定

```bash
$ sudo chkconfig mysql on
$ chkconfig mysqld --list
```

##### ログイン方法

```bash
$ mysql -u [ユーザー名] [データベース名]
```

* rootユーザー（パスワードなし)でデータベースblogにログインする例

```bash
$ mysql -u root blog
```

##### データベースの確認
```sql
mysql> show databases;
```

##### テーブルの確認

```sql
mysql> show tables;
```

##### テーブルの作成

```sql
mysql> create table [テーブル名] 
([列名] [型] [制約] ...)
```

##### テーブルの検索
```sql
mysql> select * from [テーブル名] (where [条件])
```

##### レコードの作成
```sql
mysql> insert into [テーブル名] ([列名] ...) values ([値] ...)
```

##### レコードの編集
```sql
mysql> update [テーブル名] set [列名] = [値] (where [条件])
```

##### レコードの削除
```sql
mysql> delete from [テーブル名] (where [条件])
```