#!/usr/bin/env bash

shopt -s extglob
shopt -s globstar

echo ./**/*(*.html|*.js|*.scss) | tr ' ' '\n'
