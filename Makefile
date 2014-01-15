
serve: node_modules
	@node_modules/serve/bin/serve -Slojp 0

node_modules: package.json
	@packin install \
		--meta package.json,component.json \
		--folder node_modules

.PHONY: serve