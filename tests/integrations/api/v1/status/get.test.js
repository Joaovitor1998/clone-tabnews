describe("/api/v1/status", () => {
  describe("GET", () => {

    it("should return Status Code 200", async () => {
      const response = await fetch("http://localhost:3000/api/v1/status");
      const responseBody = await response.json();

      const { 
        updated_at, 
        dependencies: { 
          database: {
            version, 
            max_connections, 
            opened_connections
          } 
        }
      } = responseBody;
    
      const parsedData = new Date(updated_at).toISOString()
      expect(updated_at).toEqual(parsedData)

      expect(version).toEqual("16.0")
      expect(max_connections).toEqual(100)
      expect(opened_connections).toEqual(1)

      expect(response.status).toBe(200);
    });
    

  });
});
