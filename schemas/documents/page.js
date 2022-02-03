
export default {
  
    // Setup a 'document' type to house the page builder field
    
    name: "page",
    type: "document",
    title: "Page",
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
          },
          {
            name: 'navMenu',
            type: 'reference',
            title: 'Navigation menu',
            // weak: true, // Uncomment if you want to be able to delete navigation even though pages refer to it
            to: [{ type: 'navigationMenu' }],
            description: 'Which nav menu should be shown, if any',
          },
      {
        name: 'content',
        type: 'array',
        title: 'Page sections',
        description: 'Add, edit, and reorder sections',
        of: [
            {type: 'hero'},
            {type: 'iconPlug'},
            {type: 'oneColumnText'},
            {type: 'twoColumnText'},
            {type: 'oneColumnList'},
            {type: 'twoColumnList'},
            {type: 'testimonials'},
            {type: 'cvTimeline'},
            {type: 'roleComparison'},
            {type: 'comparisonLists'},
            {type: 'horizontalBlocks'},


           

    //       { type: 'hero' }, // hero.js (same applies for the other types)
    //       { type: 'textWithIllustration' },
    //       { type: 'callToAction' },
    //       { type: 'gallery' },
    //       { type: 'form' },
    //       { type: 'video' },
    //       // etc...
    //       ]
    //   }
    ]
  },
]
}