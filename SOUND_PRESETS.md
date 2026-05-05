# Sound Presets Manual (`sound-presets.json`)

Este documento explica exactamente cómo crear presets nuevos para `pixelsynth`.

Volver al README general del proyecto: [README.md](./README.md)

## Dónde se usa

- Archivo: `sound-presets.json`
- Loader: `app.js` (`loadInstrumentPresets()` + `sanitizeInstrumentPresets()`)
- UI: sidebar `Sound Engine > Preset`

Si el JSON tiene error o una estructura inválida, la app usa presets internos por fallback.

## Estructura base

```json
{
  "default": "softPiano",
  "presets": {
    "softPiano": {
      "label": "Soft piano",
      "attack": 0.006,
      "decay": 0.07,
      "decayLevel": 0.5,
      "release": 1.75,
      "rowRelease": 0.55,
      "gain": 0.16,
      "q": 0.58,
      "toneOpen": 9.5,
      "toneClose": 2.1,
      "noiseTime": 0.035,
      "noiseGain": 0.026,
      "partials": [
        { "ratio": 1, "gain": 1, "type": "triangle", "detune": 0 }
      ]
    }
  }
}
```

## Campos obligatorios por preset

- `label`: nombre visible en el selector.
- `attack`: tiempo de subida inicial.
- `decay`: tiempo de caída al nivel de sustain.
- `decayLevel`: nivel tras decay.
- `release`: cola principal.
- `rowRelease`: cola extra según posición del impacto en el grid.
- `gain`: salida base del preset.
- `q`: resonancia del filtro.
- `toneOpen`: cuánto abre el filtro con el slider Tone.
- `toneClose`: punto de cierre del filtro.
- `noiseTime`: duración del ataque de ruido.
- `noiseGain`: nivel de ruido de ataque.
- `partials`: arreglo de armónicos/osciladores.

## Campos por parcial

- `ratio`: multiplicador de frecuencia respecto de la nota base.
- `gain`: volumen de esa parcial.
- `type`: `sine`, `triangle`, `sawtooth`, `square`.
- `detune`: desvío en cents.

## Rangos aceptados por el sanitizador

- `attack`: `0.001` a `0.2`
- `decay`: `0.005` a `1`
- `decayLevel`: `0.01` a `1`
- `release`: `0.05` a `6`
- `rowRelease`: `0` a `3`
- `gain`: `0.01` a `0.5`
- `q`: `0.05` a `12`
- `toneOpen`: `0.2` a `32`
- `toneClose`: `0.2` a `12`
- `noiseTime`: `0.001` a `0.3`
- `noiseGain`: `0` a `0.2`
- `partials[i].ratio`: `0.1` a `16`
- `partials[i].gain`: `0` a `2`
- `partials[i].detune`: `-1200` a `1200`
- Máximo de parciales por preset: `12`

## Cómo crear un sonido nuevo (paso a paso)

1. Duplicar un preset que se acerque al timbre objetivo.
2. Cambiar `id` (clave del objeto) y `label`.
3. Ajustar envolvente:
   - ataque percusivo: `attack` bajo (`0.001 - 0.008`)
   - pad/lento: `attack` alto (`0.02 - 0.08`)
4. Ajustar brillo:
   - más oscuro: bajar `toneOpen`, `toneClose`
   - más brillante: subir `toneOpen`, `toneClose`
5. Ajustar armónicos en `partials`.
6. Validar JSON.
7. Recargar la app y seleccionar el nuevo preset.

## Comandos útiles de validación

```bash
python3 -m json.tool sound-presets.json >/dev/null
node --check app.js
```

## Recetas rápidas

### Moog bass

- Osciladores: `sawtooth` + `sawtooth` detune leve + `square`.
- Filtro más cerrado (`toneOpen` medio-bajo).
- `q` alrededor de `1.0`.
- `release` corto/medio.

### 808 kick (melódico)

- Parcial dominante en `ratio: 0.5` (subgrave).
- `attack` muy rápido y `gain` más alto.
- `toneOpen` bajo para mantener grave.
- Ruido de ataque muy corto.

### Bell FM style

- Varias parciales `sine` no armónicas (`2.71`, `3.99`, etc.).
- `release` largo.
- `q` y brillo altos.

### Pad analógico

- Dos parciales `sawtooth` detunadas.
- `attack` más lento.
- `decayLevel` alto y `release` largo.

### Lead ácido

- Base `sawtooth`.
- `q` alto.
- `decay` corto y `release` corto.

## Ejemplo completo para agregar un preset

Pegar dentro de `presets`:

```json
"myNewLead": {
  "label": "My new lead",
  "attack": 0.004,
  "decay": 0.05,
  "decayLevel": 0.5,
  "release": 0.9,
  "rowRelease": 0.3,
  "gain": 0.14,
  "q": 1.2,
  "toneOpen": 12.5,
  "toneClose": 3.1,
  "noiseTime": 0.008,
  "noiseGain": 0.004,
  "partials": [
    { "ratio": 1, "gain": 1, "type": "sawtooth", "detune": -2 },
    { "ratio": 1.006, "gain": 0.6, "type": "triangle", "detune": 2 },
    { "ratio": 2.5, "gain": 0.3, "type": "sine", "detune": 0 }
  ]
}
```

## Troubleshooting

- No aparece en el selector:
  - revisar coma faltante o JSON inválido.
  - confirmar que esté dentro de `presets`.
- Suena muy saturado:
  - bajar `gain`.
  - bajar `partials[].gain`.
  - reducir `noiseGain`.
- Suena opaco:
  - subir `toneOpen` y `toneClose`.
  - aumentar parciales altas.
