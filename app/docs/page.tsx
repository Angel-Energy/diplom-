import fs from 'fs';
import path from 'path';

import Link from 'next/link';
import React from 'react';
import Markdown from 'react-markdown';

const indexPath = path.join(process.cwd(), 'docs', 'INDEX.md');
const indexContent = fs.readFileSync(indexPath, 'utf8');

export default function DocsIndexPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[60vh] py-8 px-2'>
      <div className='w-full max-w-xl mb-4 flex justify-start'>
        <Link
          href='/'
          className='text-cyan-400 hover:text-cyan-300 text-xs font-semibold transition-colors'
        >
          ← На главную
        </Link>
      </div>
      <article className='prose prose-invert prose-sm max-w-xl w-full'>
        <Markdown>{indexContent}</Markdown>
      </article>
    </div>
  );
}
