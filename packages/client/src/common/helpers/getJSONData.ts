export function getJSONData<T>(elementId: string): T | undefined {
  const content = document.getElementById(elementId)?.textContent

  if (content) {
    return JSON.parse(content) as T
  }
}
