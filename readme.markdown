#lsrequire

## Removes the need to reference files using relative paths when using require


## Usage

```
require('lsrequire').init({
  prodSourceRoot:  "./app",
  testSourceRoot:  "./spec",
  requireSymbol:  "$",
});
```

From your source, where $SomeFile is a file named SomeFile.js anywhere in your prod or test source roots

```
lsrequire('$SomeFile');
```

Move and refactor as you please, without having to worry about changing all your paths! Yay!