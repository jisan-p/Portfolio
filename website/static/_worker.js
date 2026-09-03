export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const userAgent = request.headers.get("User-Agent") || "";
    
    // Check if the request comes from a terminal client
    const isTerminal = /curl|wget|httpie/i.test(userAgent);
    
    if (isTerminal) {
      // Normalize path to remove trailing slash for matching
      let path = url.pathname;
      if (path !== "/" && path.endsWith("/")) {
        path = path.slice(0, -1);
      }
      
      // Map routes to terminal files
      const terminalRoutes = {
        "/": "/index.txt",
        "/about": "/about/index.txt",
        "/projects": "/projects/index.txt",
        "/skills": "/skills/index.txt",
        "/contact": "/contact/index.txt",
        "/help": "/help",
        "/ping": "/ping"
      };
      
      if (terminalRoutes[path]) {
        // Fetch the corresponding text file
        const newUrl = new URL(terminalRoutes[path], request.url);
        const modifiedRequest = new Request(newUrl, request);
        const response = await env.ASSETS.fetch(modifiedRequest);
        
        if (response.status === 200) {
          // Return with proper terminal headers
          const newHeaders = new Headers(response.headers);
          newHeaders.set("Content-Type", "text/plain; charset=utf-8");
          newHeaders.set("X-Content-Type-Options", "nosniff");
          
          return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: newHeaders
          });
        }
        return response;
      } else {
        // Unknown terminal route
        return new Response("404 Not Found\n", {
          status: 404,
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "X-Content-Type-Options": "nosniff"
          }
        });
      }
    }
    
    // Regular browser request, pass through to Cloudflare Pages static assets
    return env.ASSETS.fetch(request);
  },
};
