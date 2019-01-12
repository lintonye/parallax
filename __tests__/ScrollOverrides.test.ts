import { scrollOverrides, modulate } from "../code/ScrollOverrides";

test("Single range, single operation", () => {
  const overrides = scrollOverrides(
    [0, 20],
    [{ id: "name", op: modulate("opacity", [0, 1]) }]
  );
  const { scroll, name } = overrides;
  expect(typeof scroll).toBe("function");
  expect(typeof name).toBe("function");
});
