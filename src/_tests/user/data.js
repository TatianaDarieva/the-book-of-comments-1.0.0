const userCreateQ =  `mutation UserCreate($userInput: UserFields) {
  userCreate(userInput: $userInput) {
    firstName
    lastName
    _id
  }
}`

    const user = {
        userInput: {
            firstName: 'firstName',
            lastName: 'lastName'
        }
    }

    module.exports = { userCreateQ, user }