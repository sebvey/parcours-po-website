import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Un fichier par concept et par langue : src/content/concepts/<langue>/NN-slug.mdx
// Le corps (MDX) est l'onglet « Comprendre ». Le frontmatter porte l'en-tête
// et les données structurées des onglets « Consensus ou école » et « Sources ».
const pastilleKinds = z.enum(['consensus', 'ecole', 'cours']);

const item = z.object({
  /** Texte de l'élément. Markdown en ligne minimal : **gras**, *italique*. */
  texte: z.string(),
  /** Auteur ou texte de référence (colonnes consensus et choix d'école). */
  auteur: z.string().optional(),
  /** Références, par exemple ["S1", "S2"]. */
  refs: z.array(z.string()).default([]),
});

const concepts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/concepts' }),
  schema: z.object({
    /** Numéro affiché : "9", "A1". */
    numero: z.string(),
    titre: z.string(),
    /** L'objectif en une phrase. */
    objectif: z.string(),
    /** Numéros des concepts prérequis. */
    prerequis: z.array(z.string()).default([]),
    /** Une phrase pour les moteurs de recherche et les aperçus. */
    description: z.string(),
    /** Fiches du cours dont la page dérive : version du cours et empreintes sha256.
     *  Écrit par `npm run check-alignment -- --stamp`, lu par `npm run check-alignment`. */
    alignement: z.object({
      coursVersion: z.string(),
      fiche: z.string().length(64),
      sources: z.string().length(64),
    }),
    ecoles: z.object({
      consensus: z.array(item),
      ecole: z.array(item),
      cours: z.array(item),
      /** Notions voisines, à ne pas confondre. */
      voisines: z.array(item).default([]),
    }),
    sources: z.object({
      affirmations: z.array(
        z.object({
          affirmation: z.string(),
          kind: pastilleKinds.optional(),
          refs: z.array(z.string()),
          verifie: z.string(),
        }),
      ),
      references: z.array(
        z.object({
          id: z.string(),
          texte: z.string(),
          url: z.url().optional(),
          type: z.string(),
          consultee: z.string(),
        }),
      ),
      nonVerifie: z.array(z.string()),
    }),
  }),
});

export const collections = { concepts };
