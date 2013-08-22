
serve: node_modules
	@node_modules/serve/bin/serve -Sloj

node_modules: component.json package.json
	@packin install \
		--meta package.json,component.json,deps.json \
		--folder node_modules \
		--executables \
		--no-retrace

.PHONY: serve