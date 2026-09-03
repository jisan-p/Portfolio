# mhpx.pages.dev

A terminal-inspired portfolio website, engineered with dual-interface support, it can be viewed in any modern web browser or fetched directly from a command-line terminal using `curl`.

<!-- Add your screenshot below! -->
<img width="1216" height="666" alt="Image" src="https://github.com/user-attachments/assets/48ae7a9e-c67c-4910-a785-21d1d172295e" />

## Features
- **Browser UI:** Animated terminal typing effect with syntax highlighting.
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
