import { source } from '@/lib/source'
import { DocsLayout, type DocsLayoutProps } from 'fumadocs-ui/layouts/docs'
import { baseOptions } from '@/lib/layout.shared'
import { Book } from 'lucide-react'
import { BracesIcon, CodeIcon, ImagePlusIcon, WorkflowIcon } from 'lucide-react'

const docsOptions: DocsLayoutProps = {
  ...baseOptions(),
  tree: source.pageTree,
  sidebar: {
    tabs: [
      {
        title: 'API Docs',
        
        url: '/docs',
        icon: <Book className="h-4 w-4" />,
      },
      {
        title: 'python-sdk',
        
        url: '/docs/python-sdk',
        icon: <CodeIcon className="text-green-300 h-4 w-4" />,
      },
    ],
  },
}

export default function Layout({ children }: LayoutProps<'/'>) {
  return <DocsLayout {...docsOptions}>{children}</DocsLayout>
}
