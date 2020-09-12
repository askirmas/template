#!/bin/bash

if test -t 0
then
  programs=()
else
  eval "programs=( $(cat | grep .) )"
fi

programs+=("$@")

for prog in "${programs[@]}"; do
  npm run $prog
  l="$?"
  if [ "$l" != "0" ];then
    exit $l
  fi
done

