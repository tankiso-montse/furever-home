

export const fadeIn = {
  initial : { opacity: 0},
  whileInView: { opacity: 1 },
  viewport:{ once: true }
}

export const scaleUp = {
  initial: false,
  onHover: { scale: 1 },
}

export const slideInFromTop = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
}

export const slideInFromBottom = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
}