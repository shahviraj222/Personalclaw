import { expect, test } from "bun:test";
import { ActionTracker } from "../modes/agent/action-tracker";
import { createWebTools } from "../modes/plan/web-tools";

test("only registers web tools when a Firecrawl key is configured", () => {
  const original = process.env.FIRECRAWL_API_KEY;
  const tracker = new ActionTracker();
  try {
    delete process.env.FIRECRAWL_API_KEY;
    expect(Object.keys(createWebTools(tracker))).toEqual([]);
    process.env.FIRECRAWL_API_KEY = "   ";
    expect(Object.keys(createWebTools(tracker))).toEqual([]);
    process.env.FIRECRAWL_API_KEY = "fc-test";
    expect(Object.keys(createWebTools(tracker)).sort()).toEqual([
      "fetch_url",
      "web_crawl",
      "web_search",
    ]);
  } finally {
    if (original === undefined) delete process.env.FIRECRAWL_API_KEY;
    else process.env.FIRECRAWL_API_KEY = original;
  }
});
