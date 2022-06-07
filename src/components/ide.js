/* eslint-disable no-undef */
import Editor from "@monaco-editor/react";
import React, { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import VerticalSplitLayout from "../layouts/vertical-split";
import { setContent } from "../redux/file-slice";

const IDE = () => {
  const file = useSelector((state) => state.file);
  const dispatch = useDispatch();
  const editorRef = useRef(null);
  const handleEditorChange = useCallback((value) => {
    dispatch(setContent(value));
  }, []);
  const handleEditorDidMount = useCallback((editor, monaco) => {
    editorRef.current = editor;
    // monaco editor custom language color
    // https://microsoft.github.io/monaco-editor/playground.html#extending-language-services-custom-language
    if (
      localStorage.getItem("description") &&
      localStorage.getItem("tabtrigger") &&
      localStorage.getItem("snippet")
    ) {
      const description = localStorage.getItem("description");
      const labeltrigger = localStorage.getItem("tabtrigger");
      snippet = localStorage.getItem("snippet");
      monaco.languages.registerCompletionItemProvider("cpp", {
        provideCompletionItems: () => {
          return {
            suggestions: [
              {
                label: labeltrigger,
                kind: monaco.languages.CompletionItemKind.Snippet,
                documentation: description,
                insertText: [`${snippet}`].join("\n"),
              },
            ],
          };
        },
      });
    }

    monaco.editor.defineTheme("ace", {
      base: "vs",
      inherit: true,
      rules: [
        { token: "", foreground: "5c6773" },
        { token: "invalid", foreground: "ff3333" },
        { token: "emphasis", fontStyle: "italic" },
        { token: "strong", fontStyle: "bold" },
        { token: "variable", foreground: "5c6773" },
        { token: "variable.predefined", foreground: "5c6773" },
        { token: "constant", foreground: "f08c36" },
        { token: "comment", foreground: "abb0b6", fontStyle: "italic" },
        { token: "number", foreground: "f08c36" },
        { token: "number.hex", foreground: "f08c36" },
        { token: "regexp", foreground: "4dbf99" },
        { token: "annotation", foreground: "41a6d9" },
        { token: "type", foreground: "41a6d9" },
        { token: "delimiter", foreground: "5c6773" },
        { token: "delimiter.html", foreground: "5c6773" },
        { token: "delimiter.xml", foreground: "5c6773" },
        { token: "tag", foreground: "e7c547" },
        { token: "tag.id.jade", foreground: "e7c547" },
        { token: "tag.class.jade", foreground: "e7c547" },
        { token: "meta.scss", foreground: "e7c547" },
        { token: "metatag", foreground: "e7c547" },
        { token: "metatag.content.html", foreground: "86b300" },
        { token: "metatag.html", foreground: "e7c547" },
        { token: "metatag.xml", foreground: "e7c547" },
        { token: "metatag.php", fontStyle: "bold" },
        { token: "key", foreground: "41a6d9" },
        { token: "string.key.json", foreground: "41a6d9" },
        { token: "string.value.json", foreground: "86b300" },
        { token: "attribute.name", foreground: "f08c36" },
        { token: "attribute.value", foreground: "0451A5" },
        { token: "attribute.value.number", foreground: "abb0b6" },
        { token: "attribute.value.unit", foreground: "86b300" },
        { token: "attribute.value.html", foreground: "86b300" },
        { token: "attribute.value.xml", foreground: "86b300" },
        { token: "string", foreground: "86b300" },
        { token: "string.html", foreground: "86b300" },
        { token: "string.sql", foreground: "86b300" },
        { token: "string.yaml", foreground: "86b300" },
        { token: "keyword", foreground: "f2590c" },
        { token: "keyword.json", foreground: "f2590c" },
        { token: "keyword.flow", foreground: "f2590c" },
        { token: "keyword.flow.scss", foreground: "f2590c" },
        { token: "operator.scss", foreground: "666666" }, //
        { token: "operator.sql", foreground: "778899" }, //
        { token: "operator.swift", foreground: "666666" }, //
        { token: "predefined.sql", foreground: "FF00FF" }, //
      ],
      colors: {
        "editor.background": "#fafafa",
        "editor.foreground": "#5c6773",
        "editorIndentGuide.background": "#ecebec",
        "editorIndentGuide.activeBackground": "#e0e0e0",
      },
    });

    // monaco.editor.setTheme('ace');
  }, []);
  return (
    <VerticalSplitLayout sizes={[50, 50]}>
      <Editor
        height="calc(100vh - 2.4vh)"
        theme="vs-dark"
        language={file.language}
        className="codeText"
        defaultValue="write come code here"
        value={file.content}
        options={{ fontSize: 16, fontWeight: 400 }}
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
      />
      <div className="pl-2">
        <h1 className="-ml-1.5 pb-2 text-white font-bold text-2xl border-b-2 border-[#333333]">
          <div className="pl-2 text-[#696969]">Output</div>
        </h1>
        <div className="text-white w-full h-full">{file.output}</div>
      </div>
    </VerticalSplitLayout>
  );
};

export default IDE;
