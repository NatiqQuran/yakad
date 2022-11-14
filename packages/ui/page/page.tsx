import React from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./page.module.css";

function Page(props: React.HTMLAttributes<HTMLDivElement>) {
  const joinedClassNames = joinClassNames(styles.page, props.className!);

  return (
    <div {...props} className={joinedClassNames}>
      {props.children}
    </div>
  );
}

export default Page;
