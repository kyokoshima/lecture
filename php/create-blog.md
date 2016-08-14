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

### 開発環境の準備
#### vagrantの仮想マシンの準備
CentOSを使用する為にboxをインポートする。

まずは、vagrantを起動する為の作業ディレクトリを決める。
vagrantを使用する場合は*常に*そこで作業する。

```bash
$ mkdir -p ~/Documents/vagrant
$ cd ~/Documents/vagrant
```
[公式提供](https://atlas.hashicorp.com/boxes/search)されているboxの場合は下記のように初期設定する。

下記は「bento/centos-6.7」を使用する場合
```bash
$ vagrant init bento/centos-6.7
```

公式のboxでないboxの場合は下記のように名前を付けて起動する事もできる。
[vagrantbox.es](http://www.vagrantbox.es/)に色々な種類のboxがあるので、例えばそれを使用する場合は

```bash
$ vagrant init centos6.7 https://dl.dropboxusercontent.com/u/51478659/vagrant/morungos-centos67.box
```

#### vagrantを起動

```bash
$ vagrant up
```

#### vagrant仮想マシンにログイン
```bash
$ vagrant ssh
```

#### vagrant仮想マシンをシャットダウン
```bash
$ vagrant halt
```

#### phpの開発をする際の設定

vagrant仮想マシンの設定は全てVagrantfileと言うファイルに記載する。

##### 仮想マシンの中のWebサーバーを参照する設定
下記設定で、http://192.168.33.10でWebサーバーが参照できるようになる。

```ruby
Vagrant.configure(2) do |config|
	:
	config.vm.network "private_network", ip: "192.168.33.10"
	:
end
```

##### ホストとゲストマシンでの共有フォルダの設定
ホスト（vagrantを起動した側のマシン）で作業をして、それをゲスト(
vagrantで起動したマシン)に反映する場合に、共有フォルダを設定すると便利。

```ruby
Vagrant.configure(2) do |config|
	:
	config.vm.synced_folder "~/Documents/php", "/php", mount_options: ['dmode=777','fmode=755']
	:
end
```


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

##### カラムの追加
```sql
alter table [テーブル名] add [カラム名] [カラム定義] (after [後に挿入したいカラム名]) 
```

```sql
alter table posts add image_name text after contents;
alter table posts add image_path text after image_name;
```

##### カラムの削除
```sql
alter table [テーブル名] drop [カラム名]
```


#### PHPからMySQLにアクセスする設定
##### PDOのインストール

```bash
$ sudo yum install -y php-mysql
```

##### PDOの使い方

* PDOオブジェクトの作成
```php
<?php
	$db = new PDO('mysql:host=[ホスト名];dbname=[データベース名]', '[ユーザー名]', '[パスワード]');
?>
```

* データベースのエラー時に例外を発生させる設定
```php
<?php
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>
```

#### ファイルアップロード
