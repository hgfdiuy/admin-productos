# Ejercicio 5: fallo intencional de producto agotado

- Base verde: commit `fabe79b`, [run 38261666603](https://github.com/hgfdiuy/admin-productos/actions/runs/38261666603).
- Defecto exclusivo: commit `a47a2fe` cambió únicamente el texto `Agotado` por `Sin stock` dentro de la misma clase CSS `agotado`.
- Resultado local en `ejecucion-local.txt`: 9 aprobadas, 1 fallida. La única fallida fue `Un producto agotado se muestra como Agotado`; error: `expected '<span.agotado>' to contain 'Agotado'`.
- La captura local en `screenshots/` muestra `Sin stock`; videos locales y artefactos remotos descargados están en esta carpeta.
- [GitHub Actions rojo](https://github.com/hgfdiuy/admin-productos/actions/runs/38262505674): 1 fallida; artefactos `cypress-capturas` y `cypress-video` verificados.
- `ejecucion-sin-servidor.txt` registra un intento que no ejecutó pruebas porque el servidor local estaba apagado. Se reinició y se repitió la ejecución válida anterior.
- Restauración final: commit `01fc9d0`, [GitHub Actions verde](https://github.com/hgfdiuy/admin-productos/actions/runs/38263025470).
