import { observer } from "mobx-react-lite"

import { useDocumentStore } from "../../../hooks"

const TextEditor = observer(({ className }: { className?: string }) => {
  const documentStore = useDocumentStore()

  return (
    <section
      className={[
        className,
        "p-2 bg-white rounded-xl shadow-md h-96 max-w-7xl",
      ].join(" ")}
    >
      <pre>
        <code className="overflow-scroll">
          {JSON.stringify(documentStore.getOpenApiDocument(), undefined, 4)}
        </code>
      </pre>
    </section>
  )
})

export default TextEditor
