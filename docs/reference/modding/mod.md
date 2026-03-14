OneShot.Modding.Models

# Mod

```csharp
[Serializable]
public class Mod
```

:[ Read Only ]:

## Overview

the class which holds mod data like items, assets, etc.

## Properties

### `modConfig`

```csharp
public ModConfiguration modConfig { get; }
```

loaded [ModConfiguration](./mod-configuration)

---

### `MOD_ID`

:[ Constant ]:

```csharp
[ReadOnly, ShowInInspector] public string MOD_ID { get; }
```

mods id for identifying

---

### `MOD_FOLDER`

:[ Constant ]:

```csharp
[ReadOnly, ShowInInspector] public string MOD_FOLDER { get; }
```

loaded [ModConfiguration](./mod-configuration)

---

### `private modItems[]`

```csharp
[SerializeField] private List<ModItem> modItems = new List<ModItem>();
```

what [ModItem](./mod-item)s the mod has loaded

---

### `assetLoader`

```csharp
public AssetLoader assetLoader { get; }
```

mod's asset loader

---

### `private itemLoader`

```csharp
private ItemLoader itemLoader { get; }
```

mod's item loader

## Constructors

### `Mod(string modFolder)`

:[ Core Triggered Only ]:

```csharp
public Mod(string modFolder)
```

creates the mod and initializes required stuff

#### Parameters

#### `modFolder`

location of where the mod is, eg. {GAME_FOLDER}/mods/examplemod/

## Methods

### `Load()`

:[ Core Triggered Only ]: :[ Awaitable ]:

```csharp
public async Awaitable Load()
```

loads the mod