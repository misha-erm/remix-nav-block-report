import type { MetaFunction } from "@remix-run/node";
import { NavLink, Outlet } from "@remix-run/react";
import { Suspense } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to Remix</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <NavLink className="text-blue-700 underline " to="/">
            {({ isActive, isPending }) =>
              `Light${isPending ? " (pending)" : isActive ? " (active)" : ""}`
            }
          </NavLink>
        </li>
        <li>
          <NavLink className="text-blue-700 underline " to="/heavy">
            {({ isActive, isPending }) =>
              `Heavy${isPending ? " (pending)" : isActive ? " (active)" : ""}`
            }
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-blue-700 underline "
            to="/light-with-slow-client-loader"
          >
            {({ isActive, isPending }) =>
              `Light with long client loader${
                isPending ? " (pending)" : isActive ? " (active)" : ""
              }`
            }
          </NavLink>
        </li>
      </ul>

      <Suspense fallback={"Outer Suspense fallback"}>
        <Outlet />
      </Suspense>
    </div>
  );
}
