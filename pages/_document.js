import { Html, Main, Head, NextScript } from "next/document";
import React from "react";

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <meta
        name="description"
        content="Tekwiza is the annual tech fest that is conducted by Sahrdaya College of Engineering and Technology. Tekwiza provides young people with a platform for leveraging their technical expertise. Moreover, it helps in encouraging young minds to explore, learn and upskill themselves through a variety of workshops and interactive events in different engineering fields. "
      />
      <meta
        name="keywords"
        content="sahrdaya,techfest,kerala,kodakara,engineering,college,fest,festival,technology,2022,tekwiza,student,ktu,thrissur"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English"></meta>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
