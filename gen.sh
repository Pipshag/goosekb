#/bin/zsh

while [[ 1 ]]; do inotifywait -e modify config.yaml; ergogen . -o generated; done
