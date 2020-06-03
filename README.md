## usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_name|string|null: false, unique: true|
|email|string|null: false, unique: true|

### Association
- has_many :messages
- has_many :logins
- has_many :groups, through groups_users


## messagesテーブル
|  column | type | options |
| --- | --- | --- |
|  group_id | integer | null: false, foreign_key: true |
|  user_id | integer | null: false, foreign_key: true |
|  body | text | null: false |
|  image | string |  |

### Association
- belongs_to :users
- belongs_to :groups

## groupsテーブル
|  column | type | options |
| :--- | :--- | --- |
|  group_name | string | null: false |

### Association
- has_many :users, through groups_users


## loginsテーブル
|  column | type | options |
| :--- | :--- | --- |
|  login_datetime | datetime | null: false |
|  logout_datetime | datetime | null: false |
|  user_id | integer | null: false, foreign_key: true |

### Association
- belongs_to :users


## groups_usersテーブル
|  column | type | options |
| :--- | :--- | --- |
|  group_id | integer | null: false, foreign_key: true |
|  user_id | integer | null: false, foreign_key: true |
|  join_datetime | datetime | null: false |
|  exit_datetime | datetime | null: false |

### Association
- belongs_to :group
- belongs_to :user