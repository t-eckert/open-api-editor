<template>
  <div />
</template>

<script lang="js">
import Vue from "vue";
export default Vue.extend({
  name: "DocumentEditor",
  props: {
    value: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    }
  },
  model: {
    event: "change",
  },
  data() {
    return {
      theme: "vs",
      options: {
        fontSize: 14,
        autoIndent: 2,
        highlightActiveIndentGuide: true,
        lineNumbersMinChars: 3,
        formatOnPaste: true,
        formateOnType: true,
        fontFamily: "Cascadia Code, monospace, Consolas, Courier New",
        fontLigatures: true,
        minimap: {
          enabled: true,
        },
        overviewRulerBorder: false,
        renderWhitespace: "boundary",
        scrollBeyondLastLine: false,
        wordWrap: "on",
        wrappingIndent: "same",
        renderLineHighlight: "gutter",
        automaticLayout: true
      },
    };
  },
  watch: {
    value(newValue) {
      const editor = this.getModifiedEditor();
      if (newValue !== editor.getValue()) {
        editor.setValue(newValue);
      }
    },
  },
  mounted() {
    const monaco = require("monaco-editor");
    this.monaco = monaco;
    this.$emit("editorWillMount", this.monaco);
    const options = {
      value: this.value,
      theme: this.theme,
      language: this.language,
      ...this.options,
    };
    this.editor = monaco.editor.create(this.$el, options);
    // @event `change`
    const editor = this.getModifiedEditor();
    editor.onDidChangeModelContent((event) => {
      const value = editor.getValue();
      if (this.value !== value) {
        this.$emit("change", value, event);
      }
    });
    this.$emit("editorDidMount", this.editor);
  },
  beforeDestroy() {
    this.editor && this.editor.dispose();
  },
  methods: {
    getEditor() {
      return this.editor;
    },
    getModifiedEditor() {
      return this.diffEditor ? this.editor.getModifiedEditor() : this.editor;
    },
    getOriginalEditor() {
      return this.diffEditor ? this.editor.getOriginalEditor() : this.editor;
    },
    focus() {
      this.editor.focus();
    },
  }
});
</script>
