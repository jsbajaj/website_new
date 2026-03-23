import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Only activate on true pointer devices
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const pos  = { x: -200, y: -200 }
    const rPos = { x: -200, y: -200 }
    let rafId  = null

    /* ---- track mouse ---- */
    const onMove = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
      dot.classList.add('dot-vis')
      ring.classList.add('ring-vis')
    }
    const onLeave  = () => { dot.classList.remove('dot-vis'); ring.classList.remove('ring-vis') }
    const onEnter  = () => { dot.classList.add('dot-vis');    ring.classList.add('ring-vis')    }

    document.addEventListener('mousemove',  onMove,   { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    /* ---- hover / click states via delegation ---- */
    const onOver = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, select, label')) {
        ring.classList.add('ring-hover')
        dot.classList.add('dot-hover')
      } else {
        ring.classList.remove('ring-hover')
        dot.classList.remove('dot-hover')
      }
    }
    const onClick = () => {
      ring.classList.add('ring-click')
      dot.classList.add('dot-click')
      setTimeout(() => {
        ring.classList.remove('ring-click')
        dot.classList.remove('dot-click')
      }, 280)
    }
    document.addEventListener('mouseover', onOver)
    document.addEventListener('click',     onClick)

    /* ---- animation loop ---- */
    const LERP = 0.115   // ring lag factor

    const loop = () => {
      // Dot snaps exactly
      dot.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`

      // Ring lerps toward mouse
      rPos.x += (pos.x - rPos.x) * LERP
      rPos.y += (pos.y - rPos.y) * LERP
      ring.style.transform = `translate(${rPos.x}px, ${rPos.y}px) translate(-50%, -50%)`

      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('mousemove',  onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseover',  onOver)
      document.removeEventListener('click',      onClick)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
