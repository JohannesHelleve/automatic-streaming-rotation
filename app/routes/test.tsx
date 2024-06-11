import { Outlet } from "@remix-run/react";

export default function Test() {
  return (
    <div>
      <h1>Test</h1>
      <Outlet />
    </div>
  );
}