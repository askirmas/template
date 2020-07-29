#!/bin/bash

# As command as seperate bash script 
#TODO --run=init: ...
#TODO --run=clean: "git clean -fd cypress/**/*.png",

OPTS=()

if [ ${npm_config_run:-0} == 0 ];
then
  OPTS+=('open')
else
  OPTS+=('run' '--browser' "$npm_config_run")

  if [ ${npm_config_hed:-0} == 0 ]
  then 
    head="--headless"
  else
    head="--headed"
  fi

  OPTS+=("$head")

  if [ ${npm_config_spec:-0} -ne 0 ]; then
    OPTS+=('--spec' "cypress/integration/$npm_config_spec.*")
  fi
fi 

#TODO $npm_config_config_file
OPTS+=('--config-file' 'node_modules/@kirmas/template-cypress/config.json')

if [ ${npm_config_dev:-0} -ne 0 ]; then
  OPTS+=('--config' "baseUrl=http://localhost:${PORT:-3000}/")
fi

cypress ${OPTS[@]} "$@" #--env failOnSnapshotDiff=true
exit $?