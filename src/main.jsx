// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DeckOfCards from '@/components/deck-of-cards/deck-of-cards.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <DeckOfCards />
  </>,
)
