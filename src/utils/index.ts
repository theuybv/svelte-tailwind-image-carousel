export const intersectRect = (aElement: HTMLElement, bElement: HTMLElement) => {
  const a = aElement.getBoundingClientRect()
  const b = bElement.getBoundingClientRect()
  return (
    a.left <= b.right &&
    b.left <= a.right &&
    a.top <= b.bottom &&
    b.top <= a.bottom
  )
}
