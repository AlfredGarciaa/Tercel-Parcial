import contar from "./contador.js";

describe("CONTADOR VACIO", () => {
  it("deberia retornar 0 si no hay palabra", () => {
    expect(contar(" ")).toEqual(0);
  });
});
/*
describe("CONTADOR DE 1 LETRA", () => {
  it("deberia retornar 1 de dicha letra", () => {
    expect(contar("a")).toEqual(1);
  });
});

describe("CONTADOR DE CADENA", () => {
  it("deberia retornar 3 de dicha cadena de letra a", () => {
    expect(contar("palabra")).toEqual(3);
  });
});*/
