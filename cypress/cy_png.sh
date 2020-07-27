#!/bin/bash
cwd="$PWD"
IFS=$'\n'
files=( $(find "cypress" -iname "* #[1-9].png"))
IFS=$' '

exitCode=0

for file in "${files[@]}"; do
  if [ ! -L "$file" ]; then
    # "Not symlink: \"$file\""
    # exitCode=1
    cd $(dirname -- "$file")
    fileName=$(basename -- "$file")
    source=$(echo "$fileName" | sed -re 's/#[0-9]+\.png$/#0.png/')

    rm "$fileName"
    ln -s "$source" "$fileName"

    cd "$cwd"
  fi
done

exit $exitCode
