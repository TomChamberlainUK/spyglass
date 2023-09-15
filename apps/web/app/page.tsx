import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | BBC Spyglass'
}

export default function Page() {
  return (
    <>
      <h1>
        BBC Spyglass
      </h1>
      <nav>
        <Link href={'/articles'}>
          Articles
        </Link>
      </nav>
    </>
  );
}
