// Texte en ligne avec renvois : « [[11b]] » devient un lien « concept 11b » vers la section ;
// « [[11b:11b]] » fixe le texte du lien.
import { inline } from './inline';
import { conceptOf } from '../data/parcours';
import { conceptUrl } from './concepts';

export function avecRenvois(s: string): string {
  return inline(s).replace(/\[\[([A-Za-z0-9]+)(?::([^\]]+))?\]\]/g, (_m, ref: string, texte?: string) => {
    const n = conceptOf(ref);
    const hash = ref.length > n.length ? ref : '';
    return `<a href="${conceptUrl(n, hash)}">${texte ?? `concept ${ref}`}</a>`;
  });
}
