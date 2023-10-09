const locationKnex = require("../../db/index");
const LOCATIONS_TABLE: string = "locations";

module.exports = { 
  LOCATIONS_TABLE,
  async insertLocation(location:{longitude: number, latitude: number}) {
    try {
      const [registerLocationId] = await locationKnex(LOCATIONS_TABLE).insert(location).returning("location_id");
      return registerLocationId;
    } catch (error) {
      throw error;
    }
  }
}