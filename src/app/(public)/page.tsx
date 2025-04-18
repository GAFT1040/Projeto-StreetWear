"use client";

import Demo from "@/components/Cart";
import { Provider } from "@/components/ui/provider";

export default function Home() {
  return (
    <Provider>
      <Demo />
    </Provider>
  );
}
