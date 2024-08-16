import { Await, defer, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";

export const clientLoader = () => {
  return defer({
    slowData: new Promise((resolve) =>
      setTimeout(() => resolve("LOADED!!!"), 5000)
    ),
  });
};

export default function Page() {
  const { slowData } = useLoaderData() as { slowData: Promise<string> };

  return (
    <div>
      Light with slow client loader
      <div>
        <Suspense fallback="Loading data...">
          <Await resolve={slowData}>{(data) => data}</Await>
        </Suspense>
      </div>
    </div>
  );
}
