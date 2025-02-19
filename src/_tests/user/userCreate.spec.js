const { expect } = require("chai")
const User = require('../../models/User')
const gqlRequest = require('../gqlRequest')
const {userCreateQ, user} = require('./data')

let postData = null
let respData = null

before('DELETE MANY', () => {
    User.deleteMany({})
    console.log('Users are deleted')
})

describe('USER CREATE', () => {
    describe('USER CREATE - POSITIVE TESTS', () => {
        it("user create1", (done) => {

            postData = {
                query: userCreateQ,
                variables: user
            }

            gqlRequest(postData)

                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userCreate
                    expect(respData.firstName).eq('firstName')
                    expect(respData.lastName).eq('lastName')
                    console.log(respData)
                    done()
                })
        })
    })
    describe.skip('USER CREATE - NEGATIVE TESTS', () => {

    })
})