import { API_URL } from "./constants";

export function fetchData(
  options: { method: string; body: string },
  url?: string
): void {
  // It's a little weird, but I decided to do it
  // because that's how I use an import similar to the one in the lecture.
  let fetchURL = "";
  if (!url) {
    fetchURL = API_URL;
  } else {
    fetchURL = url;
  }
  console.log(`Sending error data to the server (${fetchURL}):`, options.body);
}
