#!/bin/sh

readonly KEYS_FOLDER="$HOME/Documents"

open "https://yandex.com/games/app/146156?draft=true&game_url=https://localhost:8080"
http-server --ssl --key "$KEYS_FOLDER/root.key" --cert "$KEYS_FOLDER/root.crt" -c-1 -p 8080 -a 127.0.0.1
