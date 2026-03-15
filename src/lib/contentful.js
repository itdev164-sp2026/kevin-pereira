import { createClient } from "contentful";

export const client = createClient({
  space: "YOUR_SPACE_ID",
  accessToken: "YOUR_ACCESS_TOKEN",
});