
serve: node_modules
	@node_modules/serve/bin/serve -Slojp 0

node_modules: package.json
	@packin install --meta $< --folder $@

.PHONY: serve