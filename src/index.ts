import { serve } from 'bun';
import index from './index.html';

const server = serve({
  routes: {
    '/api/hello': {
      GET: () => Response.json({ message: 'Hello world', method: 'GET' }),
      PUT: () => Response.json({ message: 'Hello world', method: 'PUT' }),
    },

    // Try explicit function return
    '/api/hello/:name': (req) => {
      const name = req.params.name;
      return Response.json({ message: `Hello, ${name}!` });
    },

    '/*': index,
  },

  development: process.env.NODE_ENV !== 'production' && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
