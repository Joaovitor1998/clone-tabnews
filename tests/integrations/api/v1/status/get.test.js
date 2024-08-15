describe("/api/v1/status", () => {
  describe("GET", () => {
    it("should return Status Code 200", async () => {
      const response = await fetch("http://localhost:3000/api/v1/status");
      expect(response.status).toBe(200);
    });
  });
});
