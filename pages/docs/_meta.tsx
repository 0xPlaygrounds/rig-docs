import {
  Blocks,
  Lightbulb,
  CircleHelp,
  DraftingCompass,
  Landmark,
  Puzzle,
  Rocket,
  Unplug,
  MessageCircleQuestion,
  HeartHandshake,
} from "lucide-react";

const iconStyle = {
  width: "1rem",
  display: "inline",
};

const meta = {
  index: "Overview",
  quickstart: {
    title: (
      <>
        <Rocket style={iconStyle} /> &nbsp; Quickstart
      </>
    ),
  },
  why_rig: {
    title: (
      <>
        <Lightbulb style={iconStyle} /> &nbsp; Why Rig
      </>
    ),
  },
  //"faq": {title: <><MessageCircleQuestion style={iconStyle} /> &nbsp; FAQ</>},
  architecture: {
    title: (
      <>
        <Landmark style={iconStyle} /> &nbsp; Architecture
      </>
    ),
  },
  concepts: {
    title: (
      <>
        <Puzzle style={iconStyle} /> &nbsp; Concepts
      </>
    ),
  },
  integrations: {
    title: (
      <>
        <Unplug style={iconStyle} /> &nbsp; Integrations
      </>
    ),
  },
  extensions: {
    title: (
      <>
        <Blocks style={iconStyle} /> &nbsp; Extensions
      </>
    ),
  },
  how_to_contribute: {
    title: (
      <>
        <HeartHandshake style={iconStyle} /> &nbsp; Contribute to Rig
      </>
    ),
  },
};

export default meta;
