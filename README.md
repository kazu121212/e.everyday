# テーブル設計

## users テーブル

| Column             | Type   | Options                   |
| ------------------ | ------ | ------------------------- |
| name               | string | null: false               |
| email              | string | null: false, unique: true |
| encrypted_password | string | null: false               |
| last_name          | string | null: false               |
| first_name         | string | null: false               |
| last_name_kana     | string | null: false               |
| first_name_kana    | string | null: false               |
| birth_date         | date   | null: false               |

### Association

- has_many :students
- has_many :notifications
- has_many :roles

## checks テーブル

| Column             | Type        | Options                        |
| ------------------ | ----------- | ------------------------------ |
| check_in_time      | datetime    |                                |
| check_out_time     | datetime    |                                |
| student            | references  | null: false, foreign_key: true |

### Association

- has_many   :notifications
- belongs_to :student

## students テーブル

| Column             | Type        | Options                        |
| ------------------ | ----------- | ------------------------------ |
| name               | string      | null: false                    |
| user               | references  | null: false, foreign_key: true |

### Association

- has_many   :notifications
- has_many   :checks
- belongs_to :user

## notifications テーブル

| Column             | Type        | Options                        |
| ------------------ | ----------- | ------------------------------ |
| checked            | boolean     | default: false, null: false    |
| action             | string      | default: '', null: false       |
| check              | references  | null: false, foreign_key: true |
| user               | references  | null: false, foreign_key: true |
| student            | references  | null: false, foreign_key: true |


### Association

- belongs_to :check
- belongs_to :user
- belongs_to :student

## roles テーブル

| Column             | Type        | Options                        |
| ------------------ | ----------- | ------------------------------ |
| name               | string      | null: false                    |
| key                | integer     | null: false                    |
| user               | references  | null: false, foreign_key: true |

### Association

- belongs_to :user

aaa