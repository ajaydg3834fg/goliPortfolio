import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="fonts"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />,
    <link
      key="fonts2"
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&family=Urbanist:wght@700;800&display=swap"
      rel="stylesheet"
    />,
  ]);
};
