import React from 'react'

import {
  mathInlineIcon,
  mathIcon,
  highlightIcon,
  highlightRender,
  tickIcon,
  crossIcon,
} from '../components/PortableTextEditorComponents'


export default {
    title: 'Simple Block Content',
    name: 'simpleBlockContent',
    type: 'array',
    of: [
      {
        title: 'Block',
        type: 'block',
        styles: [
            {title: 'H1', value: 'h1'},
           {title: 'H2', value: 'h2'},
           {title: 'H3', value: 'h3'},
           {title: 'H4', value: 'h4'},
           {title: 'H5', value: 'h5'},
           {title: 'H6', value: 'h6'},
           {title: 'H7', value: 'h7'},
           {title: 'Text Base', value: 'textBase'},
           {title: 'Text Large', value: 'textLg'},
           {title: 'Text XL', value: 'textXl'},
           {title: 'Text 2XL', value: 'text2Xl'},
           {title: 'Orange Underline', value: 'orangeUnderline'},

        ],
        marks: {
          decorators: [
            {title: 'Strong', value: 'strong'},
            {title: 'Emphasis', value: 'em'},
            {title: 'Italic', value: 'italic'},
            {title: 'Code', value: 'code'},
            {title: 'Underline', value: 'underline'},
            {title: 'Orange Underline', value: 'orangeUnderline', blockEditor: {
              icon: highlightIcon,
              render: highlightRender
            }},
            {title: 'Tick Icon List', value: 'tickIcon', blockEditor: {
              icon: tickIcon,
            
            }},
            {title: 'Cross Icon List', value: 'crossIcon', blockEditor: {
              icon: crossIcon,
            
            }},
          ],
          annotations: [
            {
              title: 'URL',
              type: 'link'
            }
          ]
        }
      }
    ]
  }
  