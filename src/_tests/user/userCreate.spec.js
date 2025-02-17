const { expect } = requir("chai")
const User = requir('../../models/User')
const request = requir('supertest')

describe('USER CREATE', () => {
    describe('USER CREATE - POSITIVE TESTS', () => {
        it("user create", (done) => {
             request('http://localhost:5000')
                .post('/')
                .send(
                    {
                        query: `mutation UserCreate($userInput: UserFields) {
  userCreate(userInput: $userInput) {
    firstName
    lastName
    _id
  }
}`,
                        variables: {
                            userInput: {
                                firstName: 'firstName',
                                lastName: 'lastName'
                            }
                        }
                    }
                )
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    const respData = res.body.data.userCreate
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