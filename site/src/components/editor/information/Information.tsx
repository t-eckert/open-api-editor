import { useState } from "react"

import ApiInformation from "./ApiInformation"
import Button from "../../buttons/Button"
import ContactInformation from "./ContactInformation"
import License from "./License"

type Props = {
  className?: string
}

const Information = (props: Props) => {
  const [showContactInfo, setShowContactInfo] = useState(false)
  const [showLicense, setShowLicense] = useState(false)

  const contactInfo = showContactInfo ? (
    <ContactInformation closeAction={() => setShowContactInfo(false)} />
  ) : (
    ""
  )

  const license = showLicense ? (
    <License closeAction={() => setShowLicense(false)} />
  ) : (
    ""
  )

  const contactInfoButton = !showContactInfo ? (
    <Button role="secondary" action={() => setShowContactInfo(true)}>
      Add Contact Info
    </Button>
  ) : (
    ""
  )

  const licenseButton = !showLicense ? (
    <Button role="secondary" action={() => setShowLicense(true)}>
      Add License
    </Button>
  ) : (
    ""
  )

  return (
    <section
      className={"max-w-4xl mx-auto flex flex-col gap-2 " + props.className}
    >
      <h2 className="text-xl font-medium text-gray-900">Information</h2>
      <ApiInformation />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-start">
        {contactInfo}
        {license}
        <div className="flex flex-row gap-2 col-start-2 justify-end">
          {contactInfoButton}
          {licenseButton}
        </div>
      </div>
    </section>
  )
}

export default Information
