#!/usr/bin/env bash

printf "\033[0;35m"
echo "Building tailwindcss..."
printf "\033[0m\n"

mkdir -p dist
rm -rf dist/*
pnpx @tailwindcss/cli -i input.css -o dist/style.css -m 

printf "\033[0;35m"
echo "Copying files..."
printf "\033[0m\n"

cp index.html dist/index.html
cp -r src dist

printf "\033[0;32m"
echo "Build complete!"
printf "\033[0m\n"
