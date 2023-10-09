const locationKnex = require("../../db/index");
const LOCATIONS_TABLE: string = "Locations";

module.exports = {
  LOCATIONS_TABLE,
  async insertLocation(locagion:{longitude: number, latitude: number}) {
    try {
      const [registerLocationId] = await locationKnex(LOCATIONS_TABLE).insert(locagion).returning("location_id");
      return registerLocationId;
    } catch (error) {
      throw error;
    }
  }
}