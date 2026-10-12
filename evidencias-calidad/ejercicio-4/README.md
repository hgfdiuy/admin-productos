# Ejercicio 4: fallo intencional de sesión

- Base verde: commit `deda218`, [run 38197635153](https://github.com/hgfdiuy/admin-productos/actions/runs/38197635153).
- Defecto exclusivo: commit `129ffb7` comentó el bloque de restauración de `sesion` en `public/app.js`.
- Resultado local definitivo en `ejecucion-local.txt`: 7 aprobadas, 3 fallidas. Fallaron las dos pruebas de `sesion.cy.js` y la prueba de recarga/cierre de sesión. Error: `expected '<section#admin.oculto>' to be 'visible'`.
- [GitHub Actions rojo](https://github.com/hgfdiuy/admin-productos/actions/runs/38197781795): 3 fallidas; artefactos `cypress-capturas` y `cypress-video` verificados y descargados en `github-capturas/` y `github-videos/`.
- `ejecucion-local-inicial.txt` registra el primer diagnóstico: una prueba de sesión aún pasaba porque solo contaba filas ocultas. Se reforzó esa aserción antes del commit rojo definitivo.
- Restauración: commit `fabe79b`; 2/2 pruebas de sesión y 10/10 de la suite local aprobadas; [GitHub Actions verde](https://github.com/hgfdiuy/admin-productos/actions/runs/38261666603).
