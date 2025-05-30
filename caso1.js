 // Caso 1: Importe a Pagar por Alumno
        document.getElementById('formCaso1').addEventListener('submit', function(e) {
            e.preventDefault();
            const cuota = parseFloat(document.getElementById('cuota').value);
            const instituto = document.getElementById('instituto').value;
            const categoria = document.getElementById('categoria').value;

            // Tabla de descuentos (ajustar según la tabla proporcionada)
            const descuentos = {
                publico: { A: 0.20, B: 0.15, C: 0.10 },
                privado: { A: 0.10, B: 0.05, C: 0.00 }
            };

            const descuento = descuentos[instituto][categoria] || 0;
            const importeDescuento = cuota * descuento;
            const importePagar = cuota - importeDescuento;

            const resultado = `
                <h4>Resultado</h4>
                <p>Cuota Base: S/. ${cuota.toFixed(2)}</p>
                <p>Descuento (${(descuento * 100).toFixed(0)}%): S/. ${importeDescuento.toFixed(2)}</p>
                <p><strong>Importe a Pagar: S/. ${importePagar.toFixed(2)}</strong></p>
            `;
            const resultadoDiv = document.getElementById('resultadoCaso1');
            resultadoDiv.innerHTML = resultado;
            resultadoDiv.classList.remove('d-none');
        });

        // Caso 2: Neto a Cobrar por Trabajador
        document.getElementById('formCaso2').addEventListener('submit', function(e) {
            e.preventDefault();
            const sueldoBase = parseFloat(document.getElementById('sueldoBase').value);
            const estadoCivil = document.getElementById('estadoCivil').value;
            const numHijos = parseInt(document.getElementById('numHijos').value);

            // Bonificaciones (ajustar según la tabla proporcionada)
            const bonificaciones = {
                soltero: { 0: 50, 1: 70, 2: 90, 3: 100, default: 110 },
                casado: { 0: 80, 1: 100, 2: 120, 3: 130, default: 140 }
            };

            const bonificacionFija = bonificaciones[estadoCivil][numHijos] || bonificaciones[estadoCivil].default;
            const porcentajeHijos = Math.min(numHijos * 0.015, 0.06);
            const bonificacionHijos = sueldoBase * porcentajeHijos;
            const netoCobrar = sueldoBase + bonificacionFija + bonificacionHijos;

            const resultado = `
                <h4>Resultado</h4>
                <p>Sueldo Base: S/. ${sueldoBase.toFixed(2)}</p>
                <p>Bonificación Fija: S/. ${bonificacionFija.toFixed(2)}</p>
                <p>Bonificación por Hijos (${(porcentajeHijos * 100).toFixed(1)}%): S/. ${bonificacionHijos.toFixed(2)}</p>
                <p><strong>Neto a Cobrar: S/. ${netoCobrar.toFixed(2)}</strong></p>
            `;
            const resultadoDiv = document.getElementById('resultadoCaso2');
            resultadoDiv.innerHTML = resultado;
            resultadoDiv.classList.remove('d-none');
        });

        // Caso 3: Sueldo Mensual de Obrero
        document.getElementById('formCaso3').addEventListener('submit', function(e) {
            e.preventDefault();
            const prenda = document.getElementById('prenda').value;
            const unidades = parseInt(document.getElementById('unidades').value);
            const categoria = document.getElementById('categoriaObrero').value;

            // Tarifas por prenda
            const tarifas = {
                polo: 5.00,
                pantalon: 8.00,
                camisa: 6.50
            };

            // Bonificaciones por categoría (si unidades > 700)
            const bonificaciones = {
                A: 150,
                B: 100,
                C: 50
            };

            const ingresoBase = unidades * tarifas[prenda];
            let bonificacion = 0;
            if (unidades > 700) {
                bonificacion = bonificaciones[categoria] || 0;
            }

            const ingresoTotal = ingresoBase + bonificacion;
            const descuentoImpuestos = ingresoTotal * 0.09;
            const descuentoSeguro = Math.min(ingresoTotal * 0.02, 20.00);
            const descuentoSolidaridad = ingresoTotal * 0.01;
            const sueldoNeto = ingresoTotal - descuentoImpuestos - descuentoSeguro - descuentoSolidaridad;

            const resultado = `
                <h4>Resultado</h4>
                <p>Ingreso Base: S/. ${ingresoBase.toFixed(2)}</p>
                <p>Bonificación: S/. ${bonificacion.toFixed(2)}</p>
                <p>Descuento Impuestos (9%): S/. ${descuentoImpuestos.toFixed(2)}</p>
                <p>Descuento Seguro (2%, máx S/. 20): S/. ${descuentoSeguro.toFixed(2)}</p>
                <p>Descuento Solidaridad (1%): S/. ${descuentoSolidaridad.toFixed(2)}</p>
                <p><strong>Sueldo Neto: S/. ${sueldoNeto.toFixed(2)}</strong></p>
            `;
            const resultadoDiv = document.getElementById('resultadoCaso3');
            resultadoDiv.innerHTML = resultado;
            resultadoDiv.classList.remove('d-none');
        });