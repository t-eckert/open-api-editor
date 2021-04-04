import FeedbackForm from "../components/FeedbackForm"

const FeedbackView = () => {
  return (
    <div className="w-full">
      <section className="p-3 mt-16 bg-white rounded-xl shadow max-w-xl mx-auto">
        <FeedbackForm />
      </section>
    </div>
  )
}

export default FeedbackView
