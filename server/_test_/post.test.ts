import chai ,{expect} from "chai";
import "mocha";
import chaiHttp from "chai-http";
import { setUpServer } from "../setupServer";
let knexForTest = require("../../db/index");

let app = setUpServer();

before(() => {
  app = setUpServer(); 
});

after((done) => {
  done();
});

chai.use(chaiHttp);

describe("User Post Api", () => {
  describe("Delete /posts/:userId/:postId", () => {
    const postDeleteEndPoint = "/posts/1/1";

    it("should delete a user and return success message", async () => {
      try {
        const response = await chai.request(app).delete(postDeleteEndPoint);
        console.log(response.status);
        expect(response).to.have.status(200);
        expect(response.text).to.equal(`user post was deleted successfully`);
        // To check user post is deleted on Database
        const deletedUsersPost = await knexForTest('posts').where({ post_id : 1 }).first();
        expect(deletedUsersPost).to.be.undefined;
      } catch (error) {
        console.error(error);
        throw error;
      }
    });
  });
});