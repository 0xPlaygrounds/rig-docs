import { Blocks, Lightbulb, CircleHelp, DraftingCompass, Landmark, Puzzle, Rocket, Unplug, MessageCircleQuestion, HeartHandshake } from "lucide-react";

const iconStyle = {
  width: '1rem',
  display: 'inline'
}

const meta = {
  "index": "Overview",
  "0_quickstart": {title: <><Rocket style={iconStyle} /> &nbsp; Quickstart</>},
  "1_why_rig": {title: <><Lightbulb style={iconStyle} /> &nbsp; Why Rig</>},
  //"2_faq": {title: <><MessageCircleQuestion style={iconStyle} /> &nbsp; FAQ</>},
  "3_architecture": {title: <><Landmark style={iconStyle} /> &nbsp; Architecture</>},
  "4_concepts": {title: <><Puzzle style={iconStyle} /> &nbsp; Concepts</>},
  "5_integrations": {title: <><Unplug style={iconStyle} /> &nbsp; Integrations</>},
  "6_extensions": {title: <><Blocks style={iconStyle} /> &nbsp; Extensions</>},
  "7_how-to-contribute": {title: <><HeartHandshake style={iconStyle} /> &nbsp; Contribute to Rig</>}
}

export default meta;
