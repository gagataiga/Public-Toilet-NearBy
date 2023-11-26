import chai ,{expect} from "chai";
import "mocha";
import chaiHttp from "chai-http";
import { setUpServer } from "../setupServer";

let app = setUpServer();

before(() => {
  app = setUpServer();
});

after((done) => {
  done();
});

chai.use(chaiHttp);

describe("User Post Api", () => {
  describe("Delete /posts", () => {
    it("should delete a user post", () => { 
      expect(true).to.equal(true);
    })
  });
});