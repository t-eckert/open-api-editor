import { Link } from "react-router-dom"

import FeedbackIcon from "../icons/FeedbackIcon"

const FeedbackToken = (props: { className?: string }) => (
  <Link
    className={[
      "px-3 py-1 flex flex-row gap-1 items-center bg-white rounded-full group shadow",
      props.className,
    ].join(" ")}
    to="/feedback"
  >
    <FeedbackIcon className="h-4 w-4 text-gray-500 group-hover:text-gray-600 transition" />
    <span className="font-medium text-sm text-gray-700 group-hover:text-gray-900 transition">
      Feedback
    </span>
  </Link>
)

export default FeedbackToken
