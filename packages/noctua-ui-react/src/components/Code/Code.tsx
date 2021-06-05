import React, { FC } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";

import * as styles from "./code.module.css";

interface CodeProps {
  language: Language;
  code: string;
}

export const Code: FC<CodeProps> = ({ code, language }) => {
  return (
    <div className={styles.wrapper}>
      <Highlight
        {...defaultProps}
        code={code}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })} className={styles.line}>
                <div className={styles.lineno}>{i + 1}</div>
                <div className={styles.linecontent}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};
