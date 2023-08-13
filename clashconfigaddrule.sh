#!/bin/bash

FILE=$1

rules_line=$( grep -n "rules" "$FILE" | cut -d: -f1)
# cat $FILE
echo $rules_line

sed -i '/rules/i\  - name: 🌏 chatgpt \
    type: select \
    proxies: \
      - 🇦🇷 阿根廷S01' "$FILE"
sed -i '/rules/a\ - DOMAIN-SUFFIX,openai.com,🌏 chatgpt' "$FILE"
