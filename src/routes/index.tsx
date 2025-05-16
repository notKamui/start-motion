import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { motion } from 'motion/react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <button onClick={() => setVisible((old) => !old)}>Toggle</button>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : -20 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        Hello World
      </motion.div>
    </div>
  )
}
