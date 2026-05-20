import { useEffect, useState } from 'react'

export function useTypingEffect(texts, typingSpeed = 80, deletingSpeed = 40, pause = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = texts[textIndex % texts.length]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = current.slice(0, displayText.length + 1)
          setDisplayText(next)

          if (next === current) {
            setTimeout(() => setIsDeleting(true), pause)
          }
        } else {
          const next = current.slice(0, displayText.length - 1)
          setDisplayText(next)

          if (next === '') {
            setIsDeleting(false)
            setTextIndex((i) => (i + 1) % texts.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pause])

  return displayText
}
