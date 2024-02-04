export const randomizeArr = array => {
  const cloned = [...array]
  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[cloned[i], cloned[j]] = [cloned[j], cloned[i]]
  }

  return cloned
}