import { describe, it, expect } from 'vitest';
import { slug, initials } from '../src/text.js';

describe('text', () => {
  it('slug lower-cases and joins the words', () => {
    expect(slug(' Hello World ')).toBe('hello-world');
  });

  it('initials takes the first letter of each word', () => {
    expect(initials('ada lovelace')).toBe('AL');
  });
});
