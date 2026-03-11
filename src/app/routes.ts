import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { PolicyPage } from "./pages/PolicyPage";
import { PolicyTrackerPage } from "./pages/PolicyTrackerPage";
import { MembershipPage } from "./pages/MembershipPage";
import { NewsPage } from "./pages/NewsPage";
import { ContactPage } from "./pages/ContactPage";

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
        { path: "membership", Component: MembershipPage },
        { path: "news", Component: NewsPage },
        { path: "contact", Component: ContactPage },
      ],
    },
  ],
  { basename: "/Meaa" }
);
