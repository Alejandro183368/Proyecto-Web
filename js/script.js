function redirigir(url) {
    window.location.href = url ; 
}
function PDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const nombres = [
"Listado De Docentes de la Academia:",        
"	Aguilar Rodríguez Araceli Gabriela	",
"	Alonso Álvarez María Alicia	",
"	Alonso Ruiz Ma. De Jesús	",
"	Arriaga Santos Carlos Adrián	",
"	Banda  Guzmán Víctor Miguel	",
"	Bautista Bautista Italo Carlos Delfino	",
"	Cabrera Salinas Dinorah 	",
"	Cerda Lugo Angel de Jesus	",
"	Chávez Pérez Manuel 	",
"	De León Lomelí Luz Roxana	",
"	Díaz Díaz Irwin Allen	",
"	Flores Gutiérrez Claudia Patricia	",
"	García Haro Guillermo 	",
"	González Salas Javier Salvador	",
"	González Torres Jorge Isaac	",
"	Grimaldo Martínez Ana Isabel	",
"	Guerrero Castillo Israel 	",
"	Hernández  Delgado Zaira Elizabeth	",
"	Hernández Escobar Erika Nohemí	",
"	Hernández Martínez Imelda Deyanira	",
"	Herrera Herrera Roxana Georgina	",
"	Islas González María De Guadalupe	",
"	Jerónimo Moreno Yasser 	",
"	Ledesma Ramos Guadalupe 	",
"	Leija Martínez Nehemías 	",
"	López Quirino David Uriel	",
"	Martínez Galla Baltazar 	",
"	Martínez Martínez Leopoldo José Alfredo	",
"	Martínez Mendoza Víctor Gabriel	",
"	Méndez Leal Jorge Martín	",
"	Moncada González Héctor Raúl	",
"	Montañez Medina Adolfo Antonio	",
"	Morales Robles Fermín 	",
"	Niño Carrales Genaro 	",
"	Pérez Castillo Paulina Del Rosario	",
"	Ramírez González María Guadalupe	",
"	Ramírez López Marisol 	",
"	Reyes  Alejandro 	",
"	Reyes Velázquez Eduardo Alberto	",
"	Reyna López Catalina 	",
"	Robles Centeno Laura Virginia	",
"	Ruiz Cigarrillo Oscar  	",
"	Sánchez  Vásquez José Daniel 	",
"	Sandoval Ortiz Andrés 	",
"	Silva Rodríguez Genoveva Viridiana	",
"	Tolentino Jiménez José Ramón	",
"	Trejo Martínez Francisco Eduardo	",
"	Vargas Olmos Cecilia 	",
"	Velázquez Durán Miguel De Jesús	",
"	Zúñiga Hernández Erika Adriana 	"
    ];

    const pageHeight = doc.internal.pageSize.height;
    let y = 20;
    const lineHeight = 10;
    const margin = 20;

    doc.setFontSize(12);

    nombres.forEach((nombre, index) => {
        // Si la posición y + lineHeight es mayor que la altura de la página menos el margen, añadir una nueva página
        if (y + lineHeight > pageHeight - margin) {
            doc.addPage();
            y = margin;
        }
        doc.text(nombre, margin, y);
        y += lineHeight;
    });

    // Generar el PDF como un Blob
    const pdfBlob = doc.output('blob');

    // Crear un objeto URL para el Blob y abrirlo en una nueva ventana
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl);
}