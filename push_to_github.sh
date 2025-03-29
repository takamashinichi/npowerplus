#!/bin/bash

# GitHubのユーザー名とPATを入力
read -p "GitHub Username: " USERNAME
read -sp "GitHub Personal Access Token: " TOKEN
echo ""

# リモートURLを設定してプッシュ
git remote set-url origin https://${USERNAME}:${TOKEN}@github.com/takamashinichi/npowerplus.git
git push -u origin main

# スクリプトの実行完了を通知
echo "プッシュが完了しました。" 