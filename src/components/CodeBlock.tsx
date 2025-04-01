import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styles from './CodeBlock.module.css'

interface CodeBlockProps {
  children: string
  language?: string
  title?: string
}

export default function CodeBlock({
  children,
  language = 'javascript',
  title,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleCodePenImport = () => {
    const codePenData = {
      title: title || 'Code Example',
      html: '',
      css: '',
      js: children,
      editors: '001',
      layout: 'left',
      css_pre_processor: 'none',
      css_starter: 'normalize',
      css_vendor: 'neither',
      js_library: 'none',
      js_pre_processor: 'none',
      js_modern: true,
      js_version: 'latest',
      html_classes: '',
      head: '',
      css_prefix: 'neither',
      css_reset: 'normalize',
    }

    const form = document.createElement('form')
    form.method = 'POST'
    form.action = 'https://codepen.io/pen/define'
    form.target = '_blank'

    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = 'data'
    input.value = JSON.stringify(codePenData)

    form.appendChild(input)
    document.body.appendChild(form)
    form.submit()
    document.body.removeChild(form)
  }

  return (
    <div className={styles.codeBlock}>
      <div className={styles.codeHeader}>
        {title && <span className={styles.codeTitle}>{title}</span>}
        <div className={styles.codeActions}>
          <CopyToClipboard text={children} onCopy={handleCopy}>
            <button className={styles.codeButton}>
              {copied ? '복사됨!' : '복사'}
            </button>
          </CopyToClipboard>
          <button className={styles.codeButton} onClick={handleCodePenImport}>
            CodePen
          </button>
        </div>
      </div>
      <pre className={styles.codeContent}>
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </div>
  )
}
