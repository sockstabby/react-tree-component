import { describe, it, expect } from "vitest";

// Overload signatures
function greet(person: string): string;
function greet(persons: string[]): string[];

function greet(person: unknown): unknown {
  if (typeof person === "string") {
    return `Hello, ${person}!`;
  } else if (Array.isArray(person)) {
    return person.map((name) => `Hello, ${name}!`);
  }
  throw new Error("Unable to greet");
}

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    const ret = greet("Eric");

    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});
