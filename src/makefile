all: clean copy webpack sassc

copy:
	cp -f html/* ../
	cp -rf ./img ../


webpack:
	mkdir -p ../js
	webpack js/app.js ../js/bundle.js

sassc:
	mkdir -p ../css
	sassc css/style.scss > ../css/style.css

clean:
	rm -rf ../img
	rm -rf ../css
	rm -rf ../js
	rm -f ../*.html

watch:
	find ./js -name '*.js' | entr -rc make
