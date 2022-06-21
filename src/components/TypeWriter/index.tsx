import React, { useDebugValue } from "react";

interface ITypeWriter {
  text: string;
}

const TypeWriter: React.FC<ITypeWriter> = ({ text }) => {
  const [words, setWords] = React.useState("");
  const textSplited: string[] = text.split("");

  //React.useEffect(() => {
  //  setWords("");
  //
  // textSplited.forEach((word, index) => {
  //  setTimeout(() => {
  //    setWords((oldWord) => oldWord + word);
  //   }, 75 * index);
  //  });
  // }, []);

  React.useEffect(() => {
    setWords("");

    for (let i = 0; i < textSplited.length; i++) {
      setTimeout(() => {
        const eachWord = textSplited[i];

        setWords((oldWord) => oldWord + eachWord);
      }, 75 * i);
    }
  }, [text]);

  return <>{words}</>;
};

export default TypeWriter;
