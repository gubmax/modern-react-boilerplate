export function getJSONData<T>(elementId: string): T {
  const content = document.getElementById(elementId)?.textContent ?? ''
  return JSON.parse(content) as T
}
