# Anexo A — Comparativo tecnológico

**Proyecto:** Sistema académico de gestión de transacciones  
**Framework seleccionado:** Laravel  
**Alternativa comparada:** Django + Django REST Framework

| Criterio | Laravel | Django + DRF |
|---|---|---|
| Lenguaje y ecosistema | PHP, Composer y ecosistema Laravel. | Python, Django y DRF como paquete adicional. |
| Curva de aprendizaje | Favorable si el equipo ya domina PHP/Laravel. | Favorable para equipos con experiencia Python. |
| ORM y acceso a datos | Eloquent ORM. | Django ORM. |
| Autenticación API | Laravel Sanctum. | DRF Authentication según configuración. |
| Pruebas | PHPUnit/Pest y helpers HTTP. | APITestCase y APIClient. |
| Despliegue y hosting | Disponibilidad amplia de hosting PHP. | Hosting compatible con Python y servidor de aplicaciones. |
| Escenario ideal | Equipo PHP, plazo corto y hosting económico. | Equipo Python y necesidad de Django Admin. |

## Conclusión

Para nuestro proyecto académico de gestión de transacciones elegimos Laravel porque el equipo ya cuenta con experiencia en PHP, permite desarrollar en un plazo corto y ofrece herramientas integradas para rutas, validación, ORM, autenticación y pruebas. Django con Django REST Framework sería preferible si el equipo dominara Python o necesitara aprovechar Django Admin para administrar contenido. En nuestro contexto, cambiar de tecnología aumentaría el tiempo de aprendizaje sin aportar una ventaja decisiva.

> Personaliza el nombre y las características del proyecto real antes de entregar este anexo.
