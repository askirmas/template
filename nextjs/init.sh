#!/bin/bash

me=`basename "$0"`

id=$PPID

while [ "$id" != "" ]; do
  next="$(ps -o ppid= $id)"
  cur=( $(ps -o args= "$id") )
  nn=( $(ps -o args= "$next") )

  if [ "$nn" != "npm" ] && [ "$cur" == "npm" ]; then
    out=( $(lsof -p "$id" | grep cwd) )
    target="${out[8]}"

    find * -type f -maxdepth 1 -not -iname "package*" -and -not -iname "$me" | xargs -I{} cp -r ./{} $target/{}
    find * -type d -maxdepth 1 -not -iname "package*" -and -not -iname "$me" | xargs -I{} cp -r ./{}/ $target/{}/
    
    exit 0;
  fi

  id="$next"
done
