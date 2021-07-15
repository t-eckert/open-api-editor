import { OpenApiVersion } from "../types"
import formatter_3_0_0 from "./formatter_3_0_0"

const formatters: Map<OpenApiVersion, Function> = new Map([["3.0.0", formatter_3_0_0]])

export default formatters