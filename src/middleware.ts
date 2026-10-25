// Typographie française appliquée à toute page HTML : apostrophes courbes et espaces insécables
// dans les textes (schémas SVG et légendes compris), et apostrophes courbes dans les attributs
// lus par les lecteurs d'écran. Les balises <script>, <style>, <pre> et <code> ne sont pas touchées
// (le code doit rester copiable).
import { defineMiddleware } from 'astro:middleware';
import { typoFr } from './lib/typo-fr';

const APOSTROPHE = /([A-Za-zÀ-ÿ])(?:'|&#39;|&#x27;)(?=[A-Za-zÀ-ÿ])/g;
const ATTRIBUT = /(\s(?:aria-label|title|alt|content)=")([^"]*)(")/g;

export function typoHtml(html: string): string {
  return html
    .split(/(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<pre[\s>][\s\S]*?<\/pre>|<code[\s>][\s\S]*?<\/code>|<[^>]+>)/)
    .map((part, i) => {
      if (i % 2 === 0) return typoFr(part.replace(APOSTROPHE, '$1’'));
      if (/^<(script|style|pre|code)[\s>]/.test(part)) return part;
      return part.replace(ATTRIBUT, (_m, a: string, v: string, z: string) => a + v.replace(APOSTROPHE, '$1’') + z);
    })
    .join('');
}

export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();
  if (!response.headers.get('content-type')?.includes('text/html')) return response;
  return new Response(typoHtml(await response.text()), { status: response.status, headers: response.headers });
});
