# Getting Started

To create your first mod, you can follow these steps:

firstly, Go to `{OneShot 3D data folder}`/mods
then Create a subfolder with your mod name

now inside that folder create a [`details.onemod.json`](/reference/modding/mod-configuration), this will be the configuration for your mod.

in the json configuration you must need the `name`, `description`, `version` fields. field names respectuflly what their purpose is, you can use the example below to configure it.

after that, congrats! you configured your mod

## Examples

```json
{
  "name": "My Mod",
  "description": "My cool mod for OneShot 3D",
  "version": "1.0.0",
  "authors": [
    "al-ex427"
  ]
}
```

> p.s. you can also use base game as a example mod
