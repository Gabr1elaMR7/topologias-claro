function init() {
    var $ = go.GraphObject.make; // Acceder a las funciones de GoJS

    // Crear un nuevo diagrama
    var myDiagram = $(go.Diagram, "myDiagramDiv");

    // Definir el aspecto de los nodos
    myDiagram.nodeTemplate = 
    $(go.Node, "Auto",
     $(go.Shape, "RoundedRectangle", { fill: "lightgreen", stroke: null }),
    $(go.TextBlock, { margin: 8 }, new go.Binding("text", "key"))
    );


    // Personalizar el aspecto del nodo con un fondo degradado y un borde
    myDiagram.nodeTemplate =
    $(go.Node, "Vertical",
        $(go.Picture,
            { width: 50, height: 50 },
            new go.Binding("source", "key", function(key) {
                // Aquí puedes definir la lógica para asignar una imagen basada en la clave del nodo
                if (/^ZAC|^HAC/i.test(key)) {
                    return "imagenes/olt.png"; // Ruta de la primera imagen
                } else if (key === "ISWFTTHSABANΕΤΑΑΤΡ") {
                    return "imagenes/switch.png"; // Ruta de la segunda imagen
                } else if (/^NGW|^THBH/i.test(key)) {
                    return "imagenes/router.png"; // Ruta de la tercera imagen
                } else {
                    return "equipo.png"; // Imagen predeterminada si no se encuentra una coincidencia
                }
            })
        ),
        $(go.TextBlock,
            { margin: 0, textAlign: "center", maxSize: new go.Size(200, NaN) },
            new go.Binding("text", "key") // Enlaza la propiedad "key" de los datos del nodo con el texto del nodo
        )
    );


    // Definir el aspecto de los enlaces
    myDiagram.linkTemplate =
      $(go.Link,
        $(go.Shape, { stroke: "black" }),
        $(go.Shape, { toArrow: "" }),  // Establecer la propiedad toArrow en "" para ocultar las flechas
        $(go.TextBlock,  // Agregar un bloque de texto para mostrar el puerto
        { margin: 4, background: "white" },
          new go.Binding("text", "port"))  // Enlazar el texto al dato "port" del enlace
      );

    // Crear los nodos y enlaces
    var model = $(go.GraphLinksModel);
    model.nodeDataArray = [
      { key: "ZAC_MED_ATP_SABANETA_N1_C600" },
      { key: "ISWFTTHSABANΕΤΑΑΤΡ" },
      { key: "RACK1_CAJA_OB_1" },
      { key: "RACK1_CAJA_OB_2" },
      { key: "NGWESPACIOSUR"},
      { key: "HAC-VAL.YUMBO2_MOV-CP1"},
      { key: "R1-F1 ODF2"},
      { key: "R1-F1 ODF1"},
      { key: "102-01B-40"},
      { key: "105-06B-70"},
      { key: "NGWCALINORTE"},
      { key: "ZAC-BOG.CALLEJA-H1-C600"},
      { key: "AAG-BOG.CALLEJA-C4"},  
      { key: "ACO-BOG.TOBERIN-M7"},
      { key: "THBHTOBERINCCM"}

    ];
  
    model.linkDataArray = [
      { from: "ZAC_MED_ATP_SABANETA_N1_C600", to: "ISWFTTHSABANΕΤΑΑΤΡ", port:"1/10/2 -> Xge0/0/1" },
      { from: "ZAC_MED_ATP_SABANETA_N1_C600", to: "ISWFTTHSABANΕΤΑΑΤΡ", port:"1/11/2 -> Xge1/0/1" },
      { from: "ISWFTTHSABANΕΤΑΑΤΡ", to: "RACK1_CAJA_OB_1",port:"100GE0/0/1 -> Hilo 1 y 2" },
      { from: "ISWFTTHSABANΕΤΑΑΤΡ", to: "RACK1_CAJA_OB_2",port:"100GE1/0/1 -> Hilo 1 y 2" },
      { from: "RACK1_CAJA_OB_1", to: "NGWESPACIOSUR", port:"null -> 50|100GE9/0/4" },
      { from: "RACK1_CAJA_OB_2", to: "NGWESPACIOSUR",port:"null -> 50|100GE9/0/4"},
      { from: "HAC-VAL.YUMBO2_MOV-CP1", to: "R1-F1 ODF2", port: "B1/B2 -> B1/B2"},
      { from: "HAC-VAL.YUMBO2_MOV-CP1", to: "R1-F1 ODF1", port: "A8/A8 -> A8/A8"},
      { from: "R1-F1 ODF2",to: "102-01B-40", port: "B1/B2 -> B7/B8"},
      { from: "R1-F1 ODF1",to: "105-06B-70", port: "A8/A8 -> D3/D4"},
      { from: "102-01B-40",to: "NGWCALINORTE",port: "B7/B8 -> Gi15/1/3"},
      { from: "105-06B-70",to: "NGWCALINORTE", port: "D3/D4 -> Gi15/1/3"},
      { from: "ZAC-BOG.CALLEJA-H1-C600",to: "AAG-BOG.CALLEJA-C4",port: "1/10/1 -> 1/2/2"},
      { from: "ZAC-BOG.CALLEJA-H1-C600",to: "AAG-BOG.CALLEJA-C4",port: "1/11/1 -> 1/1/2"},
      { from: "AAG-BOG.CALLEJA-C4",to: "ACO-BOG.TOBERIN-M7", port: "null -> null"},
      { from: "AAG-BOG.CALLEJA-C4",to: "ACO-BOG.TOBERIN-M7", port: "null -> null"},
      { from: "ACO-BOG.TOBERIN-M7", to: "THBHTOBERINCCM", port: "1/1/c9 -> 50|100GE1/0/2"},
      { from: "ACO-BOG.TOBERIN-M7", to: "THBHTOBERINCCM", port: "2/1/c9 -> 50|100GE1/1/2"}

    ];

   

    myDiagram.layout = $(go.ForceDirectedLayout);

    // Asignar el modelo al diagrama
    myDiagram.model = model;
  }