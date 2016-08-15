# Rubyの環境インストール
## vagrantの共有フォルダ追加

今までphpやwordpressの授業で使用していたvagrant仮想マシンに共有フォルダの設定を追加します。
Vagrantfileに下記の設定を追記します。

```ruby
config.vm.synced_folder "~/Documents/acthouse/task/ror", "/ror", mount_options: ['dmode=777','fmode=755']
```

synched_folderの引数は第一引数が自分のパソコンのフォルダ、第二引数がvagrant仮想マシン内でのフォルダ、mount_optionsは、共有フォルダを設定した時のパーミション（権限）の設定になります。
特に第一引数はそれぞれの環境によって違うので注意ください。

## rbenvのインストール
vagrantの設定をしたら、vagrant仮想マシン内にrbenvと言うrubyのバージョンを管理できるソフトを入れます。
なので、vagrant仮想マシンにログインしてください。

### gitインストール
gitが必要なのでgitをまず入れます。
```bash
sudo yum install -y git
```

[rbenv](https://github.com/rbenv/rbenv)

[ここ](https://github.com/rbenv/rbenv#installation)に書いてあるとおりに実行していけばよいです。

+ rbenvをgithubからclone
```bash
git clone https://github.com/rbenv/rbenv.git ~/.
```

- 環境変数追加
```bash
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
```
- 初期化
```bash
~/.rbenv/bin/rbenv init
```

- 一度vagrant仮想マシンからログアウトしてログインする

- 確認
```bash
$ type rbenv
#=> "rbenv is a function"
```

- ruby-buildプラグインインストール
```bash
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```

- ruby最新版インストール
```bash
rbenv install 2.3.1
```

もしインストールが失敗するようならば、下記コマンドでライブラリ等が不足している可能性があるので下記コマンド実行後に再度試してみます。

```bash
sudo yum install -y gcc bzip2 openssl-devel libyaml-devel libffi-devel readline-devel zlib-devel gdbm-devel ncurses-devel
```

- bundlerとrailsインストール
```bash
gem install bundler
gem install rails
```
