import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import type { SyntaxHighlighterProps } from 'react-syntax-highlighter'

interface CodeBlockProps {
  code: string
  language?: string
  showLineNumbers?: boolean
}

// Custom theme inspired by fuyukaki-ui's warm & organic design
const fuyukakiTheme: SyntaxHighlighterProps['style'] = {
  'code[class*="language-"]': {
    color: '#4E3D35', // Shibu Brown (foreground)
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    fontSize: '0.875rem',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    tabSize: 2,
  },
  'pre[class*="language-"]': {
    color: '#4E3D35',
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    fontSize: '0.875rem',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    tabSize: 2,
    padding: '1rem',
    margin: 0,
    overflow: 'auto',
    background: '#FCEDE6', // Pale Orange (card background)
  },
  comment: {
    color: '#9B8A7E', // Muted brown
    fontStyle: 'italic',
  },
  prolog: {
    color: '#9B8A7E',
  },
  doctype: {
    color: '#9B8A7E',
  },
  cdata: {
    color: '#9B8A7E',
  },
  punctuation: {
    color: '#6A8347', // Leaf Green (secondary)
  },
  property: {
    color: '#EB6101', // Persimmon (primary)
  },
  tag: {
    color: '#EB6101',
  },
  boolean: {
    color: '#C97C3E', // Warm orange-brown
  },
  number: {
    color: '#C97C3E',
  },
  constant: {
    color: '#C97C3E',
  },
  symbol: {
    color: '#C97C3E',
  },
  deleted: {
    color: '#B85C4B', // Warm red-brown
  },
  selector: {
    color: '#6A8347', // Leaf Green
  },
  'attr-name': {
    color: '#6A8347',
  },
  string: {
    color: '#7A9457', // Lighter green
  },
  char: {
    color: '#7A9457',
  },
  builtin: {
    color: '#7A9457',
  },
  inserted: {
    color: '#7A9457',
  },
  operator: {
    color: '#8B6F47', // Warm brown
  },
  entity: {
    color: '#8B6F47',
  },
  url: {
    color: '#8B6F47',
  },
  '.language-css .token.string': {
    color: '#8B6F47',
  },
  '.style .token.string': {
    color: '#8B6F47',
  },
  variable: {
    color: '#D98B3A', // Warm amber
  },
  atrule: {
    color: '#D98B3A',
  },
  'attr-value': {
    color: '#7A9457',
  },
  function: {
    color: '#EB6101', // Persimmon
  },
  'class-name': {
    color: '#D98B3A',
  },
  keyword: {
    color: '#A86A3D', // Warm terracotta
  },
  regex: {
    color: '#C97C3E',
  },
  important: {
    color: '#B85C4B',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
}

export function CodeBlock({
  code,
  language = 'tsx',
  showLineNumbers = false,
}: CodeBlockProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-x-auto">
      <SyntaxHighlighter
        language={language}
        style={fuyukakiTheme}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          padding: '0.75rem',
          fontSize: '0.8125rem',
          borderRadius: '0.5rem',
          background: '#FCEDE6',
        }}
        codeTagProps={{
          style: {
            fontSize: '0.8125rem',
            lineHeight: '1.6',
          },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

interface InlineCodeProps {
  children: string
}

export function InlineCode({ children }: InlineCodeProps) {
  return (
    <code className="px-2 py-1 bg-card border border-border rounded text-sm font-mono text-foreground">
      {children}
    </code>
  )
}
