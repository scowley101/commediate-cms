// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Schemas
import blockContent from './blockContent';
import latex from './latex';

// Documents
import page from './documents/page';
import navMenu from './documents/navMenu';
import route from './documents/route';
import siteSettings from './documents/siteSettings';
import icons from './documents/icons';
import author from './documents/author';
import post from './documents/post';
import category from './documents/category';
// Objects
import cta from './objects/cta';
import simpleBlockContent from './objects/simpleBlockContent';
import link from './objects/link';
import mainImage from './objects/mainImage';
import clientTestimonial from './objects/clientTestimonial';
import listItem from './objects/listItem';
import cvItem from './objects/cvItem';
import jobRole from './objects/jobRole';
import openGraph from './objects/openGraph';
import icon from './objects/icon';
import blocks from './objects/blocks';
import backgroundColorRadio from './objects/backgroundColorRadio';
import words from './objects/words';
import comparisonListItem from './objects/comparisonListItem';
import excerptPortableText from './objects/excerptPortableText';
import authorReference from './objects/authorReference';
import bodyPortableText from './objects/bodyPortableText';
import bioPortableText from './objects/bioPortableText';
import { instagram, videoEmbed, soundcloud } from './objects/embeds';


// Plugs
import hero from './plugs/hero';
import illustration from './plugs/illustration';
import oneColumnText from './plugs/oneColumnText';
import twoColumnText from './plugs/twoColumnText';
import testimonials from './plugs/testimonials';
import cvTimeline from './plugs/cvTimeline';
import oneColumnList from './plugs/oneColumnList';
import twoColumnList from './plugs/twoColumnList';
import roleComparison from './plugs/roleComparison';
import iconPlug from './plugs/iconPlug';
import comparisonLists from './plugs/comparisonLists';
import horizontalBlocks from './plugs/horizontalBlocks';
import contactForm from './plugs/contactForm';
import wordCloud from './plugs/wordCloud';
import flowLists from './plugs/flowLists';
import codeInject from './plugs/codeInject';



// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'





// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    // Schemas
    blockContent,
    latex,
    // Documents
    page,
    navMenu,
    route,
    siteSettings,
    icons,
    author,
    post,
    category,
    // Objects
    
    link,
    cta,
    simpleBlockContent,
    mainImage,
    listItem,
    clientTestimonial,
    cvItem,
    jobRole,
    openGraph,
    icon,
    blocks,
    backgroundColorRadio,
    words,
    comparisonListItem,
    excerptPortableText,
    authorReference,
    bodyPortableText,
    bioPortableText,
    instagram,
    videoEmbed,
    soundcloud,
    // Plugs
    illustration,
    hero,
    oneColumnText,
    twoColumnText,
    oneColumnList,
    twoColumnList,
    testimonials,
    cvTimeline,
    roleComparison,
    iconPlug,
    comparisonLists,
    horizontalBlocks,
    contactForm,
    wordCloud,
    flowLists,
    codeInject,
  ]),
})
