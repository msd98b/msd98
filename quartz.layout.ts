import { command } from "yargs"
import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
  Component.Breadcrumbs(),
  Component.ArticleTitle(),
  Component.ContentMeta(),
  Component.TagList(),
  ],
// left side infact!
  right: [
  Component.DesktopOnly(Component.Graph()),
  Component.DesktopOnly(Component.Backlinks()),
  Component.MobileOnly(Component.PageTitle()),
  Component.MobileOnly(Component.Darkmode()),
  Component.DesktopOnly(Component.TableOfContents()),
  ],
// right side infact!
  left: [
  Component.DesktopOnly(Component.PageTitle()),
  Component.DesktopOnly(Component.Search()),
  Component.DesktopOnly(Component.ReaderMode()),
  Component.DesktopOnly(Component.Darkmode()),
  Component.DesktopOnly(Component.Explorer()),

  ],
}
 
// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
 beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
  Component.MobileOnly(Component.PageTitle()),
  Component.MobileOnly(Component.Darkmode()),
  ],
  right: [
  Component.DesktopOnly(Component.PageTitle()),
  Component.Search(),
  Component.DesktopOnly(Component.Darkmode()),
  Component.DesktopOnly(Component.Explorer()),
  ],
}
