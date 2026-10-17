export function slug(s) {
  return s.trim().toLowerCase().replace(/\s+/g, '-');
}

export function initials(name) {
  return name.split(' ').map((w) => w[0]).join('').toUpperCase();
}

// shortens s to n characters, with an ellipsis when it cuts
export function truncate(s, n) {
  return s.slice(0, n) + '...';
}
