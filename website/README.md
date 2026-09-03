# MHP Portfolio Build System

This directory contains the source scripts, static assets, and Makefile required to build the MHP Portfolio (`mhpx.pages.dev`).

## Usage

```
$ make help
make build         default target, builds the site into ./_site
make check-deps    check to ensure needed dependencies are installed
make check         check tools syntax using shellcheck
make serve         serve site locally out of ./_site
make all           build and deploy the site
make clean         remove any generated files
make deploy        deploy the site
```

## Details
The build system relies on bash scripts (`make-*`) to generate ANSI text files which represent the terminal version of the portfolio. 

The `make build` target coordinates running these scripts, converting them to JSONP for the HTML terminal emulator, and copying the HTML/CSS/JS files and Cloudflare Worker scripts into the `_site` output folder.
