const request = require("supertest");
const app = require("../app"); // La aplicación express que contiene la ruta a probar

describe("Returns the information (ens, lens profile and matic amount) of a wallet address | GET /address/:address", () => {
  it("Should return data for a valid address", async () => {
    const response = await request(app).get(
      "/address/0xcc719d0ef7c044543efd2686695ded5f24978cf3"
    );

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("domainName");
    expect(response.body).toHaveProperty("lensProfile");
    expect(response.body).toHaveProperty("maticAmount");
  });

  it("Should return an error for an invalid address", async () => {
    const res = await request(app).get("/address/invalid-address");

    expect(res.statusCode).toEqual(500);
    expect(res.body).toEqual({
      domainName: null,
      lensProfile: null,
      maticAmount: null,
      error: "Error: Invalid address",
    });
    expect(res.body.error).toContain("Invalid address");
  });
});
