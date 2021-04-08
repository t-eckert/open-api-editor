import { useInput } from "../hooks"
import { submitFeedback } from "../actions"
import Button from "./buttons/Button"
import TextArea from "./inputs/TextArea"
import TextInput from "./inputs/TextInput"

const FeedbackForm = () => {
  const {
    value: feedbackBody,
    bind: bindFeedbackBody,
    reset: resetFeedbackBody,
  } = useInput("")
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("")

  const onSubmit = (evt: any) => {
    evt.preventDefault()
    submitFeedback({ feedbackBody, email })
    resetFeedbackBody()
    resetEmail()
  }

  return (
    <form className="flex flex-col gap-3 items-end" onSubmit={onSubmit}>
      <TextArea
        className="h-40 flex flex-col w-full"
        label="Feedback"
        placeholder="Write a little feedback about your experience"
        id="feedback"
        isOptional={false}
        {...bindFeedbackBody}
      />
      <TextInput
        className="w-full"
        label="Email"
        placeholder="bill.posters@email.com"
        id="email"
        type="email"
        isOptional={true}
        {...bindEmail}
      />
      <Button role="primary" action={() => {}}>
        Submit feedback
      </Button>
    </form>
  )
}

export default FeedbackForm
