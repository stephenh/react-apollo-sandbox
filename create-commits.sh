#! /bin/bash

# Pulled via `npm view @apollo/client versions --json` and some regex cleanup of the results
versions=("3.4.16" "3.4.17" "3.5.0" "3.5.1" "3.5.2" "3.5.3" "3.5.4" "3.5.5" "3.5.6" "3.5.7" "3.5.8" "3.5.9" "3.5.10" "3.6.0" "3.6.1" "3.6.2" "3.6.3" "3.6.4" "3.6.5" "3.6.6" "3.6.7" "3.6.8" "3.6.9" "3.6.10" "3.7.0")

for i in "${versions[@]}"; do
  tmp=$(mktemp)
  jq ".dependencies.\"@apollo/client\" = \"$i\"" package.json > "$tmp" && mv "$tmp" package.json
  yarn
  git add package.json yarn.lock
  git commit -m "try version $i"
  git push origin bisect-react-18-rtl-update
done
