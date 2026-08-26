# Create, manage, and deploy the YSAP website
#
# Author: Dave Eddy <dave@daveeddy.com>
# Date: April 05, 2025
# License: MIT

# duh
SHELL := bash

.PHONY: help
help:
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST) | sort

.PHONY: build
build: static/favicon.ico static/ysap.png static/favicon.jpg ## default target, builds the site into ./_site
	mkdir -p _site _site/contact _site/static _site/about _site/projects _site/skills
	# disable indexing for certain dirs
	echo -n > _site/static/index.html
	# copy static files
	cat static/favicon.ico > _site/favicon.ico
	cat static/favicon.jpg > _site/static/favicon.jpg
	cat static/robots.txt > _site/robots.txt
	cat static/ysap.png > _site/static/ysap.png
	cat static/Me.jpg > _site/static/Me.jpg
	cat static/style.css > _site/static/style.css
	cat static/ansi.css > _site/static/ansi.css
	cat static/terminal.js > _site/static/terminal.js
	cat static/index.html > _site/index.html
	cat static/contact.html > _site/contact/index.html
	cat static/about.html > _site/about/index.html
	cat static/projects.html > _site/projects/index.html
	cat static/skills.html > _site/skills/index.html
	# make /ping endpoint (nginx handles this for me, but just in case)
	echo 'pong' > _site/ping
	# create ANSI theme override page
	./make-theme > _site/theme
	# create ASCII index page for curl users
	./make-index > _site/index.txt
	# create ASCII help page
	./make-help > _site/help
	# make jsonp for our HTML files
	./make-commands-jsonp > _site/static/commands.js


static/favicon.ico:
	touch $@

static/favicon.jpg:
	touch $@

static/ysap.png:
	touch $@

.PHONY: all
all: build deploy ## build and deploy the site

.PHONY: serve
serve: ## serve site locally out of ./_site
	python3 -mhttp.server -d _site

.PHONY: check-deps
check-deps: ## check to ensure needed dependencies are installed
	./check-deps

.PHONY: check
check: ## check tools syntax using shellcheck
	shellcheck -x check-* make-* tools/*

.PHONY: clean
clean: ## remove any generated files
	rm -rf _site
	rm -f static/favicon.{ico,jpg}
	rm -f static/ysap.png

.PHONY: deploy
deploy: ## deploy the site (using rsync)
	rsync -avh --delete --exclude subcount.txt ./_site/ web:/var/www/ysap.sh/
