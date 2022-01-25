
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
        name: 'content',
        type: 'array',
        title: 'Page sections',
        description: 'Add, edit, and reorder sections',
        of: [
            {type: 'hero'},
            {type: 'oneColumnText'},
            {type: 'twoColumnText'},
            {type: 'oneColumnList'},
            {type: 'twoColumnList'},
            {type: 'testimonials'},
            {type: 'cvTimeline'},
            {type: 'roleComparison'},
           

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