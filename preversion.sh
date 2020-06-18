#!/bin/bash
branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$branch" == "master" ]; then
  npm dedup && git add . && git commit -m "Dedup before release"
  git push && git switch release && git merge --squash master && git commit -m squash
  [ $? == 0 ] || exit 1
fi


branch=$(git rev-parse --abbrev-ref HEAD)
[ "$branch" != "release" ] && exit 1
exit 0
