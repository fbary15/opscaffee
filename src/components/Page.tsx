import { ViewTransition } from "react";
import { AnimScope } from "./AnimScope";

/**
 * Minden oldal ebbe csomagolódik: oldalváltáskor függönyszerű átmenet
 * (csak a `transitionTypes={["page"]}` linkeknél), és az oldal saját mozgásai.
 */
export function Page({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter={{ page: "page", default: "none" }} exit={{ page: "page", default: "none" }} default="none">
      <main id="tartalom">
        <AnimScope>{children}</AnimScope>
      </main>
    </ViewTransition>
  );
}
