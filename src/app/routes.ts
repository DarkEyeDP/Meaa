import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { PolicyPage } from "./pages/PolicyPage";
import { PolicyTrackerPage } from "./pages/PolicyTrackerPage";
import { MembershipPage } from "./pages/MembershipPage";
import { NewsPage } from "./pages/NewsPage";
import { InsightsPage } from "./pages/InsightsPage";
import { ResearchPage } from "./pages/ResearchPage";
import { PressPage } from "./pages/PressPage";
import { ContactPage } from "./pages/ContactPage";
import { FindYourLawmakers } from "./pages/FindYourLawmakers";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: RootLayout,
      children: [
        { index: true, Component: HomePage },
        { path: "about", Component: AboutPage },
        { path: "policy", Component: PolicyPage },
        { path: "policy-tracker", Component: PolicyTrackerPage },
        { path: "find-your-lawmakers", Component: FindYourLawmakers },
        { path: "membership", Component: MembershipPage },
        { path: "news", Component: NewsPage },
        { path: "insights", Component: InsightsPage },
        { path: "research", Component: ResearchPage },
        { path: "press", Component: PressPage },
        { path: "contact", Component: ContactPage },
      ],
    },
  ],
  { basename: "/Meaa" }
);
