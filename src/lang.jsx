import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'aai-lang'
const LangContext = createContext(null)

// Storage can throw (private mode, in-app QR scanner browsers) — the page must still work.
function readSaved() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'en' || saved === 'mr' ? saved : 'mr'
  } catch {
    return 'mr'
  }
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(readSaved)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (next) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // not saved; choice still applies for this visit
    }
  }

  const t = (text) => text[lang]

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

// oxlint-disable-next-line react/only-export-components
export function useLang() {
  const value = useContext(LangContext)
  if (!value) throw new Error('useLang must be used inside <LangProvider>')
  return value
}
