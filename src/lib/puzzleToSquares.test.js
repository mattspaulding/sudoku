import puzzleToSquares from "./puzzleToSquares";

test("Converts puzzles to squares", () => {
  const input = {
    A3: "5",
    A6: "3",
    A9: "9",
    B1: "9",
    B7: "7",
    C1: "3",
    C3: "1",
    C4: "2",
    C5: "7",
    C9: "5",
    D3: "2",
    D6: "6",
    D9: "7",
    E4: "4",
    E8: "9",
    E9: "1",
    F1: "4",
    F2: "3",
    F4: "7",
    F5: "1",
    F8: "5",
    F9: "6",
    G2: "9",
    H2: "1",
    H3: "6",
    H6: "7",
    H8: "3",
    H9: "8",
    I1: "5",
    I3: "4",
    I4: "8",
    I6: "1",
    I7: "9",
    C7: "4",
    E5: "5",
  };
  const output = [
    [
      {
        val: "",
      },
      {
        val: "",
      },
      {
        val: "5",
        isLocked: true,
      },
      {
        val: "",
      },
      {
        val: "",
      },
      {
        val: "3",
        isLocked: true,
      },
      {
        val: "",
      },
      {
        val: "",
      },
      {
        val: "9",
        isLocked: true,
      },
    ],
    [
      {
        val: "9",
        isLocked: true,
      },
      {
        val: "",
      },
      {
        val: "",
      },
      {
        val: "",
      },
      {
        val: "",
      },
      {
        val: "",
      },
      {
        val: "7",
        isLocked: true,
      },
      {
        val: "",
      },
      {
        val: "",
      },
    ],
    [
      {
        val: "3",
        isLocked: true,
      },
      {
        val: "",
      },
      {
        val: "1",
        isLocked: true,
      },
      {
        val: "2",
        isLocked: true,
      },
      {
        val: "7",
        isLocked: true,
      },
      {
        val: "",
      },
      {
        val: "4",
        isLocked: true,
      },
      {
        val: "",
      },
      {
        val: "5",
        isLocked: true,
      },
    ],
    [
      {
        val: "",
      },
      {
        val: "",
      },
      {
        val: "2",
        isLocked: true,
      },
      {
        val: "",
      },
      {
        val: "",
      },
      {
        val: "6",
        isLocked: true,
      },
      {
        val: "",
      },
      {
        val: "",
      },
      {
        val: "7",
        isLocked: true,
      },
    ],
    [
      {
        val: "",
      },
      {
        val: "",
      },
      {
        val: "",
      },
      {
        val: "4",
        isLocked: true,
      },
      {
        val: "5",
        isLocked: true,
      },
      {
        val: "",
      },
      {
        val: "",
      },
      {
        val: "9",
        isLocked: true,
      },
      {
        val: "1",
        isLocked: true,
      },
    ],
    [
      {
        val: "4",
        isLocked: true,
      },
      {
        val: "3",
        isLocked: true,
      },
      {
        val: "",
      },
      {
        val: "7",
        isLocked: true,
      },
      {
        val: "1",
        isLocked: true,
      },
      {
        val: "",
      },
      {
        val: "",
      },
      {
        val: "5",
        isLocked: true,
      },
      {
        val: "6",
        isLocked: true,
      },
    ],
    [
      {
        val: "",
      },
      {
        val: "9",
        isLocked: true,
      },
      {
        val: "",
      },
      {
        val: "",
      },
      {
        val: "",
      },
      {
        val: "",
      },
      {
        val: "",
      },
      {
        val: "",
      },
      {
        val: "",
      },
    ],
    [
      {
        val: "",
      },
      {
        val: "1",
        isLocked: true,
      },
      {
        val: "6",
        isLocked: true,
      },
      {
        val: "",
      },
      {
        val: "",
      },
      {
        val: "7",
        isLocked: true,
      },
      {
        val: "",
      },
      {
        val: "3",
        isLocked: true,
      },
      {
        val: "8",
        isLocked: true,
      },
    ],
    [
      {
        val: "5",
        isLocked: true,
      },
      {
        val: "",
      },
      {
        val: "4",
        isLocked: true,
      },
      {
        val: "8",
        isLocked: true,
      },
      {
        val: "",
      },
      {
        val: "1",
        isLocked: true,
      },
      {
        val: "9",
        isLocked: true,
      },
      {
        val: "",
      },
      {
        val: "",
      },
    ],
  ];
  expect(puzzleToSquares(input)).toStrictEqual(output);
});
