import { LiveReload } from "remix";

export default function App() {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Remix: so great, it's funny!</title>
      </head>
      <body>
        <h1>Hello World</h1>
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}