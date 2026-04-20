import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://fit.dhhp.edu.vn"),
};

type NewsLayoutProps = {
  children: ReactNode;
};

const NewsLayout: React.FC<NewsLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default NewsLayout;
