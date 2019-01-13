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

test("should not call onMove when out of range", () => {
  const overrides = scrollOverrides(
    [0, 20],
    [
      {
        id: "name",
        op: () => {
          fail("onMove is called!");
        }
      }
    ]
  );
  overrides.scroll({}).onMove({ y: -21 });
});

test("should call onMove when in range", () => {
  let opRan = false;
  const overrides = scrollOverrides(
    [0, 20],
    [
      {
        id: "name",
        op: () => {
          opRan = true;
        }
      }
    ]
  );
  overrides.scroll({}).onMove({ y: -10 });
  expect(opRan).toBeTruthy();
});

test("should create multiple operations if id is array", () => {
  const overrides = scrollOverrides(
    [0, 20],
    [{ id: ["feature1", "feature2"], op: modulate("opacity", [0, 1]) }]
  );
  expect(typeof overrides.feature1).toBe("function");
  expect(typeof overrides.feature2).toBe("function");
});

test("should create multiple operations if op is array", () => {
  const overrides = scrollOverrides(
    [0, 20],
    [
      {
        id: "feature1",
        op: [modulate("opacity", [0, 1]), modulate("scale", [1, 1.5])]
      }
    ]
  );
  expect(typeof overrides.feature1).toBe("function");
  const resolvedOverride = overrides.feature1({});
  expect(resolvedOverride.opacity).toBeDefined();
  expect(resolvedOverride.scale).toBeDefined();
});

test.skip("should not call onTap when out of range", () => {
  //TODO
});

// $$$scroll: {
//   onMove({y}) {
//     ...
//   }
// }

// $$$layer: {
//   onTap() {
//     ...
//   }
// }

// {
//   let inRange = false;
//   return {
//     scroll: {
//       onMove(scrollProps) {
//         inRange = isInRange(scrollProps.y, scrollRange)
//         if (inRange) {
//           $$$scroll.onMove(scrollProps)
//         }
//       }
//     },
//     [id]: {
//       onTap() {
//         if (inRange) {
//           $$$layer.onTap()
//         }
//       }
//     }
//   }
// }
