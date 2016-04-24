all: clean copy webpack sassc

copy:
	cp -f html/* ../
	cp -rf ./img ../


webpack:
	mkdir -p ../js
	webpack js/app.js ../js/bundle.js

sassc:
	mkdir -p ../css
	sassc scss/style.scss > ../css/style.css

clean:
	rm -rf ../img
	rm -rf ../css
	rm -rf ../js
	rm -f ../*.html

watch:
	./script/watch_files.sh | entr -rc make
