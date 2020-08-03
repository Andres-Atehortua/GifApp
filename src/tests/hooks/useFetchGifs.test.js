import useFetchGifs from "hooks/useFetchGifs";
//Dependencia instalada para poder usar hooks personalizados
import { renderHook } from "@testing-library/react-hooks";

describe("Probando el hook personalizado useFetchGifs", () => {
  test("should return the initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Goku")
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test("should return an array of images and set loading to false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Goku")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
