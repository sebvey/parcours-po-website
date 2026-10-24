// Typographie française : espace insécable avant « : ; ? ! » et à l'intérieur des guillemets « ».
const NBSP = ' ';
const NNBSP = ' ';

export function typoFr(s: string): string {
  return s
    .replace(/[ \t]+([:»])/g, `${NBSP}$1`)
    .replace(/[ \t]+([;?!])/g, `${NNBSP}$1`)
    .replace(/(«)[ \t]+/g, `$1${NBSP}`)
    .replace(/([A-Za-zÀ-ÿ])'(?=[A-Za-zÀ-ÿ])/g, '$1’');
}

interface Node { type: string; value?: string; children?: Node[] }

/** Plugin remark : applique typoFr aux textes du Markdown/MDX (hors code). */
export function remarkTypoFr() {
  return (tree: Node) => {
    const walk = (n: Node) => {
      if (n.type === 'text' && typeof n.value === 'string') n.value = typoFr(n.value);
      if (n.type === 'code' || n.type === 'inlineCode') return;
      n.children?.forEach(walk);
    };
    walk(tree);
  };
}
