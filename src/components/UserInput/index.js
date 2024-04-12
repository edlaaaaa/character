import {UserInput, UserInputItem} from './styledComponents'

const userInput = props => {
  const {userInputDetails} = props
  const {UserEnteredDetails, textLength} = userInputDetails

  return (
    <UserInputItem>
      <UserEnteredDetails>
        {userEnteredText}:{textLength}
      </UserEnteredDetails>
    </UserInputItem>
  )
}
export default UserInput
