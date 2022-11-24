import sumar from "./sumador.js";

describe("CONTADOR VACIO", () => {
  it("deberia retornar 0 si no hay palabra", () => {
    expect(sumar(" ")).toEqual(0);
  });
});
