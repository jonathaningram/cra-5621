YARN ?= yarn

SRC = $(shell find src -type f)
PUB = $(shell find public -type f)

DEV_PORT ?=
DEV_HOST ?=

yarn.lock node_modules: package.json
	$(YARN) install

build/index.html: public/index.html $(SRC) $(PUB)
	$(YARN) build

setup: yarn.lock node_modules

build: build/index.html

clean:
	-rm -rf build

start: $(SRC) $(PUB)
	FORCE_COLOR=true \
	PORT=$(DEV_PORT) \
	HOST=$(DEV_HOST) \
	$(YARN) start | cat

.PHONY: clean start
