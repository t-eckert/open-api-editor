import { animated } from "react-spring"

import { useSlideIn } from "../../animations"
import { useAlerts } from "../../hooks"
import { Notification as INotification } from "../../interfaces"

import Button from "../buttons/Button"
import CloseIcon from "../icons/CloseIcon"
import ErrorIcon from "../icons/ErrorIcon"
import InfoIcon from "../icons/InfoIcon"
import SuccessIcon from "../icons/SuccessIcon"

type Props = INotification

const Notification = (props: Props) => {
  const alertStore = useAlerts()

  const slideInFromRight = useSlideIn("right")

  const notificationIcon =
    props.role === "error" ? (
      <ErrorIcon className="h-5 w-5 text-red-500" />
    ) : props.role === "success" ? (
      <SuccessIcon className="h-5 w-5 text-green-400" />
    ) : (
      <InfoIcon className="h-5 w-5 text-yellow-400" />
    )

  return (
    <animated.div
      className="w-96 bg-white shadow-md rounded-lg pointer-events-auto ring-opacity-5 overflow-hidden"
      style={slideInFromRight}
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">{notificationIcon}</div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className=" leading-tight text-sm font-medium text-gray-900">
              {props.title}
            </p>
            <p className="mt-1 text-gray-500">{props.text}</p>
            {props.action && (
              <div className="mt-2">
                <Button role="tertiary" action={props.action.behavior}>
                  {props.action.label}
                </Button>
              </div>
            )}
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus"
              onClick={() => {
                alertStore.removeNotification(props.notificationKey)
              }}
            >
              <span className="sr-only">Close</span>
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </animated.div>
  )
}

export default Notification
