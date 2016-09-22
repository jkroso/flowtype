serve: node_modules
	@$</serve/bin/serve -Slojp 0

node_modules: package.json
	@npm install

.PHONY: serve
