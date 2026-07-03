import { describe, expect, it } from "vitest";
import { getRouteEntries } from "@/lib/site-routes";

describe("route registry", () => {
  it("includes the root and healthcare route", async () => {
    const routes = await getRouteEntries();
    expect(routes.find((route) => route.pathname === "/")).toBeTruthy();
    expect(routes.find((route) => route.pathname === "/industries/healthcare")).toBeTruthy();
  });
});

