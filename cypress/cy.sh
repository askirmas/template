#!/bin/bash

#TODO --run=init: ...
#TODO --run=clean: "git clean -fd cypress/**/*.png",

OPTS=()

if [ -z "$npm_config_run" ];
then
  OPTS+=('open')
else
  OPTS+=('run' '--headless' '--browser' "$npm_config_run")
  cmd="run"
  if [ ! -z "$npm_config_spec" ]; then
     OPTS+=('--spec' "cypress/integration/$npm_config_spec")
  fi
fi 

OPTS+=('--config-file' 'node_modules/@kirmas/template-cypress/config.json')

if [ ! -z "$npm_config_dev" ]; then
  OPTS+=('--config' "baseUrl=http://localhost:${PORT:-3000}/")
fi

cypress ${OPTS[@]} --env failOnSnapshotDiff=true
exit $?