import chai ,{expect} from "chai";
import "mocha";
import chaiHttp from "chai-http";
import { setUpServer } from "../setupServer";

let app = setUpServer();

before(() => {
  const PORT: number = 3001;
  app =  app.listen(PORT, () => {
    console.log(`The server is listening @ http://localhost:${PORT}`);
  });
  
});

after((done) => {
  app.close((err:Error) => {
    if (err) {
      console.error(err);
    }
    // test is done 
    done();
  });
});

chai.use(chaiHttp);

describe("User Post Api", () => {
  describe("Delete /posts", () => {
    it("should delete a user post", () => { 
      expect(true).to.equal(true);
    })
  });
});