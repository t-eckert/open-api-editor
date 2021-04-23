import { useState } from "react"

import CloseIcon from "../../icons/CloseIcon"
import General from "./General"

const Section = (props: {
  name: string
  isActive: boolean
  onClick: any
  activeClassName: string
  notActiveClassName: string
}) => {
  const className =
    "px-4 py-0.5 font-medium " +
    (props.isActive ? props.activeClassName : props.notActiveClassName)

  return <li className={className}>{props.name}</li>
}

const Path = () => {
  const [active, setActive] = useState("general")

  const sections = [
    {
      name: "General",
      isActive: active === "general",
      onClick: () => setActive("general"),
      activeClassName: "bg-yellow-500 text-white",
      notActiveClassName: "cursor-pointer hover:bg-yellow-100",
    },
    {
      name: "GET",
      isActive: active === "get",
      onClick: () => setActive("get"),
      activeClassName: "bg-yellow-500 text-white",
      notActiveClassName: "cursor-pointer hover:bg-yellow-100",
    },
    {
      name: "PUT",
      isActive: active === "put",
      onClick: () => setActive("put"),
      activeClassName: "bg-yellow-500 text-white",
      notActiveClassName: "cursor-pointer hover:bg-yellow-100",
    },
    {
      name: "POST",
      isActive: active === "post",
      onClick: () => setActive("post"),
      activeClassName: "bg-yellow-500 text-white",
      notActiveClassName: "cursor-pointer hover:bg-yellow-100",
    },
    {
      name: "DELETE",
      isActive: active === "delete",
      onClick: () => setActive("delete"),
      activeClassName: "bg-yellow-500 text-white",
      notActiveClassName: "cursor-pointer hover:bg-yellow-100",
    },
    {
      name: "OPTIONS",
      isActive: active === "options",
      onClick: () => setActive("options"),
      activeClassName: "bg-yellow-500 text-white",
      notActiveClassName: "cursor-pointer hover:bg-yellow-100",
    },
    {
      name: "HEAD",
      isActive: active === "head",
      onClick: () => setActive("head"),
      activeClassName: "bg-yellow-500 text-white",
      notActiveClassName: "cursor-pointer hover:bg-yellow-100",
    },
    {
      name: "PATCH",
      isActive: active === "patch",
      onClick: () => setActive("patch"),
      activeClassName: "bg-yellow-500 text-white",
      notActiveClassName: "cursor-pointer hover:bg-yellow-100",
    },
    {
      name: "TRACE",
      isActive: active === "trace",
      onClick: () => setActive("trace"),
      activeClassName: "bg-yellow-500 text-white",
      notActiveClassName: "cursor-pointer hover:bg-yellow-100",
    },
    {
      name: "Servers",
      isActive: active === "servers",
      onClick: () => setActive("servers"),
      activeClassName: "bg-yellow-500 text-white",
      notActiveClassName: "cursor-pointer hover:bg-yellow-100",
    },
    {
      name: "Parameters",
      isActive: active === "parameters",
      onClick: () => setActive("parameters"),
      activeClassName: "bg-yellow-500 text-white",
      notActiveClassName: "cursor-pointer hover:bg-yellow-100",
    },
  ].map((section) => (
    <Section
      name={section.name}
      isActive={section.isActive}
      onClick={section.onClick}
      activeClassName={section.activeClassName}
      notActiveClassName={section.notActiveClassName}
    />
  ))

  return (
    <section className="bg-gray-50 rounded-xl shadow flex flex-col">
      <header className="px-4 py-1 flex items-center justify-between">
        <h2 className="font-medium text-gray-900">Path</h2>
        <CloseIcon classes="h-4 w-4" />
      </header>
      <main className="flex flex-row">
        <ul className="py-1 flex flex-col">{sections}</ul>
        <div className="p-4 bg-white rounded-xl flex-grow flex flex-col gap-2">
          {active === "general" ? <General /> : ""}
        </div>
      </main>
    </section>
  )
}

export default Path
