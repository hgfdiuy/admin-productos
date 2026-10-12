# Evidencias de los cinco ejercicios

Las carpetas separan los resultados verdes, los dos fallos intencionales y la recuperación final. Los archivos `.mp4` y `.png` se conservan localmente y no se incorporan a Git; los artefactos originales también están en las ejecuciones de GitHub Actions enlazadas en cada carpeta.

| Etapa | Commit | GitHub Actions |
| --- | --- | --- |
| Ejercicio 1, verde | `b923409` | [run 38196879100](https://github.com/hgfdiuy/admin-productos/actions/runs/38196879100) |
| Ejercicio 2, verde | `dfdb3aa` | [run 38197164097](https://github.com/hgfdiuy/admin-productos/actions/runs/38197164097) |
| Ejercicio 3, verde | `c8072b9` | [run 38197319630](https://github.com/hgfdiuy/admin-productos/actions/runs/38197319630) |
| Prueba de sesión reforzada, verde | `deda218` | [run 38197635153](https://github.com/hgfdiuy/admin-productos/actions/runs/38197635153) |
| Ejercicio 4, rojo | `129ffb7` | [run 38197781795](https://github.com/hgfdiuy/admin-productos/actions/runs/38197781795) |
| Sesión restaurada, verde | `fabe79b` | [run 38261666603](https://github.com/hgfdiuy/admin-productos/actions/runs/38261666603) |
| Ejercicio 5, rojo | `a47a2fe` | [run 38262505674](https://github.com/hgfdiuy/admin-productos/actions/runs/38262505674) |
| Restauración final, verde | `01fc9d0` | [run 38263025470](https://github.com/hgfdiuy/admin-productos/actions/runs/38263025470) |

Para ejecutar Cypress en este entorno Windows fue necesario quitar `ELECTRON_RUN_AS_NODE=1` del proceso hijo. La aplicación se inicia con `npm start` y sirve `http://localhost:3000`.
