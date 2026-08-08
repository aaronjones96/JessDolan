import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

  collections: {
    blog: collection({
      label: 'Blog',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        pubDate: fields.date({ label: 'Publish Date' }),
        updatedDate: fields.date({ label: 'Updated Date' }),
        heroImage: fields.image({
          label: 'Hero Image',
          directory: 'src/assets',
          publicPath: '../../assets/',
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value,
        }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),

    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        pubDate: fields.date({ label: 'Publish Date' }),
        updatedDate: fields.date({ label: 'Updated Date' }),
        heroImage: fields.image({
          label: 'Hero Image',
          directory: 'src/assets',
          publicPath: '../../assets/',
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value,
        }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },

  singletons: {
    site: singleton({
      label: 'Site',
      path: 'src/site-config',
      format: { data: 'yaml' },
      schema: {
        author: fields.object({
          name: fields.text({ label: 'Name' }),
          role: fields.text({ label: 'Role' }),
          bio: fields.text({ label: 'Bio', multiline: true }),
          location: fields.text({ label: 'Location' }),
        }),
        social: fields.array(
          fields.object({
            id: fields.text({ label: 'ID' }),
            label: fields.text({ label: 'Label' }),
            href: fields.text({ label: 'URL' }),
          }),
          { label: 'Social Links', itemLabel: (props) => props.fields.label.value },
        ),
      },
    }),

    about: singleton({
      label: 'About',
      path: 'src/content/about',
      format: { data: 'yaml' },
      schema: {
        content: fields.object({
          intro: fields.text({ label: 'Intro paragraph', multiline: true }),
          approach: fields.text({ label: 'Approach paragraph', multiline: true }),
          collaboration: fields.text({ label: 'Collaboration paragraph', multiline: true }),
        }),
      },
    }),

    workSection: singleton({
      label: 'Homepage — Work Section',
      path: 'src/content/work-section',
      format: { data: 'yaml' },
      schema: {
        content: fields.object({
          designBlurb: fields.text({ label: 'Design blurb', multiline: true }),
          photographyBlurb: fields.text({ label: 'Photography blurb', multiline: true }),
        }),
      },
    }),

    approach: singleton({
      label: 'Approach',
      path: 'src/content/approach',
      format: { data: 'yaml' },
      schema: {
        items: fields.array(
          fields.object({
            title: fields.text({ label: 'Title' }),
            description: fields.text({ label: 'Description', multiline: true }),
          }),
          { label: 'Items', itemLabel: (props) => props.fields.title.value || 'Item' },
        ),
      },
    }),

    contact: singleton({
      label: 'Contact CTA',
      path: 'src/content/contact',
      format: { data: 'yaml' },
      schema: {
        content: fields.object({
          heading: fields.text({ label: 'Heading' }),
        }),
      },
    }),

    galleryDesign: singleton({
      label: 'Gallery — Design',
      path: 'src/content/gallery-design',
      format: { data: 'yaml' },
      schema: {
        images: fields.array(
          fields.object({
            image: fields.image({
              label: 'Image',
              directory: 'src/assets/Design',
              publicPath: '../assets/Design/',
            }),
            alt: fields.text({ label: 'Alt text' }),
          }),
          { label: 'Images', itemLabel: (props) => props.fields.alt.value || 'Image' },
        ),
      },
    }),

    galleryPhotography: singleton({
      label: 'Gallery — Photography',
      path: 'src/content/gallery-photography',
      format: { data: 'yaml' },
      schema: {
        images: fields.array(
          fields.object({
            image: fields.image({
              label: 'Image',
              directory: 'src/assets/Photography files',
              publicPath: '../assets/Photography files/',
            }),
            alt: fields.text({ label: 'Alt text' }),
          }),
          { label: 'Images', itemLabel: (props) => props.fields.alt.value || 'Image' },
        ),
      },
    }),
  },
});
