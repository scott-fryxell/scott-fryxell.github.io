#!/bin/sh
# Rebuild on every source change and serve dist. Pages poll /build-stamp.txt
# and reload themselves.
node build.js --drafts --watch &
watcher=$!
trap 'kill $watcher' EXIT INT TERM

# HTTPS on 8443 when mkcert certs exist (443 needs root, and serve silently
# falls back to a random port when it can't bind); plain HTTP otherwise.
if [ -f scott-fryxell.local.pem ] && [ -f scott-fryxell.local-key.pem ]; then
  echo "https://scott-fryxell.local:8443 (or https://localhost:8443)"
  npx serve dist -l 8443 --ssl-cert scott-fryxell.local.pem --ssl-key scott-fryxell.local-key.pem
else
  echo "http://localhost:3000 (run npm run certs for https://scott-fryxell.local)"
  npx serve dist -l 3000
fi
