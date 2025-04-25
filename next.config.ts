import nextra from "nextra";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
/** @type {import('next').NextConfig} */
const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
});

const nextConfig = {
  // Enable MDX file extensions
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Any additional Next.js config
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withNextra({
  output: "export",
  images: { unoptimized: true },
  mdxOptions: {
    remarkPlugins: [remarkGfm],
  },
  //basePath: '/rig-docs'
});
