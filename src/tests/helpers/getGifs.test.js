import getGifs from "helpers/getGifs";

describe("Pruebas al helper getGifs", () => {
  test("should return 10 elements", async () => {
    const gifs = await getGifs("Naruto");
    expect(gifs.length).toBe(10);
  });

  test("should return undefined if argument is not passed", async () => {
    const resp = await getGifs("");
    expect(resp.length).toBe(0);
  });
});
