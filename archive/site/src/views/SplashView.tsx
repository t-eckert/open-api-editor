import LoginWithGitHubButton from "../components/buttons/LoginWithGitHubButton"

const SplashView = () => {
  return (
    <main className="mx-auto max-w-6xl pt-8 sm:pt-16 md:pt-32 px-2 flex flex-col gap-16 sm:gap-12 w-screen">
      <h1 className="mx-auto md:mx-0 text-center md:text-left text-5xl sm:text-6xl md:text-8xl font-normal text-yellow-600 max-w-2lg">
        Open API Editor
      </h1>
      <section className="mx-auto md:mx-0 text-center md:text-left text-xl md:text-2xl font-normal text-gray-800 max-w-lg">
        <p className="mb-4">
          Maintain your Open API documents without reading the specification.
        </p>
        <p>
          To get started,{" "}
          <LoginWithGitHubButton className="font-medium transition hover:underline hover:text-yellow-600" />
          .
        </p>
      </section>
    </main>
  )
}

export default SplashView
