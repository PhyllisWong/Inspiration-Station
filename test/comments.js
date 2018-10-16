const chai = require('chai');
const chaiHttp = require('chai-http');
const Comment = require('../models/comments'); // Import comment model
const should = chai.should();

chai.use(chaiHttp);

describe('Comments', () => {
  it('should create with valid attributes at POST /posts', (done) => {

    let comment = { title: "Test Comment Title", body: "Test Post Summary" };


    Comment.findOneAndRemove(comment, () => {
      Comment.find((err, comments) => {
        let commentCount = comments.count;

        chai.request('localhost:8080')
          .post('/comments/new', comment)
          .end((err, res) => {

            // Check that the database has one more comment in it
            // Check that the response is successful
            Comment.find((err, comments) => {
              commentCount.should.be.equal(comments.count + 1);
              res.should.have.status(200);
              done();
            });
          });
      });
    });
  });