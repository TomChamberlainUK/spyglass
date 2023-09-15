import * as React from 'react';

export default function Header({ text }: { text: string }) {
  return (
    <header>
      {text}
    </header>
  );
};
