.PHONY: dist test

install:
	npm i cooking-cli -g
	@npm i
	git submodule init
	git submodule update

dev:
	@npm run dev

dist:
	@npm run dist

deploy:
	@npm run deploy

start:
	@npm run play

build:
	@npm run play:build

test:
	@npm test
