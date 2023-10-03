import { MdVideocam } from "react-icons/md";
import { MdPhotoCamera } from "react-icons/md";
import { RiSoundcloudLine } from "react-icons/ri";

import InstagramPreview from '../components/preview/Instagram'
import EmbedPlayer from '../components/preview/EmbedPlayer'

export const instagram = {
  type: 'object',
  name: 'instagram',
  title: 'Instagram Post',
  icon: MdPhotoCamera,
  fields: [
    {
      type: 'url',
      name: 'url',
      description: 'The URL to the post as seen in a desktop browser',
    },
  ],
  components: [
  InstagramPreview,
  ],
  preview: {
    select: { url: 'url' },
  },
}

export const videoEmbed = {
  type: 'object',
  name: 'videoEmbed',
  title: 'Video Embed',
  icon: MdVideocam,
  fields: [
    {
      type: 'url',
      name: 'url',
    },
  ],
  components: [
    EmbedPlayer
  ],
  preview: {
    select: { url: 'url' },
  },
}

export const soundcloud = {
  type: 'object',
  name: 'soundcloud',
  title: 'Soundcloud Post',
  icon: RiSoundcloudLine,
  fields: [
    {
      type: 'url',
      name: 'url',
      description: 'The URL to the post as seen in a desktop browser',
    },
  ],
  components: [
    EmbedPlayer
  ],
  preview: {
    select: { url: 'url' },
  },
}