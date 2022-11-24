import contar from "./contador.js";

describe("CONTADOR VACIO", () => {
  it("deberia retornar 0 si no hay palabra", () => {
    expect(contar(" ")).toEqual(0);
  });
});
