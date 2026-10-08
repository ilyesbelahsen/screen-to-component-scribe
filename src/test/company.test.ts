import { describe, expect, it } from "vitest";
import { company } from "@/data/company";

describe("Business location", () => {
  it("locates the concierge in Tanger, Morocco", () => {
    expect(company.city).toBe("Tanger, Maroc");
  });
});