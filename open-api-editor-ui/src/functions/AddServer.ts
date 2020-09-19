import { servers } from "@/state"

const addServer = () => {
  servers.push({
    url: "",
    description: "",
    variables: []
  });
}

export default addServer;