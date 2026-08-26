# Portfolio

Interactive terminal-based portfolio for Mehedul Hasan Prodhan (Software Engineering @ IUT).

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

You can also test the raw ASCII terminal output by running:
```bash
curl localhost:8080/index.txt
```
