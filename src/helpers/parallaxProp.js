
// Kenapa Memilih Kami Section
    export const parallaxTitle = [
        {
        start: 0,
        end: 700,
        properties: [
            {
            startValue: -100,
            endValue: 100,
            property: "translateY",
            },
        ],
        },
    ];
    
    const tentangKamiParallaxProp = {
        'startPlx': [
            {
                startValue: 0,
                endValue: 1,
                property: "opacity",
            },
            
            {
                startValue: -100,
                endValue: 0,
                property: "translateY",
            },
        ],

        'secondPlx': [
            {
                startValue: 0,
                endValue: 0.5,
                property: "opacity",
            },
      
            {
                startValue: .75,
                endValue: .75,
                property: "scale",
            }
        ],

        'thirdPlx': [
            {
                startValue: 0,
                endValue: 0.2,
                property: "opacity",
            },
      
            {
                startValue: .4,
                endValue: .4,
                property: "scale",
            }
        ],

        'lastPlx': [
            {
                startValue: 0,
                endValue: 0.2,
                property: "opacity",
            },
      
            {
                startValue: 0,
                endValue: .4,
                property: "scale",
            },
        ],

        'secondSizePlx': [
            {
                startValue: 0.2,
                endValue: 0.5,
                property: "opacity",
            },
      
            {
                startValue: .4,
                endValue: .75,
                property: "scale",
            },
        ],

        'mainSizePlx': [
            {
                startValue: 0.5,
                endValue: 1,
                property: "opacity",
            },
      
            {
                startValue: .75,
                endValue: 1,
                property: "scale",
            }
        ],

        'zoomPlx': [
            {
                startValue: 1,
                endValue: 3,
                property: "scale",
            },
            
    
            {
                startValue: 1,
                endValue: 0.5,
                property: "opacity",
            },
        ],

        'hidePlx': [
            {
                startValue: 3,
                endValue: 5,
                property: "scale",
            },
              
            {
                startValue: 0.5,
                endValue: 0,
                property: "opacity",
            },
        ]
    }

    export const pointCard1 = [
        {
          start: 300,
          end: 700,
          properties: tentangKamiParallaxProp.startPlx,
        },
    
        {
          start: 950,
          end: 1200,
          properties: [
            {
              startValue: 0,
              endValue: -770,
              property: "translateX",
            },
            
            tentangKamiParallaxProp.zoomPlx[0],
            tentangKamiParallaxProp.zoomPlx[1]
          ],
        },
    
        {
          start: 1250,
          end: 1500,
          properties: [
            {
              startValue: -770,
              endValue: -1200,
              property: "translateX",
            },
            tentangKamiParallaxProp.hidePlx[0],
            tentangKamiParallaxProp.hidePlx[1]
          ],
        },
    ];

    export const pointCard2 = [
        {
          start: 300,
          end: 700,
          properties: [
            {
              startValue: -200,
              endValue: 0,
              property: "translateY",
            },
    
            tentangKamiParallaxProp.secondPlx[0],
            tentangKamiParallaxProp.secondPlx[1]
          ],
        },
    
        {
          start: 950,
          end: 1200,
          properties: tentangKamiParallaxProp.mainSizePlx,
        },
    
        {
          start: 1250,
          end: 1500,
          properties: [
            {
              startValue: 0,
              endValue: 770,
              property: "translateX",
            },
    
            tentangKamiParallaxProp.zoomPlx[0],
            tentangKamiParallaxProp.zoomPlx[1]
          ],
        },
    
        {
          start: 1550,
          end: 1800,
          properties: [
    
            {
              startValue: 770,
              endValue: 1200,
              property: "translateX",
            },
    
            tentangKamiParallaxProp.hidePlx[0],
            tentangKamiParallaxProp.hidePlx[1]
          ],
        },
    ];

    export const pointCard3 = [
        {
          start: 300,
          end: 700,
          properties: [
            {
              startValue: -300,
              endValue: 0,
              property: "translateY",
            },
    
            tentangKamiParallaxProp.thirdPlx[0],
            tentangKamiParallaxProp.thirdPlx[1]
          ],
        },
    
        {
          start: 950,
          end: 1200,
          properties: [
            {
              startValue: 0,
              endValue: -280,
              property: "translateX",
            },
    
            tentangKamiParallaxProp.secondSizePlx[0],
            tentangKamiParallaxProp.secondSizePlx[1]
          ],
        },
    
        {
          start: 1250,
          end: 1500,
          properties: tentangKamiParallaxProp.mainSizePlx
        },
        
        {
          start: 1550,
          end: 1800,
          properties: [
            {
              startValue: -280,
              endValue: -1050,
              property: "translateX",
            },
            tentangKamiParallaxProp.zoomPlx[0],
            tentangKamiParallaxProp.zoomPlx[1]
          ],
        },
    
        {
          start: 1850,
          end: 2100,
          properties: [
            {
              startValue: -1050,
              endValue: -1400,
              property: "translateX",
            },
    
            tentangKamiParallaxProp.hidePlx[0],
            tentangKamiParallaxProp.hidePlx[1]
          ],
        },
    ];

    export const pointCard4 = [
        {
          start: 950,
          end: 1200,
          properties: [
            {
              startValue: 0,
              endValue: -205,
              property: "translateX",
            },
    
            tentangKamiParallaxProp.lastPlx[0],
            tentangKamiParallaxProp.lastPlx[1]
          ],
        },
    
        {
          start: 1250,
          end: 1500,
          properties: [
            {
              startValue: -200,
              endValue: 80,
              property: "translateX",
            },
    
            tentangKamiParallaxProp.secondSizePlx[0],
            tentangKamiParallaxProp.secondSizePlx[1]
          ],
        },
    
        {
          start: 1550,
          end: 1800,
          properties: tentangKamiParallaxProp.mainSizePlx
        },
    
        {
          start: 1850,
          end: 2100,
          properties: [
            {
              startValue: 80,
              endValue: 850,
              property: "translateX",
            },
    
            tentangKamiParallaxProp.zoomPlx[0],
            tentangKamiParallaxProp.zoomPlx[1]
          ],
        },
    
        {
          start: 2150,
          end: 2400,
          properties: [
            {
              startValue: 850,
              endValue: 1400,
              property: "translateX",
            },
    
            tentangKamiParallaxProp.hidePlx[0],
            tentangKamiParallaxProp.hidePlx[1]
          ],
        },
    ];
// End