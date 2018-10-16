const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

// Describe what you are testing
describe('Home Page', () => {
  it('Should have a home page', (done) => {
    chai.request('localhost:8080')
      .get('/')
      .end((err, res) => {
        if (err) {
          done(err)
        }
        res.status.should.be.equal(200);
        done()
      })
  })
});