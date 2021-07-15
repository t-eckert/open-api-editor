import { useEffect, useState } from "react"

const isClickOutsideReference = (reference: any, e: any) => {
  return reference && !reference.current?.contains(e.target)
}

/** `useClickToggler` hook
 * 
 * Extends the behavior of useState for a boolean with a listener that will set the state to false
 * if a click occurs outside of the given nodeRef.
 * 
 * This behavior is the same as what is seen in native dropdowns. A user can toggle the state of the 
 * dropdown by clicking on it in a compressed state and it will expand. The user can compress the 
 * dropdown again by clicking either the input box or anywhere else on the screen.
 * 
 * @param nodeRef DOM node outside of which, clicks will set the toggleMode to false
 * @param initialToggle state of the toggle on initial render
 */
const useClickToggler = (nodeRef: any, initialToggle: boolean) => {
  const [toggleMode, setToggleMode] = useState(initialToggle)

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (isClickOutsideReference(nodeRef, e)) setToggleMode(false)
    }

    if (toggleMode)
      document.addEventListener("mousedown", handleClickOutside)
    else
      document.removeEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [toggleMode, nodeRef])

  return { toggleMode, setToggleMode }
}

export default useClickToggler