#!/usr/bin/env bash

printf "\033[0;35m"
echo "Starting dev environment..."
printf "\033[0m\n"

pnpx http-server -c-1 & pnpx @tailwindcss/cli -i input.css -o style.css --watch
