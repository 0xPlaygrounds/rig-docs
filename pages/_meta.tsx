import {
  Home,
  BookText,
  PocketKnife,
  CookingPot,
  SquareArrowOutUpRight,
  ExternalLink,
} from "lucide-react";

const iconStyle = {
  width: "1rem",
  display: "inline",
  verticalAlign: "-0.4rem",
};

const meta = {
  index: {
    title: (
      <>
        <Home style={iconStyle} /> Get Started
      </>
    ),
    type: "page",
  },
  docs: {
    title: (
      <>
        <BookText style={iconStyle} /> Docs
      </>
    ),
    type: "page",
  },
  guides: {
    title: (
      <>
        <PocketKnife style={iconStyle} /> Tutorials & Guides
      </>
    ),
    type: "page",
  },
  examples: {
    title: (
      <>
        <CookingPot style={iconStyle} /> Examples
      </>
    ),
    type: "page",
  },
  apiReference: {
    title: (
      <>
        API Reference <ExternalLink style={iconStyle} />
      </>
    ),
    type: "page",
    href: "https://docs.rs/rig-core",
    newWindow: true,
  },
  contact: {
    title: (
      <>
        Contact <ExternalLink style={iconStyle} />
      </>
    ),
    type: "page",
    href: "https://playgrounds.network",
    newWindow: true,
  },
};

export default meta;
