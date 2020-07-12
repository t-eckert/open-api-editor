import { process } from "../src";
import suggestions from "../src/suggestions";

it("suggests adding a version when none exists", async () => {
  // Given
  const doc = {};

  const expected = [suggestions.addAnOpenApiVersion];

  // When
  const actual = await process(doc);

  // Then
  expect(actual).toEqual(expected);
});

it("suggests editing a version when it exists", async () => {
  // Given
  const doc = { openapi: "3.0.0" };

  const expected = [suggestions.editTheOpenApiVersion];

  // When
  const actual = await process(doc);

  // Then
  expect(actual).toEqual(expected);
});
