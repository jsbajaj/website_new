import { useEffect, useRef } from 'react'

const CODE_LINES = [
  'const endpoints = 150;',
  'ping 192.168.1.1',
  'import React from "react"',
  'git push origin main',
  'SELECT * FROM users;',
  '{ "status": 200, "ok": true }',
  'sudo systemctl restart',
  'npm run build',
  'function resolveTicket(id) {',
  'Active Directory',
  'ssh admin@server.local',
  'def detect_intrusion():',
  'useEffect(() => {}, [])',
  '{ "gpa": 3.55, "grad": "2026" }',
  'python main.py --verbose',
  'DNS lookup: 192.168.0.1',
  'git commit -m "feat: add auth"',
  'import pandas as pd',
  'DHCP lease renewed',
  'VPN handshake complete',
  'const user = await fetch("/api")',
  'LAN/WAN bridge established',
  'npm install react-icons',
  'TPM 2.0 check: PASSED',
  'git clone https://github.com/',
  '> Endpoint compliance: OK',
  'class IntrustionDetector:',
  'Windows Server 2019 Ready',
  'LDAP bind successful',
  'ifconfig eth0 up',
]

export default function CodeBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const items = []
    const COLS = 5   // spread across 5 horizontal bands

    CODE_LINES.forEach((text, i) => {
      const el = document.createElement('div')
      el.className = 'code-bg-item'
      el.textContent = text

      // Spread across viewport width deterministically
      const col       = i % COLS
      const colWidth  = 100 / COLS
      const leftPct   = col * colWidth + Math.random() * (colWidth * 0.6)
      el.style.left   = `${leftPct}%`

      // Random start height (negative = starts below viewport)
      const startY    = 100 + Math.random() * 60   // % below viewport
      el.style.top    = '0'

      // Speed variation
      const duration  = 22 + Math.random() * 28    // 22–50s per cycle
      const delay     = -(Math.random() * duration) // start mid-cycle

      el.style.animationDuration = `${duration}s`
      el.style.animationDelay   = `${delay}s`

      // Very subtle opacity (barely visible — adds texture without distraction)
      const opacity = 0.028 + Math.random() * 0.032
      el.style.opacity  = opacity

      // Size variety
      el.style.fontSize = `${10 + Math.random() * 3}px`

      // Subtle horizontal drift
      el.style.setProperty('--drift', `${(Math.random() - 0.5) * 60}px`)

      container.appendChild(el)
      items.push(el)
    })

    return () => { items.forEach(el => el.remove()) }
  }, [])

  return <div ref={containerRef} className="code-bg" aria-hidden="true" />
}
