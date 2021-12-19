import solveSudoku from "./solveSudoku";

test("Solves the game", () => {
  const input = [
    [
      {
        val: "7",
        isLocked: true,
      },
      {
        val: "3",
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
        val: "",
      },
      {
        val: "",
      },
    ],
    [
      {
        val: "4",
        isLocked: true,
      },
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
        val: "2",
        isLocked: true,
      },
    ],
    [
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
        val: "",
      },
      {
        val: "3",
        isLocked: true,
      },
    ],
    [
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
        val: "8",
        isLocked: true,
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
        val: "3",
        isLocked: true,
      },
      {
        val: "9",
        isLocked: true,
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
        val: "",
      },
      {
        val: "1",
        isLocked: true,
      },
      {
        val: "4",
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
    ],
    [
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
    ],
    [
      {
        val: "",
      },
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
        val: "2",
        isLocked: true,
      },
      {
        val: "4",
        isLocked: true,
      },
      {
        val: "3",
        isLocked: true,
      },
      {
        val: "8",
        isLocked: true,
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
        val: "4",
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
        val: "1",
        isLocked: true,
      },
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
      {
        val: "",
      },
    ],
  ];
  const output = [
    [
      { isLocked: true, val: "7" },
      { isLocked: true, val: "3" },
      { isLocked: true, val: "5" },
      { val: "2" },
      { isLocked: true, val: "6" },
      { val: "1" },
      { val: "4" },
      { val: "9" },
      { val: "8" },
    ],
    [
      { isLocked: true, val: "4" },
      { val: "6" },
      { isLocked: true, val: "9" },
      { val: "7" },
      { val: "8" },
      { val: "3" },
      { val: "1" },
      { val: "5" },
      { isLocked: true, val: "2" },
    ],
    [
      { isLocked: true, val: "1" },
      { val: "8" },
      { val: "2" },
      { val: "4" },
      { isLocked: true, val: "5" },
      { val: "9" },
      { val: "7" },
      { val: "6" },
      { isLocked: true, val: "3" },
    ],
    [
      { isLocked: true, val: "2" },
      { val: "1" },
      { val: "4" },
      { isLocked: true, val: "8" },
      { val: "7" },
      { isLocked: true, val: "6" },
      { val: "5" },
      { isLocked: true, val: "3" },
      { isLocked: true, val: "9" },
    ],
    [
      { isLocked: true, val: "3" },
      { val: "9" },
      { val: "8" },
      { isLocked: true, val: "1" },
      { isLocked: true, val: "4" },
      { val: "5" },
      { val: "2" },
      { isLocked: true, val: "7" },
      { val: "6" },
    ],
    [
      { val: "6" },
      { isLocked: true, val: "5" },
      { val: "7" },
      { val: "9" },
      { isLocked: true, val: "3" },
      { val: "2" },
      { isLocked: true, val: "8" },
      { val: "4" },
      { isLocked: true, val: "1" },
    ],
    [
      { val: "9" },
      { val: "7" },
      { isLocked: true, val: "1" },
      { isLocked: true, val: "6" },
      { isLocked: true, val: "2" },
      { isLocked: true, val: "4" },
      { isLocked: true, val: "3" },
      { isLocked: true, val: "8" },
      { isLocked: true, val: "5" },
    ],
    [
      { val: "5" },
      { isLocked: true, val: "4" },
      { val: "6" },
      { isLocked: true, val: "3" },
      { isLocked: true, val: "1" },
      { val: "8" },
      { isLocked: true, val: "9" },
      { val: "2" },
      { val: "7" },
    ],
    [
      { val: "8" },
      { val: "2" },
      { val: "3" },
      { val: "5" },
      { val: "9" },
      { isLocked: true, val: "7" },
      { val: "6" },
      { val: "1" },
      { val: "4" },
    ],
  ];
  expect(solveSudoku(input)).toStrictEqual(output);
});
