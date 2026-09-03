# mhpx.pages.dev

An interactive, terminal-inspired portfolio website for Mehedul Hasan Prodhan (CSE @ IUT). 
Engineered with dual-interface support, it can be viewed beautifully in any modern web browser or fetched directly from a command-line terminal using `curl`.

<!-- Add your screenshot below! -->
![Terminal Screenshot](screenshot.png)

## Features
- **Browser UI:** A nostalgic, animated terminal typing effect with syntax highlighting.
- **Terminal CLI:** Pure ASCII output powered by Cloudflare Pages routing based on the `User-Agent`.
- **Fast & Static:** Fully static bash generation using `make`.

## Usage

### Web Browser
Simply navigate to [https://mhpx.pages.dev](https://mhpx.pages.dev) in any browser.

### Terminal
Open your terminal and run:
```bash
curl -L mhpx.pages.dev
```

Explore the different pages directly from the command line:
- `curl -L mhpx.pages.dev/about`
- `curl -L mhpx.pages.dev/projects`
- `curl -L mhpx.pages.dev/skills`

## Local Development

```bash
cd website
make clean && make build
```
