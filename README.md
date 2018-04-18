# Fold Imports

Most text editors support auto-folding import lines, and with this package, Atom does too!

## How To

Install this package and it will automatically start folding lines that begin with `import` when you open any file.

If you don't want to automatically fold the imports when you open each editor, you can turn that setting off in this package's configs.

To toggle folding the imports, use the `Fold Imports: Toggle` command or the default hotkey `ctrl-alt-i`. You can disable this hotkey in the package configs and you can create your own hotkey in your `~/.atom/keymap.cson` file.

## Planned Features

In the future I hope to add
- Support for other a custom folding keyword
- Support for regex folding keywords
- Support for multiple folding keywords

## Possible Issues

The way the folder currently works is by finding the first and last lines that begin with `import`. It then folds in the range from the space after the first `import` to the last character in the last line that begins with `import`. This will fold any comments you have between those two lines. I'm not sure if this is a bug or a feature, but please raise an issue if this bothers you.

## Contributing

Contributions are appreciated! If you would like to contribute, please raise an issue first.
