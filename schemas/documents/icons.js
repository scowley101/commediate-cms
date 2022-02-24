import React from 'react';
import { BsEmojiSmile } from "react-icons/bs"
// import { Icon } from '@iconify/react';

// const IconifyIcon = ({value: {icon}}) => 
//    ( <Icon icon={icon} />)
  

export default {
    type: 'document',
    name: 'icons',
    icon: BsEmojiSmile,

    fields: [
      {
        title: 'Iconify Title',
        name: 'iconifyTitle',
        type: 'string',
        
      },
    ],
    // preview: {
    //   select: {
    //     title: 'title',
    //     icon: 'iconifyTitle'
    //   },
    //   prepare({ title = 'No title', icon = 'No icon' }) {
    //     // const IconifyIcon = (icon) => {
    //     //   <Icon icon={icon} />
    //     // }
    //     return {
    //       title,
    //       icon: IconifyIcon
    //     }
    //   },
    // },
  }
  