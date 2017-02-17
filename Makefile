.PHONY: dist test

install:
	npm i cooking-cli -g
	@npm i

dev:
	@npm run dev

dist:
	@npm run dist

deploy:
	@npm run deploy

test:
	@npm test
