'use client'

import { useState } from 'react'
import { Heart, Sparkles, Stars } from 'lucide-react'

const noMessages = [
  'Are you sure? 🥺',
  'My heart is doing a tiny sad wobble…',
  'That button seems a little shy!',
  'Try the much cuter button instead ♡',
]

export default function Page() {
  const [forgiven, setForgiven] = useState(false)
  const [noMessage, setNoMessage] = useState('')
  const [noPosition, setNoPosition] = useState({ top: 70, left: 90})

function dodgeNo() {
  const nextIndex = noMessages.indexOf(noMessage) + 1

  setNoMessage(noMessages[nextIndex % noMessages.length])

  const positions = [
    { top: 15, left: 55 },
    { top: 15, left: 90 },
    { top: 85, left: 55 },
    { top: 85, left: 90 },
    { top: 15, left: 75 },
    { top: 85, left: 75 },
    { top: 50, left: 90 },
  ]

  setNoPosition(
    positions[nextIndex % positions.length]
  )
}
  if (forgiven) {
    return (
      <main className="apology-page celebration-page">
        <div className="confetti" aria-hidden="true">✦ ♡ ✧ ♡ ✦</div>
        <section className="apology-card celebration-card" aria-live="polite">
          <div className="icon-orbit"><Heart className="heart-icon filled-heart" aria-hidden="true" fill="currentColor" /></div>
          <p className="eyebrow">best news ever</p>
          <h1>Yay! I love you<br /><span>so, so much.</span></h1>
          <p className="body-copy">Thank you for forgiving me. I promise to listen better, love louder, and make it up to you properly.</p>
          <div className="promise-note"><Sparkles size={18} aria-hidden="true" /><span>Officially back on Team Us</span><Sparkles size={18} aria-hidden="true" /></div>
          <p className="signature">with all my love,<br /><strong>your very sorry person</strong></p>
        </section>
      </main>
    )
  }

  return (
    <main className="apology-page">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="floating-heart heart-one" aria-hidden="true">♡</div>
      <div className="floating-heart heart-two" aria-hidden="true">♡</div>
      <div className="floating-heart heart-three" aria-hidden="true">♡</div>
      <div className="sticker-sprinkles" aria-hidden="true">
        {Array.from({ length: 140 }, (_, index) => {
          const column = index % 14
          const row = Math.floor(index / 14)
          const size = 22 + ((index * 17) % 54)
          const left = (column * 7.7 + ((row * 11) % 6)) % 100
          const top = (row * 10.5 + ((index * 13) % 8)) % 100
          const rotation = ((index * 29) % 36) - 18
          return (
            <img
              key={index}
              className="sprinkle-sticker"
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mF0KIgUNM7f1MDUyptYYQULI7OLkSB.png"
              alt=""
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                transform: `rotate(${rotation}deg)`,
                animationDelay: `${-(index % 12) * 0.45}s`,
              }}
            />
          )
        })}
      </div>

      <section className="apology-card" aria-labelledby="apology-title">
        <div className="top-mark"><Stars size={16} aria-hidden="true" /><span>a little note from me</span><Stars size={16} aria-hidden="true" /></div>
        <img
          className="apology-sticker"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mF0KIgUNM7f1MDUyptYYQULI7OLkSB.png"
          alt="Cute apologetic white character with an orange beak"
        />
        <p className="eyebrow">dear favorite person</p>
        <h1 id="apology-title">I&apos;m really<br /><span>sorry.</span></h1>
        <div className="rule" aria-hidden="true"><span /><Heart size={14} fill="currentColor" /><span /></div>
        <p className="body-copy">I&apos;m sorry I said I&apos;m taking some space from this. I didn&apos;t mean it. I was just upset, I did not mean it. You mean the whole world to me, and I&apos;d really love the chance to make things right.</p>
        <p className="question">Will you forgive me?</p>

    <div className="button-playground" aria-label="Forgiveness choices">
  <button
    className="yes-button"
    type="button"
    onClick={() => setForgiven(true)}
  >
    <Heart size={19} fill="currentColor" aria-hidden="true" />
    Yes, I forgive you
  </button>

  <button
    className="no-button"
    type="button"
    style={{
      top: `${noPosition.top}%`,
      left: `${noPosition.left}%`,
    }}
    onPointerEnter={dodgeNo}
    onFocus={dodgeNo}
    onTouchStart={dodgeNo}
    onClick={dodgeNo}
    aria-label="No, I do not forgive you yet"
  >
    No
  </button>
</div>
        <p className="no-message" aria-live="polite">{noMessage || 'The tiny button is feeling a little nervous.'}</p>
        <p className="footer-line">made with a very sorry heart <Heart size={13} fill="currentColor" aria-hidden="true" /></p>
      </section>
    </main>
  )
}
