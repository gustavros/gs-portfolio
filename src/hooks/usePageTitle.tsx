"use client";

import { useEffect } from "react";

interface PageTitleProps {
  pageTitle: string;
}

function usePageTitle({ pageTitle }: PageTitleProps) {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
}

export default usePageTitle;
