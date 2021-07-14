import { useQuery } from "react-query"
import { request, gql } from "graphql-request"

import { graphClient } from "../index"
import { API } from "../config"

/** `useChangelog` hook
 * 
 * Fetches changelog
 */
const useChangelog = () => {
  const query = "{changelog}"

  return useQuery("changelog", async () => {
    const response = await fetch(`${API}/graphql`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: query })
      })
    return response.json()
  })
}

export default useChangelog