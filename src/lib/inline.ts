// Markdown en ligne minimal pour les données du frontmatter : **gras**, *italique*.
// Tout le reste est échappé.
const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

import { typoFr } from './typo-fr';

export function inline(s: string): string {
  return esc(typoFr(s))
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}

const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
/** "2026-10-22" -> "22 octobre 2026" */
export function dateFr(iso: string): string {
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return iso;
  return `${Number(m[3])} ${mois[Number(m[2]) - 1]} ${m[1]}`;
}
