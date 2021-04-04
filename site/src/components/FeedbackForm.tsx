import Button from "./buttons/Button"
import TextArea from "./inputs/TextArea"
import TextInput from "./inputs/TextInput"

const FeedbackForm = () => {
  return (
    <form className="flex flex-col gap-3 items-end">
      <TextArea
        className="h-40 flex flex-col w-full"
        label="Feedback"
        placeholder="Write a little feedback about your experience"
        id="feedback"
        value=""
        isOptional={false}
      />
      <TextInput
        className="w-full"
        label="Email"
        placeholder="bill.posters@email.com"
        id="email"
        value=""
        isOptional={true}
      />
      <Button role="primary" action={() => {}}>
        Submit feedback
      </Button>
    </form>
  )
}

export default FeedbackForm
