import { servers } from "@/state"

export const addServer = () => {
  servers.push({
    url: "",
    description: "",
    variables: []
  });
}

export const removeServer = (index: number) => {
  if (index < 0 || servers.length < index) {
    return;
  }

  servers.splice(index, 1);
}