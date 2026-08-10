import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()).default([]),
		}),
});

const projects = defineCollection({
	// Load Markdown and MDX files in the `src/content/projects/` directory.
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()).default([]),
		}),
});

const site = defineCollection({
	loader: file('src/site-config.yaml'),
});

// These files each have a single top-level key ("content" or "items"). The
// file() loader uses that key as the entry id, and the *value* under it
// becomes the entry's data directly (not re-nested under the key again).
// Keep the wrapper key in sync with keystatic.config.ts, which writes it.
const about = defineCollection({
	loader: file('src/content/about.yaml'),
	schema: z.object({
		intro: z.string(),
		approach: z.string(),
		collaboration: z.string(),
	}),
});

const workSection = defineCollection({
	loader: file('src/content/work-section.yaml'),
	schema: z.object({
		marketingBlurb: z.string(),
		packagingBlurb: z.string(),
		freelanceBlurb: z.string(),
	}),
});

const approach = defineCollection({
	loader: file('src/content/approach.yaml'),
	schema: z.array(
		z.object({
			title: z.string(),
			description: z.string(),
		}),
	),
});

const contact = defineCollection({
	loader: file('src/content/contact.yaml'),
	schema: z.object({
		heading: z.string(),
	}),
});

// gallery-*.yaml root shape: { images: [{ image, alt }] }
// file() loader turns each top-level key into an entry, so this collection
// has a single entry with id "images" whose data is the image array.
const galleryDesign = defineCollection({
	loader: file('src/content/gallery-design.yaml'),
	schema: ({ image }) =>
		z.array(
			z.object({
				image: image(),
				alt: z.string(),
			}),
		),
});

const galleryPhotography = defineCollection({
	loader: file('src/content/gallery-photography.yaml'),
	schema: ({ image }) =>
		z.array(
			z.object({
				image: image(),
				alt: z.string(),
			}),
		),
});

const galleryFreelance = defineCollection({
	loader: file('src/content/gallery-freelance.yaml'),
	schema: ({ image }) =>
		z.array(
			z.object({
				image: image(),
				alt: z.string(),
			}),
		),
});

export const collections = {
	blog,
	projects,
	site,
	about,
	workSection,
	approach,
	contact,
	galleryDesign,
	galleryPhotography,
	galleryFreelance,
};
