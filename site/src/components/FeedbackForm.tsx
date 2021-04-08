import { useState } from "react"
import { useHistory } from "react-router-dom"

import { useInput } from "../hooks"
import { submitFeedback } from "../actions"
import { validateFeedback } from "../functions"

import Button from "./buttons/Button"
import TextArea from "./inputs/TextArea"
import TextInput from "./inputs/TextInput"
import XCircleIcon from "./icons/XCircleIcon"

type Props = {
  onSubmit?: any
  redirectDelay?: number
}

const FeedbackForm = (props: Props) => {
  const [errorMessage, setErrorMessage] = useState("")

  const history = useHistory()

  const { value: feedbackBody, bind: bindFeedbackBody } = useInput("")
  const { value: email, bind: bindEmail } = useInput("")

  const onSubmit = (evt: any) => {
    evt.preventDefault()
    const error: string | null = validateFeedback({ feedbackBody, email })
    if (error === null) {
      submitFeedback({ feedbackBody, email })
      props.onSubmit?.()
      setTimeout(() => history.goBack(), props.redirectDelay || 0)
    } else {
      setErrorMessage(error)
    }
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={onSubmit}>
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
      <div className="flex flex-row justify-between items-center">
        {errorMessage ? (
          <div className="flex flex-row gap-1">
            <XCircleIcon classes="h-5 w-5 text-red-400" />
            <p className="text-sm font-medium text-red-800">{errorMessage}</p>
          </div>
        ) : (
          <div></div>
        )}
        <div className="flex flex-row gap-2">
          <Button role="primary" action={() => {}}>
            Submit feedback
          </Button>
          <Button
            role="link"
            action={() => {
              history.goBack()
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </form>
  )
}

export default FeedbackForm
