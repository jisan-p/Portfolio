# mhpx.pages.dev

A terminal-inspired portfolio website, engineered with dual-interface support. It can be viewed beautifully in any modern web browser or fetched directly from a command-line terminal using `curl`.

<!-- Add your screenshot below! -->
<img width="1216" height="666" alt="Image" src="https://github.com/user-attachments/assets/48ae7a9e-c67c-4910-a785-21d1d172295e" />

## Features
- **Browser Interface:** Animated terminal typing effect with syntax highlighting.
- **Curl Interface:** Pure ANSI output directly in your terminal.
- **Bash-generated Pages:** Fully static generation using simple Bash scripts and a `Makefile`.
- **Cloudflare Pages Routing:** Intelligent `User-Agent` routing powered by a Cloudflare Worker to serve HTML to browsers and plain text to curl.

## Try It

Open your terminal and run:
```bash
curl -L mhpx.pages.dev
```
> [!NOTE]
> If you're on Windows, use `curl.exe -L mhpx.pages.dev` instead!

## Pages

Explore the different pages directly from the command line or in your browser:
- `/` (`curl -L mhpx.pages.dev`)
- `/about` (`curl -L mhpx.pages.dev/about`)
- `/projects` (`curl -L mhpx.pages.dev/projects`)
- `/academics` (`curl -L mhpx.pages.dev/academics`)
- `/contact` (`curl -L mhpx.pages.dev/contact`)

## Architecture

The site uses a simple but elegant static generation pipeline:

1. **Bash generators** (`make-index`, `make-about`, etc.) output ANSI text and HTML wrapping.
2. **`make build`** compiles everything into a static `_site` directory.
3. **Static HTML + ANSI assets** are deployed to **Cloudflare Pages**.
4. **Cloudflare Worker** intercept requests, checks the `User-Agent`, and returns either the HTML page or the `.txt` ANSI asset.

## Local Development

To build the static HTML files:

```bash
cd website
make clean && make build
```

To serve the website locally for testing:

```bash
cd website/_site
python3 -m http.server 8080
```
Then navigate to `http://localhost:8080` in your web browser.

You can also test the raw ASCII terminal output locally by running:
```bash
curl localhost:8080/index.txt
```

## Deployment

Any push to the `main` branch is automatically built and deployed by Cloudflare Pages using the build command:
```bash
cd website && make build
```
And the output directory: `website/_site`

## Credits & License

The terminal aesthetic, bash-generation architecture, and original core scripts were heavily inspired by and adapted from the open-source [YSAP](https://github.com/bahamas10/ysap) project created by Dave Eddy ([@bahamas10](https://github.com/bahamas10)).

This project is open source and available under the **MIT License**. See the [LICENSE](LICENSE) file for more information.

The "MHP" branding, personal content, portfolio structure, Cloudflare deployment/routing behavior, and other modifications were created specifically for this portfolio.
