browser:
	open http://localhost:9080

webpack:
	webpack js/app.js build/bundle.js

watch:
	find ./js -name '*.js' | entr -rc make webpack
