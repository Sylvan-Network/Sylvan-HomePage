import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
// import ReactDOM from "react-dom";

function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document.body,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>
    );
    // ReactDOM.render(
    //   document.body,
    //   <StrictMode>
    //     <RemixBrowser />
    //   </StrictMode>
    // );
  });
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1);
}
