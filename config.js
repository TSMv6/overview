var config = {
    //style: 'mapbox://styles/mapbox/streets-v11',
    // style: 'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat',   
    // style: 'mapbox://styles/amarsarvepalli19/cjx3yslwf7vy51cp9nef5eamc',  
    // style : 'mapbox://styles/amarsarvepalli19/clhggb09h02ig01p82wx1ezg8',       // NextGen 
    // style: 'mapbox://styles/amarsarvepalli19/clhhy7xbs00r001pegp7j4r8b',     // Land-use
    // style: 'mapbox://styles/amarsarvepalli19/clhi98yvn00sp01p63ail2mx2',     // Naviagtion
    // style : 'mapbox://styles/amarsarvepalli19/clhik6uxx02o101qmc47y9p39',       // NextGen-PPT
    style : 'mapbox://styles/amarsarvepalli19/clhj45sq002u401p8hlq14j4j',       // NextGen-PPT2

    customStyle : false,  // use this to apply chapter specific styles
    // Mapbox public (pk.) token: injected at deploy time (token.js is written by
    // the Pages workflow from the MAPBOX_TOKEN Actions secret), so the repository
    // never carries it. Browser exposure is inherent to Mapbox GL; the token is
    // URL-restricted in the Mapbox dashboard so it only works on our domains.
    accessToken: (typeof window !== 'undefined' && window.MAPBOX_TOKEN) || '',   
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Turnpike State Model - NextGen',
    subtitle: 'An agent-based model: disaggregate tours, distributed VOT, and multi-resolution dynamic traffic assignment (HyDRA)',
    byline: 'Venkat "Amar" Sarvepalli',
    // footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    footer: '',
    chapters: [
            {
            id: 'Presentation_Tile',
            alignment: 'center',
            hidden: false,
            title: 'TSM-NextGen: An Agent-Based Model',
            image: './images/Title.png',
            description: 'Turnpike Toll Studies and Forecasting Team. Every traveler is an individual agent - synthesized, scheduled, routed and simulated with its own value of time, occupancy and toll choices - from demand through multi-resolution dynamic traffic assignment.',
            location: {
                center: [-81.28787, 28.37169],    
                zoom: 6.16,
                pitch: 11.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            // mapStyle: 'mapbox://styles/amarsarvepalli19/clhggb09h02ig01p82wx1ezg8',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Chapter1_Tile-s1',
            alignment: 'center',
            hidden: false,
            title: 'CHAPTER 1: Why another model ?',
            image: './images/chapter_1/Title.png',
            description: 'There are 8 Regional Planning Models in the state and why do we need a Statewide Model ?  Well, lets see the details',
            location: {
                center: [-81.28787, 28.37169],    
                zoom: 6.16,
                pitch: 11.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            //mapStyle: 'mapbox://styles/amarsarvepalli19/cjx3yslwf7vy51cp9nef5eamc',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter1-s2',
            alignment: 'left',
            hidden: false,
            title: 'Sensitivity to Tolls: Value of Time',
            image: './images/chapter_1/TollSensitivity_1.png',
            description: 'All models are designed to be reactive to tolls. However their degree of sensitivity is the vital to toll forecasting. Additionall travellers willingness to pay and reliability also plays a role.',
            location: {
                center: [-81.70231, 28.52985],
                zoom: 9.17,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            //mapStyle: 'mapbox://styles/amarsarvepalli19/cjx3yslwf7vy51cp9nef5eamc',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'hts', opacity: 1, color: false}],
            onChapterExit: [{layer: 'hts', opacity: 0, color: false}]
        },
        {
            id: 'chapter1-s3',
            alignment: 'left',
            hidden: false,
            title: 'Distributed VOT: Income, Purpose',
            image: './images/chapter_1/VOT_1.png', 
            description: 'Value of Travel Time varies by trips and is largely dependent on travelers need, willingness to pay and personal preferences. <br> VOT is empirically as dependent of household income, trip purpose.' ,
            location: {
                // center: [-81.70231, 28.52985],
                // zoom: 9.17,
                // pitch: 0.00,
                // bearing: 0.00

                center: [-81.38096, 28.53625],
                zoom: 16.50,
                pitch: 56.50,
                bearing: 24.00
            },
            mapAnimation: 'flyTo',
            // customStyle : true,
            // mapStyle: 'mapbox://styles/amarsarvepalli19/clhi98yvn00sp01p63ail2mx2',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'i4-beltway-split-vertices-speeds', opacity: 1, color : false}],
            onChapterExit: [{ layer: 'i4-beltway-split-vertices-speeds', opacity: 0,  color : false}]
        },
        {
            id: 'chapter1-s4',
            alignment: 'right',
            hidden: false,
            title: 'Traveler attributes at trip level',
            image: './images/chapter_1/tripCharacteristics.png',
            description: 'To reasonably model toll and freeway route choices, the traveler household infomation such as income, family size, number of vehicles;  peronal attributes as worker or retire or student is required at the trip level.',
            location: {
                center: [-81.70231, 28.52985],
                zoom: 9.17,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            //mapStyle: 'mapbox://styles/amarsarvepalli19/cjx3yslwf7vy51cp9nef5eamc',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'hts', opacity: 1, color: false}],
            onChapterExit: [{layer: 'hts', opacity: 0, color: false}]
        },
        {
            id: 'chapter1-s5',
            alignment: 'left',
            hidden: false,
            title: 'Limited Disaggregate Models',
            image: './images/chapter_1/modelTypes_1.png',
            description: 'Not all regional models are "ABM" class and thus constrained by inconsistency across the models. Thus need for a new agent-based statewide model that synthesizes the population and carries every tour and trip as an individual agent from demand through assignment.',
            location: {
                center: [-83.85446, 28.31500],    
                zoom: 6.16,
                pitch: 11.50,
                bearing: 0.00,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {layer: 'abm-coverage', opacity: 1 , color : false}, //duration: 5000
              // {layer: 'counties-5fsk2i', opacity: 1, color : false} //duration: 5000
             ],
            onChapterExit: [
              {layer: 'abm-coverage', opacity: 0, color : false},
              // {layer: 'counties-5fsk2i', opacity: 0}
            ]
        },
        {
            id: 'chapter2-s1',
            alignment: 'fully',
            hidden: false,
            title: 'Chapter 2: What are Travel Markets ?',
            image: './images/chapter_2/TravelMarkets.png',
            description: 'Travel demand models are often designed to capture resident travel, however some advanced models include visitors and freight travel. In the context of limited access roads, particularly toll roads, there are more travel markets that need to be estimated. ',
            //description: '',
            location: {
                center: [-83.85446, 28.31500],    
                zoom: 6.16,
                pitch: 11.50,
                bearing: 0.00,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {layer: 'd19_p1', opacity: 1 , color : false}, //duration: 5000
              // {layer: 'counties-5fsk2i', opacity: 1, color : false} //duration: 5000
             ],
            onChapterExit: [
              {layer: 'd19_p1', opacity: 0, },
              // {layer: 'counties-5fsk2i', opacity: 0}
            ]
        },
        {
            id: 'chapter2-s2',
            alignment: 'left',
            hidden: false,
            title: 'Short and Long Distance Tours',
            image: './images/chapter_2/TourTypes.png',  
            description: 'The traditional travel modeling concept revolves around short-distance trips whose demand is more directly measured as everyone resident / visitor in town would make trip. On the other hand long-distance tours are not made every day by every person. At the same time tours mode are choosen depending on the destinations. For instance visitor visiting North Florida would have higher auto share compared to South Florida.',
            //description: '',
            location: {
                center: [-83.85446, 28.31500],    
                zoom: 6.16,
                pitch: 11.50,
                bearing: 0.00,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {layer: 'abm-coverage', opacity: 1 , color : false},  // USE DMA layer
             ],
            onChapterExit: [
              {layer: 'abm-coverage', opacity: 0 , color : false},
            ]
        },
        {
            id: 'chapter2-s3',
            alignment: 'right',
            hidden: false,
            title: 'Short-distance Resident Model',
            image: './images/chapter_2/sdt_res.png',
            description: 'Residents daily travel to : <br> 1. Mandatory Tours: Work, University, School <br> 2. Non-Mandatory Tours: Escort, Maintenance, Discretionary, AtWork <br> that are within 50 miles of their home location. A vast majority of the trips are resident short-distance trips.',
            location: {
                center: [-79.11113, 26.53048],
                zoom: 7.5,
                pitch: 12.00,
                bearing: 0.00,
                speed: 0.5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'abm-coverage', opacity: 0.75 , color : false}],
            onChapterExit: [{layer: 'abm-coverage', opacity: 0 , color : false}]
        },
        {
            id: 'chapter2-s4',
            alignment: 'left',
            hidden: false,
            title: 'Long-distance Visitor Model',
            image: './images/chapter_2/ldt.png',
            description: 'Out-of-State residents visiting Florida for: <br> 1. Business & Work travel <br> 2. Leisure / Recreational <br> 3. Visitng Friends & Family and <br> 4. Personal Business. <br> Peak season demand could be modeled through setting the month to peak month (March), however the current model is set to April / September which reflect average annual demand for visitors.',
            location: {
                // center: [-98.32749, 38.99996],
                // zoom: 3.77,
                // pitch: 12.00,
                // bearing: 0.00,
                center: [-84.61590, 28.41729],
                zoom: 6.0,
                pitch: 1.00,
                bearing: 0.00,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'airports-0mtwyt', opacity: 1 , color : false},
                             {layer: 'external-interstates', opacity: 1 , color : false},
                             {layer: 'external-stations', opacity: 0.5 , color : false}
                             // {layer: 'beaches', opacity: 1 , color : false},
                             // {layer: 'state-parks-parking', opacity: 1 , color : false}
                             ],  
            onChapterExit: [{layer: 'airports-0mtwyt', opacity: 0 , color : false},
                             {layer: 'external-interstates', opacity: 0 , color : false},
                              {layer: 'external-stations', opacity: 0 , color : false}
                             // {layer: 'beaches', opacity: 0 , color : false},
                             // {layer: 'state-parks-parking', opacity: 0 , color : false}
                             ]
        },
        {
            id: 'chapter2-s5',
            alignment: 'left',
            hidden: false,
            title: 'Short-distance Visitor Model',
            image: './images/chapter_2/sdt_vis.png',
            description: 'Visitor daily travel to recreational places / theme parks: <br> Most of these trips are generated at Hotels and some large households. These trips travel within cities or inter-city within 50 miles, mostly to theme parks, beaches and other state parks',
            location: {
                // center: [-79.11113, 26.53048],
                // zoom: 7.5,
                // pitch: 12.00,
                // bearing: 0.00,
                // center: [-81.79222, 28.29182],
                // zoom: 8.24,
                // pitch: 20.50,
                // bearing: 11.20,
                center: [-83.06911, 28.12735],
                zoom: 8.07,
                pitch: 0.00,
                bearing: 8.00,
                speed: 0.5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [{layer: 'hotel-addresses', opacity: 1 , color : false},
                             {layer: 'theme-parks', opacity: 1 , color : false},
                             {layer: 'land-hotel', opacity: 1 , color : false}],
                             // {layer: 'beaches', opacity: 0.75 , color : false},
                             // {layer: 'state-parks-parking', opacity: 0.75 , color : false}],  
            onChapterExit: [{layer: 'hotel-addresses', opacity: 0 , color : false},
                             {layer: 'theme-parks', opacity: 0 , color : false},
                             {layer: 'land-hotel', opacity: 0 , color : false}]
                             // {layer: 'beaches', opacity: 0, color : false},
                             // {layer: 'state-parks-parking', opacity: 0 , color : false}]
        },
        {
            id: 'chapter2-s6',
            alignment: 'left',
            hidden: false,
            title: 'Long-distance Cross-broder Model',
            image: './images/chapter_2/ldt_cbm.png',
            description: 'Florida, Georgia, and Alabama residents daily travel to between the states. These are daily trips that are not an overnight stay. Most of these trips use several county / state roads that serves these states, including some interstate travel.',
            location: {
                // center: [-83.27604, 32.31743],
                center: [-84.63243, 29.19950],
                zoom: 6.88,
                pitch: 46.50,
                bearing: 0.00,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'external-stations', opacity: 1 , color : false},
                            {layer: 'external-interstates', opacity: 0.25 , color : false}],
            onChapterExit: [{layer: 'external-stations', opacity: 0 , color : false},
                            {layer: 'external-interstates', opacity: 0 , color : false}]
        },
        {
            id: 'chapter3-Title',
            alignment: 'center',
            hidden: false,
            title: 'Model Structure',
            image: './images/chapter_3/Chapter3_Title.png',
            description: 'The model concept and structure follows commonly established practices starting out from land-use, demand estimation and route choice. However it involves in more complex procedures since TSM-NextGen is an agent-based model designed exclusive to support limited access and toll forecasting: each traveler keeps its identity (household, person, tour, trip), value of time and occupancy all the way through the dynamic assignment. While all person trips are modeled, the attention provided to non-auto modes is limited and thus cannot be used for bike / pedestrian or transit studies. ',
            location: {
                center: [-83.63244, 29.06899],
                zoom: 6.80,
                pitch: 4.50,
                bearing: -10.40,
                // center: [-83.27604, 32.31743],
                // zoom: 6.88,
                // pitch: 46.50,
                // bearing: 0.00,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'external-stations', opacity: 1 , color : false}],
            onChapterExit: [{layer: 'external-stations', opacity: 0 , color : false}]
        },
        {
            id: 'chapter3-s2',
            alignment: 'center',
            hidden: false,
            title: 'Model Structure',
            image: './images/chapter_3/ModelStructure.png',
            description: 'TSM-NextGen framework is designed to evlove organically as more and more details surrounding the travel behavior change over the time. The current framework involves in two classes of trips:  <br> 1. Estimated based on Survey Data (NHTS, Regional HTS, O-D Data, Transaction Data, SPS, Service Plaza Surveys, Visit Florida Data) and <br> 2. Asserted demand where surveys are thin (visitor tours, long-distance travel, truck demand approximations).',
            location: {
                center: [-83.63244, 29.06899],
                zoom: 6.80,
                pitch: 44.50,
                bearing: -10.40,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-POP', opacity: 1 , color : false}],
            onChapterExit: [{layer: 'nextgen-POP', opacity: 0 , color : false}]
        },
        {
            id: 'chapter3-s3a',
            alignment: 'left',
            hidden: false,
            title: 'Roadway Network Data',
            image: './images/chapter_3/Chap3a_Title.png',
            description: '',
            location: {
                center: [-84.98998, 28.40739],
                zoom: 6.88,
                pitch: 46.50,
                bearing: 0.00,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'sc2-network', opacity: 1 , color : false},
                             {layer: 'nte-network', opacity: 1 , color : false}],
            onChapterExit: [] 
        },
        {
            id: 'chapter3-s3',
            alignment: 'right',
            hidden: false,
            title: 'Roadway Network Data',
            image: './images/chapter_3/NetworkData.png',
            description: 'Roadway GIS files are maintained in GPKG format with various layers: <br> 1. Base Year - 2022 Network <br> 2. Future Year Networks - 5 Year Increments <br> 3. FTE Projects and various alignments <br> 4. Detailed MPO networks for Study areas <br> 5. Centroid Connectors <br> 6. Node data. ',
            location: {
                center: [-81.75836, 29.17622],
                zoom: 9.17,
                pitch: 3.50,
                bearing: 0.00,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter3-s4',
            alignment: 'right',
            hidden: false,
            title: 'Link Consolidation',
            image: './images/chapter_3/LinkConsolidation.png',
            description: 'Multiple links with same attributes are merged while retaining their shape and node numbers. This allows to maintain all network attrribute data at the lowest level (GeoMaster) while the scenario networks are more consolidated - a significant runtime reduction. Now performed by <b>netPrep</b>, a C++ engine that reads the GeoMaster GeoPackage directly and emits the consolidated network plus GMNS - carrying the DTA controls coded on GeoMaster (meso/micro tier tags, per-gantry toll policies, reversible lanes, truck restrictions and multiple count fields) straight onto the model network with no hand edits.',
            location: {
                center: [-81.75836, 29.17622],
                zoom: 9.17,
                pitch: 3.50,
                bearing: 0.00,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [{layer: 'sc2-network', opacity: 0 , color : false},
                             {layer: 'nte-network', opacity: 0 , color : false}]
        },
        {
            id: 'chapter3-s4',
            alignment: 'center',
            hidden: false,
            title: 'Many-to-One: User Settings',
            image: './images/chapter_3/programNET.png',
            description: 'The projects are coded in QGIS against the GeoMaster GeoPackage. netPrep keeps the Many-to-One lookup (every GeoMaster link to its consolidated link) so project coding, counts and DTA attributes always flow from the master network into a scenario. The user picks the layers for scenario development inside the TSM panel - no database server or side scripts required.',
            location: {
                center: [-83.27604, 32.31743],
                zoom: 6.88,
                pitch: 46.50,
                bearing: 0.00,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter3-s3b',
            alignment: 'center',
            hidden: false,
            title: 'Land-use Model',
            image: './images/chapter_3/Chap3b_Title.png',
            description: '',
            location: {
                center: [-83.63244, 29.06899],
                zoom: 6.80,
                pitch: 4.50,
                bearing: -10.40,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            // customStyle : true,
            // mapStyle: 'mapbox://styles/amarsarvepalli19/clhhy7xbs00r001pegp7j4r8b',  // land-use income
            rotateAnimation: false,
            callback: '',
            // onChapterEnter: [],
            onChapterEnter: [{layer: 'nextgen-medInc', opacity: 1 , color : false}],  //nextgen-se-sel
            onChapterExit: [{layer: 'nextgen-medInc', opacity: 0 , color : false}]
        },
        {
            id: 'chapter3-s5',
            alignment: 'right',
            hidden: false,
            title: 'Land-use Data Model',
            image: './images/chapter_3/landuseData.png',
            description: 'Land-use data is compiled from MPO data where available and parcel data USE CODE derived data is utilized in non-MPO regions. Only Households, Population and Employment data is extracted from the MPOs. ',
            location: {
                center: [-78.16045, 28.38551],
                zoom: 6.22,
                pitch: 38.00,
                bearing: -9.60,
                // center: [-80.3123, 26.0592],  // 9.41/26.0592/-80.3123/0/43
                // zoom: 6.5, // 9.41,
                // pitch: 35.0,
                // bearing: 0.00,
                speed: .5 // make the flying slow


            },
            mapAnimation: 'flyTo',
            customStyle : true,
            mapStyle: 'mapbox://styles/amarsarvepalli19/clhhy7xbs00r001pegp7j4r8b',  // land-use income
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-se-sel', opacity: 0.75, color : false}],  
            onChapterExit: [{layer: 'nextgen-se-sel', opacity: 0 , color : false}] //{layer: 'nextgen-se-sel', opacity: 0 , color : false}
        }, 
        {
            id: 'chapter3-s6',
            alignment: 'left',
            hidden: false,
            title: 'TAZ Data sub-categorization',
            image: './images/chapter_3/TAZAttributes.png',
            description: 'The process involves in interpolating at TAZ level for the scenario year, scaling to match BEBR controls at the county level and then allocated to various household, personal and employment sub-categories based on Census and InfoUSA distributions. ',
            location: {
                // center: [-83.27604, 32.31743],
                // zoom: 6.88,
                // pitch: 35.50,
                // bearing: 0.00,
                center: [-83.02417, 27.89955],
                zoom: 8.15,
                pitch: 38.00,
                bearing: -9.6,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            // customStyle : true,
            // mapStyle: 'mapbox://styles/amarsarvepalli19/clhhy7xbs00r001pegp7j4r8b',  // land-use income
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-age', opacity: 1, color : false}],  
            onChapterExit: [{layer: 'nextgen-age', opacity: 0 , color : false}] //
        },
        {
            id: 'chapter3-s7',
            alignment: 'left',
            hidden: false,
            title: 'Population Synthesizer',
            image: './images/chapter_3/PopSyn.png',
            description: 'Population Synthezier simulates each household and its members (persons) to replicate the total zonal, county and statewide populations. The perosnal and household attributes are synthezied based on Census Public Use Micro Sample Data (PUMS) data. The POPSYN used in NextGen is part of ActivitySIM software.',
            location: {
                center: [-85.92458, 27.89168],
                zoom: 6.61,
                pitch: 3.00,
                bearing: 0.00,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            // mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            // customStyle : true,
            // mapStyle: 'mapbox://styles/amarsarvepalli19/clhggb09h02ig01p82wx1ezg8',

            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'hts', opacity: 1 , color : false}], 
            onChapterExit: [{layer: 'hts', opacity: 0 , color : false}] 
        }, 
        {
            id: 'chapter5-s1',
            alignment: 'left',
            hidden: false,
            title: 'Network & Population Engines',
            image: './images/chapter_5/network.png',
            description: '<b>netPrep</b> - GeoMaster GeoPackage to consolidated Link/Node networks and GMNS in one pass: link consolidation with Many-to-One traceability, multiple count fields, and the DTA controls (meso/micro tiers, per-gantry toll policies, reversible lanes, truck restrictions) carried natively.<br><br><b>PathSkim</b> - C++ free-flow path skims written straight to OMX for the demand models.<br><br><b>PopSyn</b> - population synthesis (households + group quarters) with land-use prepared by <b>se_aggregate</b>, which rolls the 26k-zone regional land use up to model zones exactly.',
            location: {
                center: [-84.98998, 28.40739],
                zoom: 6.88,
                pitch: 46.50,
                bearing: 0.00,
                speed: .5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter3-s7',
            alignment: 'left',
            hidden: false,
            title: 'Tour-based Models: Resident, Visitor and Long Distance models',
            image: './images/chapter_3/Chap3c_Title.png',
            description: 'Four independent tour-based demand models are run: <br> 1. Short-distance Resident, 2. Short-distance Visitor <br> 3. Long-distance Resident (with FL) and 4. Long-distance Visitors (to/from Florida. ',
            location: {
                center: [-85.92458, 27.89168],
                zoom: 6.61,
                pitch: 3.00,
                bearing: 0.00,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            // mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            // customStyle : true,
            // mapStyle: 'mapbox://styles/amarsarvepalli19/clhggb09h02ig01p82wx1ezg8',

            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-se-sel', opacity: 1 , color : false}], 
            onChapterExit: [{layer: 'nextgen-se-sel', opacity: 0 , color : false}] 
        }, 
        {
            id: 'chapter3-s8',
            alignment: 'center',
            hidden: false,
            title: 'Resident Short-distance Tour-based Model',
            image: './images/chapter_3/sdt_resTours.png',
            description: 'Daily travel activities are scheduled and tours are estimated based on perosonal attributes: Worker, Student, Retiree. Tour destinations are estimated via location choice models based on zonal attractiveness. Tour purpose and stops are scheduled based on arrival and depature time intervals.',
            location: {
                center: [-78.16045, 28.38551],
                zoom: 6.22,
                pitch: 38.00,
                bearing: -9.60,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            customStyle : true,
            mapStyle: 'mapbox://styles/amarsarvepalli19/clhhy7xbs00r001pegp7j4r8b',  // land-use income
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-se-sel', opacity: 0.75, color : false}],  
            onChapterExit: [{layer: 'nextgen-se-sel', opacity: 0 , color : false}] //{layer: 'nextgen-se-sel', opacity: 0 , color : false}
        }, 
        {
            id: 'chapter3-s9',
            alignment: 'center',
            hidden: false,
            title: 'Household Travel Surveys',
            image: './images/chapter_3/Hts.png',
            description: 'Short-distance tour-based model components were estimated and calibrated based on household travel surveys conducted in the state by FDOT districts D2, D4, D6 and D7.',
            location: {
                center: [-78.16045, 28.38551],
                zoom: 6.22,
                pitch: 38.00,
                bearing: -9.60,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            // customStyle : true,
            // mapStyle: 'mapbox://styles/amarsarvepalli19/clhj45sq002u401p8hlq14j4j',  // land-use income
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-POP', opacity: 0.75, color : false}],  
            onChapterExit: [{layer: 'nextgen-POP', opacity: 0 , color : false}] //{layer: 'nextgen-se-sel', opacity: 0 , color : false}
        }, 
        {
            id: 'chapter3-s9b',
            alignment: 'center',
            hidden: false,
            title: 'Trip Length Frequency Distribution: Survey and Model Comparison',
            image: './images/chapter_3/tdlf.png',
            description: 'The average distance from short-distance models matches quite well with the household travel surveys. However, limited access and Turnpike facilities serve O-D pairs greater than 50 miles.',
            location: {
                // center: [-78.16045, 28.38551],
                // zoom: 6.22,
                // pitch: 38.00,
                // bearing: -9.60,
                center: [-84.01372, 29.43764],
                zoom: 8.01,
                pitch: 4.50,
                bearing: 0.00,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            customStyle : false,
            // mapStyle: 'mapbox://styles/amarsarvepalli19/clhj45sq002u401p8hlq14j4j',  // land-use income
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-medInc', opacity: 0.75, color : false}],  
            onChapterExit: [{layer: 'nextgen-medInc', opacity: 0 , color : false}] 
        },
        {
            id: 'chapter3-s10',
            alignment: 'center',
            hidden: false,
            title: 'Running SDT Resident Model',
            image: './images/chapter_3/callSDT.png',
            description: 'The short-distance resident tour-based model is now a modern C++ engine (<b>sdt-run</b>) - a full refactor of the original Java implementation (since retired). Scenario settings live in a control file, the run launches with one click from the TSM panel in QGIS, and the statewide population runs in minutes on all cores. Every simulated tour keeps its household / person / tour / trip identity for the assignment downstream.',
            location: {
                center: [-83.02417, 27.89955],
                zoom: 8.15,
                pitch: 38.00,
                bearing: -9.6,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-medInc', opacity: 0.75, color : false}],  
            onChapterExit: [{layer: 'nextgen-medInc', opacity: 0 , color : false}] 
        },
        {
            id: 'chapter3-s11',
            alignment: 'center',
            hidden: false,
            title: 'Running LDT Resident Model',
            image: './images/chapter_3/callLDT.png',
            description: 'The long-distance resident and visitor tour-based model estimates destination and mode jointly - a joint probability distribution of destination-choice and mode-choice. <br> The model is now a modern C++ engine (a full refactor of the original Pascal implementation, since retired) with control-file scenario settings, DMA-level destination calibration, external-station targets by market, and one-click launch from the TSM panel.',
            location: {
                center: [-83.02417, 27.89955],
                zoom: 8.15,
                pitch: 38.00,
                bearing: -9.6,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-DU', opacity: 0.75, color : false}],  
            onChapterExit: [{layer: 'nextgen-DU', opacity: 0 , color : false}] 
        },
        {
            id: 'chapter5-s2',
            alignment: 'right',
            hidden: false,
            title: 'Demand Engines',
            image: './images/chapter_5/demand.png',
            description: '<b>SDTModel</b> (sdt-run) - the resident and visitor short-distance tour models, refactored from Java to C++: statewide daily activity patterns, location choice on skim tiles, distributed VOT - in minutes.<br><br><b>LDTModel</b> (ldt-run) - long-distance resident / visitor / cross-border tours (joint destination-mode choice), refactored from Pascal to C++, with DMA-level calibration and market-specific external targets.<br><br><b>agentPlans</b> - assembles every market into one HyDRA-ready trip list: external-station scaling by market, departure-time clock, and the express-lane toll-choice inputs.',
            location: {
                center: [-81.28787, 28.37169],
                zoom: 6.16,
                pitch: 11.50,
                bearing: 0.00,
                speed: .5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter3-s13',
            alignment: 'center',
            hidden: false,
            title: 'Trips in Motion: Multi-Resolution DTA',
            image: './images/chapter_3/macroDTA.png',
            description: 'One run, three resolutions, one agent identity and one clock. <b>Macro</b>: a flow-conserving node-model loader (nodeDNL - cumulative Newell curves, sending/receiving flows, spillback) over the whole state. <b>Meso</b>: packet simulation with per-movement queues on the interstates and managed lanes. <b>Micro</b>: car-following / lane-changing (IDM + MOBIL) on express-lane corridors, choosing EL vs GP lane by each agent\'s value of time. Trucks load with passenger-car equivalents so congestion feels them properly.',
            location: {
                // center: [-83.02417, 27.89955],  
                // zoom: 8.15,
                // pitch: 38.00,
                // bearing: -9.6,
                center: [-78.79455, 28.85877],
                zoom: 6.80,
                pitch: 4.50,
                bearing: -10.40,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-Univ', opacity: 0.75, color : false}],  
            onChapterExit: [{layer: 'nextgen-Univ', opacity: 0 , color : false}] 
        },
        {
            id: 'chapter3-s14',
            alignment: 'center',
            hidden: false,
            title: 'Trips by Value of Travel Time',
            image: './images/chapter_3/votTrips.png',
            description: 'Value of time is continuous and carried per agent - not banded into a handful of trip tables. Toll and express-lane choices respond to the full VOT distribution by income and purpose, and any result (select link, turning movements, corridor usage) can be cut back to the individual travelers behind it.',
            location: {
                center: [-83.02417, 27.89955],
                zoom: 8.15,
                pitch: 38.00,
                bearing: -9.6,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            // onChapterEnter: [{layer: 'nte-network', opacity: 1, color : false}, {layer: 'sc2-network', opacity: 1, color : false}],  
            // onChapterExit: [{layer: 'nte-network', opacity: 0, color : false}, {layer: 'sc2-network', opacity: 0, color : false}] 
            onChapterEnter: [{layer: 'nextgen-medInc', opacity: 0.5, color : false}],  
            onChapterExit: [{layer: 'nextgen-medInc', opacity: 0 , color : false}]
        },
        {
            id: 'chapter3-s15',
            alignment: 'center',
            hidden: false,
            title: 'Express-Lane Tolling: From ELTOD to Native Policies',
            image: './images/chapter_3/callELTOD.png',
            description: 'What ELTOD did as a separate corridor program is now native in HyDRA, statewide and per facility. Four toll types run together in one assignment: fixed link tolls (axle-scaled for trucks), time-of-day schedules, <b>density-based dynamic pricing</b> per gantry (each express-lane facility with its own floor / ceiling / ramp - I-95 Miami-Dade differs from Broward, I-4 and I-75), and reversible-lane operation by time of day. Truck restrictions on the express lanes are honored by every tier.',
            location: {
                center: [-83.02417, 27.89955],
                zoom: 8.15,
                pitch: 38.00,
                bearing: -9.6,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-DU', opacity: 0.5, color : false}],  
            onChapterExit: [{layer: 'nextgen-DU', opacity: 0 , color : false}]
        },
        {
            id: 'chapter4_Title',
            alignment: 'center',
            hidden: false,
            title: 'Model Application to Projects',
            image: './images/chapter_4/chapter4_Title.png',
            description: '',
            location: {
                center: [-83.02417, 27.89955],
                zoom: 8.15,
                pitch: 38.00,
                bearing: -9.6,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-EMP', opacity: 0.5, color : false}],  
            onChapterExit: [{layer: 'nextgen-EMP', opacity: 0 , color : false}]
        },
        {
            id: 'chapter4-s2',
            alignment: 'center',
            hidden: false,
            title: 'Assignment Type',
            image: './images/chapter_4/assingType.png',
            description: 'The demand models write agent trip lists which assemble (agentPlans) into one statewide list - no aggregation into trip tables, ever. Truck trips are asserted based on O-D tour data from commercial vehicles disaggregated to warehouse parcels and ODME to truck counts. HyDRA assigns the agents directly at 15-minute resolution, with dynamic (density) pricing applied <b>statewide</b> in the same run - no separate corridor model needed. For focused studies, agentAnalysis extracts a subarea trip list (II / IE / EI / EE, boundary times included) that re-assigns in minutes.',
            location: {
                center: [-83.02417, 27.89955],
                zoom: 8.15,
                pitch: 38.00,
                bearing: -9.6,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-POP', opacity: 0.5, color : false}],  
            onChapterExit: [{layer: 'nextgen-POP', opacity: 0 , color : false}] 
        },
        {
            id: 'chapter4-s4',
            alignment: 'right',
            hidden: false,
            title: 'Suncoast Investment Grade Study',
            image: './images/chapter_4/mktAnalysis_1.png',
            description: 'Trips by VOT cateories could be analyzed in detail. Trips by purpose, market segment, purpose and time-of-day (hour or 15 minutes) could be analyzed.',
            location: {
                // center: [-80.21192, 25.87910],
                // zoom: 9.96,
                // pitch: 12.00,
                // bearing: 0.00,
                center: [-82.22960, 28.66648],
                zoom: 9.40,
                pitch: 4.50,
                bearing: 0.00,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'd19_p1', opacity: 1, color : false}, {layer: 'sc2-network', opacity: 1, color : false}],  
            onChapterExit: [{layer: 'd19_p1', opacity: 0, color : false}, {layer: 'sc2-network', opacity: 0, color : false}] 
        },
        {
            id: 'chapter4-s5',
            alignment: 'center',
            hidden: false,
            title: 'I-4 Express Lanes Application',
            image: './images/chapter_4/corridorUsage.png',
            description: 'Trips by VOT cateories could be analyzed in detail. Trips by purpose, market segment and time-of-day (hour or 15 minutes) could be analyzed.',
            location: {
                center: [-83.02417, 27.89955],
                zoom: 8.15,
                pitch: 38.00,
                bearing: -9.6,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-Univ', opacity: 0.75, color : false}],  
            onChapterExit: [{layer: 'nextgen-Univ', opacity: 0 , color : false}] 
        },
        {
            id: 'chapter4-s6',
            alignment: 'left',
            hidden: false,
            title: 'I-4 Express Lanes Application',
            image: './images/chapter_4/forecast.png',
            description: 'Express lanes forecast includes both tolled traffic and toll rate. Toll rates are dynamically charged based on congestion - density-based step pricing per gantry, native in HyDRA. Charts are model output for I-4 Express from the statewide run: hourly volume, speed and toll by direction, and average vehicles queued at the express-lane entrances (meso).',
            location: {

                center: [-81.75036, 28.31709],
                zoom: 10.70,
                pitch: 4.50,
                bearing: -10.40,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'i4-beltway-split-vertices-speeds', opacity: 1, color : true,}],
            onChapterExit: [{ layer: 'i4-beltway-split-vertices-speeds', opacity: 0,  color : false}]
        },
        {
            id: 'chapter5_Title',
            alignment: 'center',
            hidden: false,
            title: 'CHAPTER 5: The Refactor - One Agent-Based Platform',
            image: './images/chapter_5/title.png',
            description: 'The entire software stack has been rebuilt as a family of modern C++ engines around a single idea: <b>the agent</b>. One identity (household, person, tour, trip) flows unchanged from population synthesis through demand, assignment and analysis. The legacy mix of Java, Pascal, R and Cube-era scripts is retired; every engine ships as a self-contained executable driven from one QGIS panel - users install nothing. All repositories live under the <b>TSMv6</b> GitHub organization.',
            location: {
                center: [-83.63244, 29.06899],
                zoom: 6.80,
                pitch: 4.50,
                bearing: -10.40,
                speed: .5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter5-s3',
            alignment: 'left',
            hidden: false,
            title: 'HyDRA: Agent-Based Multi-Resolution Assignment',
            image: './images/chapter_5/hydra.png',
            description: '<b>agentflow-dta</b> (afdta) is the heart of the platform - a C++17 dynamic traffic assignment where all 77M agents are individuals:<br>- <b>Macro</b>: flow-conserving node-model loader (nodeDNL) statewide;<br>- <b>Meso</b>: packet simulation with turn-level queues on the limited-access system;<br>- <b>Micro</b>: IDM/MOBIL lane simulation on express corridors with per-agent EL/GP choice;<br>- Route chunks + progressive coarse-to-fine sampling for affordable convergence;<br>- Four toll types in one run (fixed / time-of-day / density-dynamic per gantry / reversible), axle-based truck tolls, PCE loading;<br>- Outputs one self-contained <b>agentPaths.duckdb</b> - every agent, its 4-part identity and its full path.',
            location: {
                center: [-80.21192, 25.87910],
                zoom: 9.96,
                pitch: 12.00,
                bearing: 0.00,
                speed: .5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter5-s4',
            alignment: 'right',
            hidden: false,
            title: 'Analysis, Reporting & the QGIS Panel',
            image: './images/chapter_5/analysis.png',
            description: '<b>agentAnalysis</b> - select link (OR / AND / per-link), turning movements, subarea extraction and household-level path trace over the billions of stored path links; a one-time link index turns 20-minute queries into seconds, under a hard RAM cap.<br><br><b>utilities</b> - the toolbox: <b>summarize</b> (60M+ link-performance rows to a loaded network GeoPackage in under a minute, in parallel), gpkgcsv and landuse_delta.<br><br><b>tsm_panel</b> - the single QGIS panel that runs the whole chain: network prep, demand, HyDRA (with the loaded network auto-mapped on completion), scenario report card, interchange dashboards and a micro lane-level visualizer.',
            location: {
                center: [-81.38096, 28.53625],
                zoom: 16.50,
                pitch: 56.50,
                bearing: 24.00,
                speed: .5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter_End',
            alignment: 'left',
            hidden: false,
            title: 'Open for Discussion',
            image: './images/questions.png',
            description: 'Well, how about some model complexities? <br> MonteCarlo simulation errors, Asynchroinzed random number issue, model estimates (cross-sectional) versus forecasts (time-series).',
            location: {
                center: [-83.02417, 27.89955],
                zoom: 8.15,
                pitch: 38.00,
                bearing: -9.6,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};              // I-4 
                // center: [-81.75036, 28.31709],
                // zoom: 10.70,
                // pitch: 4.50,
                // bearing: -10.40

                // Suncoast location
                // center: [-82.50164, 28.74146],
                // zoom: 11.24,
                // pitch: 11.50,
                // bearing: 0.00,

                // South Florida
                // center: [-80.21192, 25.87910],
                // zoom: 9.96,
                // pitch: 12.00,
                // bearing: 0.00,

                // State-Map (left)
                // center: [-84.69365, 27.74069],
                // zoom: 6.80,
                // pitch: 4.50,
                // bearing: -10.40

                // state-map (right)
                // center: [-78.79455, 28.85877],
                // zoom: 6.80,
                // pitch: 4.50,
                // bearing: -10.40

                // state-map (center)
                // center: [-83.63244, 29.06899],
                // zoom: 6.80,
                // pitch: 4.50,
                // bearing: -10.40
