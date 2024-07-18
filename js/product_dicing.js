const dicingProducts = [
    {
        title: "NICKEL BOND ELECTROFORMED",
        description: "Using electro plated nickel bond, ultra thin hub blades can provide stable dicing performance of narrow street wafer. With full thickness serial can meet various kerf requirement, with minimum blade thickness from 10-15 um to meet narrowest dicing street.",
        imagePath: "./images/products/Blades NICKEL BOND ELECTROFORMED.png",
        family: "DICING CONSUMABLES",
    },
    {
        title: "NICKEL BASED for PACKAGE DICING",
        description: "Sharpness cutting and elastic bond can improve the surface quality. High precision, less dress or no need to dress.Widely used, variety specifications.",
        imagePath: "./images/products/NICKEL BASED.png",
        family: "DICING CONSUMABLES",
    },
    {
        title: "NICKEL BASED for PACKAGE SINGULATION HUBLESS",
        description: "Electroformed nickel-based binder is used with coarse-grained diamond to achieve ultra-long life cutting. A combination of nickel bond and larger size diamond grits provides long blade life performance.",
        imagePath: "./images/products/Pachage Sing. Hubless.png",
        family: "DICING CONSUMABLES",
    },
    {
        title: "RESIN BOND",
        description: " Resin bond dicing blades without steel core is mainly used for precision cutting and slotting for semiconductor, optical glass, quartz glass, ceramics and so on.",
        imagePath: "./images/products/Resin Bond.png",
        family: "DICING CONSUMABLES",
    },
    {
        title: "METAL BOND",
        description: "Metal bond high precision dicing blades without steel plate are made of identical material, with thin thickness and high precision, they are mainly used for grooving and cutting with high accuracy and slight cutting depth.",
        imagePath: "./images/products/Metal Bond.png",
        family: "DICING CONSUMABLES",
    },

    {
        title: "DRESSER BOARDS",
        description: "The dressing plate, which is for cutting blades used in semiconductor package, mainly consists of ceramic or resin as bond and silicon carbide or corundum as abrasive. It is for truing and dressing the blades, which is used in cutting semiconductor package and glass.",
        imagePath: "./images/products/Dresser Board.png",
        family: "DICING CONSUMABLES"
    },
    {
        title: "CARBON BRUSH",
        description: "The carbon brush makes sure the commutation process remains free from sparks and helps conduct electric current between the moving parts of the motor. The brush is also responsible for changing the course of current in the conductors during the rotation process. ",
        imagePath: "./images/products/Carbon brush.png",
        family: "DICING CONSUMABLES"
    },
    {
        title: "BBD FIBER PRISM",
        description: "Fiber type : Flexible Sensing Distance(BR2/L999): 9mm <br>        Operate temperature: - 40 °C ~ + 70 °C <br>        Minimum bending radius: R2 <br>        Fiber Diameter: OD =ø 2.2 : ø1.0",
        imagePath: "./images/products/BBD Fiber Prism.png",
        family: "DICING CONSUMABLES"
    },
    {
        title: "NCS FIBER PRISM",
        description: "Fiber type : Flexible <br>        Sensing Distance(BR2/L999): 9mm <br>        Operate temperature: - 55 °C ~ + 70 °C <br>        Minimum bending radius: R2 <br>        Fiber Diameter: OD =ø 2.2 : ø1.0",
        imagePath: "./images/products/NCS Fiber Prism.png",
        family: "DICING CONSUMABLES"
    },
    {
        title: "VACUUUM PADS",
        description: "Vacuum pads engage an object and attached to it withan applied, sealed vacuum. The pads can be actuated tolift, move, or position the work piece in assembly orinspection applications.<br>There are types of vacuum pads:<br>Flat type<br>Bellows type<br>Thin Flat type",
        imagePath: "./images/products/Vacuum Pads.png",
        family: "DICING CONSUMABLES"
    },
    {
        title: "UV TAPES",
        description: "UV Tape is a special tape, which has excellent adhesiveness under normal conditions. But its adhesiveness decreases rapidly after exposure of UV light. UV tape usually as carrier tape and protective substrate during the dicing and grinding process. ",
        imagePath: "./images/products/UV Tapes.png",
        family: "DICING CONSUMABLES"
    },
    {
        title: "FLANGES",
        description: "The flange is a special tool for clamping all kinds of ultra-thin blades on the precision dicing machine. Compatible with DISCO,ADT and TSK Dicing Machine. It is divided into two categories:Flange: Clamping blades with hub Wheel Mount: Clamping hubless blades",
        imagePath: "./images/products/Flanges.png",
        family: "ACCESSORIES AND TOOLS"
    },
    {
        title: "CHUCK TABLES",
        description: "Fine-pore ceramic chuck table has the characteristics of high flatness and parallelism, compact and uniform structure with high strength, good permeability, uniform adsorption affinity and dressing easily.",
        imagePath: "./images/products/Chuck Table.png",
        family: "ACCESSORIES AND TOOLS"
    },
    {
        title: "TWEEZERS",
        description: "Tweezers are small hand tools used for grasping objects too small to be easily handled with the human fingers. There are 4 types of tweezer : Slanted, Precision, Clamp and Curved. Each one is designated to do a different job. .<br>Tweezer Types:<br>Black anti-static coating<br>Replaceable rubber tip<br>Surface shiny stainless stress<br>Stainless steel wafer Tweezers",
        imagePath: "./images/products/Tweezers.png",
        family: "ACCESSORIES AND TOOLS"
    },
    {
        title: "TOSHIBA BLB UV LAMPS",
        description: "The BLB (Black Light Blue) lamps use a special glass filter that absorbs almost all visible light and passes near ultraviolet energy. There are many industrial applications for these lamps such as photo exposure and chemical reactions. They can also be used for the selection of minerals by fluorescence. ",
        imagePath: "./images/products/Toshiba.png",
        family: "SPARE PARTS"
    },
    {
        title: "USHIO METAL HILDELAMP SERIES",
        description: "Contains mercury, scandium and various other metal halogens in an inner bulb that produces a very high light output. As the high temperature of the arc discharge excites the halogenides to evaporate and separate into atoms, the metallic atoms illuminate and release the predetermined target ultraviolet wavelength ",
        imagePath: "./images/products/Ushio.png",
        family: "SPARE PARTS"
    },
    {
        title: "JIG NUT",
        description: "The tool is used to tighten outer flange lock nut when installing new blade to have the blade locked in place. ",
        imagePath: "./images/products/Jig Nut.png",
        family: ""
    },
    {
        title: "SILICON DUST CLEANER",
        description: "DKleen101 is water based detergent for direct use without dilution. It is especially designed with mixed surfactants to remove semiconductor substrate particles and to clean or kill microorganisms. It is specially formulated with low foaming and disinfecting surfactants. It can be used to remove various particles from slicing or dicing substrates of silicon, silicon carbide, germanium, gallium arsenic, gallium nitride, indium phosphide. ",
        imagePath: "./images/products/Silicon Dust Cleaner.png",
        family: ""
    },
    {
        title: "ION BLOWER",
        description: "It is a static electricity elimination device that can be used for short to long distance by using a fan. ",
        imagePath: "./images/products/Ion Blowers.png",
        family: ""
    },
    {
        title: "OVERHEAD ION BLOWER",
        description: "It is possible to ionize whole closed space through upper installation. Due to slim and light-weight, the installation access is easier. Easy maintenance using a discharge needle cleaning brush and a detachable rubber cover. ",
        imagePath: "./images/products/Overhead Blower.png",
        family: ""
    },
    {
        title: "ION BLOWER",
        description: "AP-DJ2811 intelligent control / networking type screen display ion fan using DC de static technology, high air volume fan five-speed speed regulation, stable performance, the output air volume than ordinary fans to improve 1.45 times. With LCD display, with ion self-balancing function, self-balancing range ± 10V, and real-time display of the balance voltage",
        imagePath: "./images/products/Ion Blowers.png",
        family: ""
    },
    {
        title: "OVERHEAD ION BLOWER",
        description: `<ul>
        <li>Auto-cleaning when switch on;</li>
        <li>Default auto-cleaning time every 8 hours, Artificial emitter cleaning maintenance free;</li>
        <li>Five gears of stable fan speed;</li>
        <li>LED display shows ID address, fan speed and cleaning time;</li>
        <li>Duty ratio of positive and negative ion output adjustable to adjust ion balance;</li>
        <li>Auto balance with range ±10V;</li>
        <li>Light & Voice alarm when fan default and ion balance abnormal;</li>
        <li>Remote control ion output When Plate or material surface with high positive static charge, Press “Fan-“ “IB-”; When Plate or material surface with high Negative static charge, Press “Fan-”“IB+”</li>
    </ul>`,
        imagePath: "./images/products/overhead Blower 2.png",
        family: ""
    },
    {
        title: "SOLE CLEANER",
        description: "This automatic shoe soles cleaner machine is the best choice in terms of cleaning soles. So it is unnecessary to buy other soles cleaning products. Just trust us, and select our soles cleaning machines. It is competent to clean shoes made from different materials. Whether you wear heavy duty boots or other shoes, it can clean up. As a result, the machine can be used at the building entrance and other entrances with more people in and out. ",
        imagePath: "./images/products/Sole Cleaner.png",
        family: ""
    },
    {
        title: "DOUBLE DOOR CARGO",
        description: "The cargo air shower refers to the air shower specially set up for the goods/materials to enter and exit the clean workshop/clean room. The cargo air shower is a non-channel floor door closer with a 90-degree positioning, so that people and goods can enter and exit. ",
        imagePath: "./images/products/Double Door Cargo.png",
        family: ""
    },
    {
        title: "TURNSTILE",
        description: "ESD Antistatic Access Control Systems ESD Antistatic Access Control Systems is a system that integrates a comprehensive human body electrostatic tester, an electrostatic access control device, and computerized management software to ensure that employees are prepared for electrostatic protection when entering an electrostatic protection area. Combined with the access gate as a crowd control device, multiple entry methods (hand measurement, shoe measurement, hand and shoe measurement, and exemption) are set according to card permissions. The system provides orderly and safe passage, prevents illegal entry and exit, and quickly controls the opening of the gate in emergency situations to organize personnel evacuation. ",
        imagePath: "./images/products/ESD Turnstile.png",
        family: ""
    },
    {
        title: "GLOVES",
        description: "We are offering different kind of gloves:<br>Polyurethane Finger Coated Nylon Gloves <br>Polyurethane Palm Coated Nylon Gloves <br>PU Coated Finger Carbon Fiber ESD Gloves <br>PU Coated Palm Carbon Fiber ESD Gloves <br>PU Coated Finger Copper Fiber ESD Gloves <br>PU Coated Palm Copper Fiber ESD Gloves <br>Latex Gloves <br>Nitrile Gloves <br>PVC Gloves <br>ESD Embossed Gloves <br>Lint Free Gloves",
        imagePath: "./images/products/Gloves.png",
        family: ""
    },
    {
        title: "ANTI-STATIC WRIST STRAP",
        description: "Specifications: <br>Ground Resistance: 10^6 Ω <br>Static Electricity Discharge Time: <0.1 s",
        imagePath: "./images/products/Wrist Strap.png",
        family: ""
    },
    {
        title: "ALCOHOL DISPENSER BOTTLE",
        description: "Specifications: <br>Material: Anti-static materialcombined with HDPE<br>Color: Blue, Pink, Yellow, Green<br>Volume: 100ml, 150ml, 200ml250ml, 500ml",
        imagePath: "./images/products/Alcoho bottle.png",
        family: ""
    },
    {
        title: "ESD RUBBER MAT",
        description: `
        <style type="text/css">
        .tg {
          border-collapse: collapse;
          border-spacing: 0;
        }
        .tg td, .tg th {
          border-color: black;
          border-style: solid;
          border-width: 1px;
          font-family: Arial, sans-serif;
          font-size: 14px;
          overflow: hidden;
          padding: 10px 5px;
          word-break: normal;
          text-align: center; /* Horizontal center */
          vertical-align: middle; /* Vertical center */
        }
        .tg th {
          font-weight: normal;
        }
        .tg .tg-baqh {
          text-align: center;
          vertical-align: middle;
        }
        </style>
        <table class="tg">
          <thead>
            <tr>
              <th class="tg-baqh">Color</th>
              <th class="tg-baqh" colspan="4">Blue, Green, Gray, Black</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tg-baqh">Thickness</td>
              <td class="tg-baqh" colspan="4">2mm, 3mm</td>
            </tr>
            <tr>
              <td class="tg-baqh" rowspan="2">Ant-static <br>surface</td>
              <td class="tg-baqh">Surface<br>Resistance</td>
              <td class="tg-baqh">10^4-10^6Ω</td>
              <td class="tg-baqh">Specification</td>
              <td class="tg-baqh">Product Item</td>
            </tr>
            <tr>
              <td class="tg-baqh">Abrasive<br>Static<br>Potential</td>
              <td class="tg-baqh">≤ 100V</td>
              <td class="tg-baqh" rowspan="4">0.6x10m<br>1.0x10m<br>1.2x10m</td>
              <td class="tg-baqh" rowspan="4">JETM-610<br>JETM-110<br>JETM-1210</td>
            </tr>
            <tr>
              <td class="tg-baqh" rowspan="2">Conductive<br>surface</td>
              <td class="tg-baqh">Surface<br>Resistance</td>
              <td class="tg-baqh">10^4-10^6Ω</td>
            </tr>
            <tr>
              <td class="tg-baqh">Abrasive<br>Static<br>Potential</td>
              <td class="tg-baqh">≤ 50V</td>
            </tr>
            <tr>
              <td class="tg-baqh" colspan="2">Volume Resistivity</td>
              <td class="tg-baqh">10^6-10^9Ω</td>
            </tr>
          </tbody>
        </table>
    `,
        imagePath: "./images/products/ESD Rubber Mat.png",
        family: ""
    },
    {
        title: "STICKY MAT",
        description: "Specifications:<br>Material: PS Board + Non slip net<br>Size: 19”x37”, 19”x46”, 25”x37”, 27”x46”<br>PS Board Color: White<br>Non Slip net color: White, Grey, Red, Blue",
        imagePath: "./images/products/ESD Rubber Mat.jpg",
        family: ""
    },
    {
        title: "NON-WOVEN FACE MASK",
        description: "Non-woven face mask is made eco-friendly non-woven fabrics with breathable, non-toxic,flexible, durable and dissolve functions.",
        imagePath: "./images/products/Non Woven Facemask.png",
        family: ""
    },
    {
        title: "ACTIVATED CARBON FACE MASK",
        description: "Non-woven face mask is made eco-friendly non-woven fabrics with breathable, non-toxic, flexible, durable and dissolve functions. ",
        imagePath: "./images/products/Carbon Face Mask.jpg",
        family: ""
    },
    {
        title: "JW SERIES POLYESTER CLEANROOM WIPER",
        description: "Excellent cleaning effect. Efficiently fast absorption water and oil. Use laser sealed edges, low dust. Soft, no scratches on the surface of wiped products. ",
        imagePath: "./images/products/Cleanroom Swabs.jpg",
        family: ""
    },
    {
        title: "CLEANROOM SWAB",
        description: "Cloth/Foam Tip Special sealing edge technology on convergent of sponge/cloth tip High absorption, saturately, low particles PP or antistatic plastic handle High cleanliness, low dust ",
        imagePath: "./images/products/Cleanroom wiper.png",
        family: ""
    },
    {
        title: "2 PLY CLEANROOM WIPER",
        description: "Excellent cleaning effect. Efficiently fast absorption water and oil. Use laser sealed edges, low dust. Soft, no scratches on the surface of wiped products. ",
        imagePath: "./images/products/2 Ply Cleanroom Wipers.webp",
        family: ""
    },
    {
        title: "SMT AUTOMATIC STENCIL WIPER ROLL",
        description: "Strong tensile strength, Dust free, Lint Free, High absorption for water and oil.",
        imagePath: "./images/products/SMT Automatic Stencil Wiper Roll.jpg",
        family: ""
    },
    {
        title: "SMZ-0745B Stereo Microscope",
        description: "In a wide field of vision, a flat picture plane and a positive image with superb contrast are generated. The picture quality is brighter and clearer, the binocular visibility is changeable, and the best vision height is found in the periphery field of view. It may be used in a variety of sectors, including jewelry appearance inspection, phone maintenance, and SMT product appearance inspection. The three-eye model may be integrated into the marketplace, offer real-time imaging on the display, and increase the capabilities of image analysis, image measurement, and other operations",
        imagePath: "./images/products/SMZ-0745B Stereo Microscope.jpg",
        family: ""
    },
    {
        title: "BA Series Metallurgical Microscope ",
        description: "It is suitable for semiconductor testing, FPD, packaging, circuit substrate, casting, metal materials, precision molds and other fields. It provides observation functions such as dark field, polarization and differential interface (DIC) to calmly meet the observation needs such as quality management and manufacturing process inspection.",
        imagePath: "./images/products/BA Series Metallurgical Microscope.png",
        family: ""
    },
    {
        title: "Microscope CCD Camera",
        description: 'Introducing our versatile solution, which is ideal for all of your semiconductor applications. This product provides a variety of observation functions. With a built-in 15" monitor to decrease eye strain, this wonderful tool is designed to easily give visual inspection',
        imagePath: "./images/products/Microscope CCD Camera.png",
        family: ""
    },
    {
        title: "Compact Microscope CCD Camera",
        description: 'Introducing our versatile solution, which is ideal for all of your semiconductor applications. This product provides a variety of observation functions. With a built-in 8.0" monitor to decrease eye strain, this wonderful tool is designed to easily give visual inspection. ',
        imagePath: "./images/products/Compact Microscope CCD Camera.png",
        family: ""
    },
    {
        title: "Mini IP Camera ",
        description: "Serves as a surveillance device installed in a small workplace. With high resolution that can record up to 25 frames per second.",
        imagePath: "./images/products/Mini IP Camera.png",
        family: ""
    },
    {
        title: "C SERIES",
        description: "The body of the vacuum tweezers uses nylon resin containing carbon fiber (Torayca), which has excellent physical properties and conductivity. In addition, the internal valve part uses fluororesin, and the structure is such that the surroundings are covered with carbon fiberfilled nylon through a special molding method that does not impair airtightness. The nylon connector connected to the rear of the main unit is controlled by a specific resistance value of 10 to the 6th power ± 2 power. The adsorption tip uses conductive PEEK resin containing carbon fiber, which has excellent chemical and heat resistance. resistance, and maintains stable performance even when used for a long period of time. Abundant sizes of adsorption chips are available, and a wide range of selections are available for each wafer size. ",
        imagePath: "./images/products/Vacuum Wand.png",
        family: ""
    },
    {
        title: "BATCH TYPE",
        description: "Plasma was used before MD to improve the delamination between epoxy resin and substrate. ",
        imagePath: "./images/products/RF Plasma Cleaning Batch Type.png",
        family: ""
    },
    {
        title: "iN-LINE VARIABLE RAIL",
        description: "Plasma was used before MD to improve the delamination between epoxy resin and substrate. ",
        imagePath: "./images/products/RF Plasma Cleaning Inline Variable Rail.png",
        family: ""
    },
    {
        title: "CT SERIES",
        description: "Open/Fully Enclosed batch handling type Cleaning System which consists of multiple tanks, capable of providing high throughput and performing high flexibility processes.",
        imagePath: "./images/products/backend solution.png",
        family: ""
    },
    {
        title: "PANEL MOUNT",
        description: "The P series can be installed on a rack in accordance with EIA (Electronics Industries Association) standard. ",
        imagePath: "./images/products/Panel Mount.png",
        family: ""
    },
    {
        title: "CABINET TYPE",
        description: "The C series has a cabinet with a capacity of two CO2 cylinders",
        imagePath: "./images/products/Cabinet Type.png",
        family: ""
    },
    {
        title: "TSP SERIES",
        description: "TSP is ONE-STOP solution where instant black out compensation and surveillance monitoring function are integrated. ",
        imagePath: "./images/products/VOLTAGE SAG PROTECTOR.png",
        family: ""
    },

    {
        title: "PLANETARY MIXER",
        description: "A special kind of mixer, the planetary centrifugal mixer simultaneously removes air bubbles and evenly distributes/mixes the components. The materials-filled container is controlled by a central force produced by rapid revolution and rotation along the orbital path. ",
        imagePath: "./images/products/Planetary Mixer.png",
        family: ""
    },
];

function generateHTML(dicingProducts) {
    let html = '';
    dicingProducts.forEach((product, index) => {
        const isEven = index % 2 === 0;
        const textDiv = `<div class="flex-item col-md-6 mb-3 mb-md-0"><p><strong>${product.title}</strong><br>${product.description}</p></div>`;
        const imageDiv = `<div class="flex-item col-md-6 mb-3 mb-md-0 image-container"><img src="${product.imagePath}" class="img-fluid"></div>`;
        if (isEven) {
            html += `<div class="row mb-3">${textDiv}${imageDiv}</div>`;
        } else {
            html += `<div class="row mb-3">${imageDiv}${textDiv}</div>`;
        }
    });
    return html;
}

document.getElementById('dicing_product').innerHTML = generateHTML(dicingProducts);