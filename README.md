# pandemic-include

Wrapper of ![mdinclude](https://www.npmjs.com/package/mdinclude) for Pandemic.
Allows to include markdown, text, or csv file directly in your manuscript.

## Usage

The best would be to check mdinclude doc, but for a quick preview:

### Include other markdown document:
```markdown
<!-- #include chapters/one.md -->
```

Note that you can also use jockers:
```markdown
<!-- #include chapters/*.md -->
```

### Include csv file (will be converted to Markdown table, neat!):
```markdown
<!-- #csv data/values.csv -->
```

### Include source code:
```Markdown
<!-- #code example.js -->
```

### Include as citation (prefixed with `>`):
```markdown
<!-- #cite quotes/einstein.txt -->
```
