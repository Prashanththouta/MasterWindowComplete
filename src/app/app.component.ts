import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';
  test = ['a', 'b'];
  products: any[]= [];
  customers: any[] =  [];

  constructor() {
  this.products = this.GetProducts();
  this.customers =  this.getCustomers();
  }
  getCustomers() {
    return [{
    "ID": 1,
    "CompanyName": "Super Mart of the West",
    "Address": "702 SW 8th Street",
    "City": "Bentonville",
    "State": "Arkansas",
    "Zipcode": 72716,
    "Phone": "(800) 555-2797",
    "Fax": "(800) 555-2171",
    "Website": "http://www.nowebsitesupermart.com"
}, {
    "ID": 2,
    "CompanyName": "Electronics Depot",
    "Address": "2455 Paces Ferry Road NW",
    "City": "Atlanta",
    "State": "Georgia",
    "Zipcode": 30339,
    "Phone": "(800) 595-3232",
    "Fax": "(800) 595-3231",
    "Website": "http://www.nowebsitedepot.com"
}, {
    "ID": 3,
    "CompanyName": "K&S Music",
    "Address": "1000 Nicllet Mall",
    "City": "Minneapolis",
    "State": "Minnesota",
    "Zipcode": 55403,
    "Phone": "(612) 304-6073",
    "Fax": "(612) 304-6074",
    "Website": "http://www.nowebsitemusic.com"
}, {
    "ID": 4,
    "CompanyName": "Tom's Club",
    "Address": "999 Lake Drive",
    "City": "Issaquah",
    "State": "Washington",
    "Zipcode": 98027,
    "Phone": "(800) 955-2292",
    "Fax": "(800) 955-2293",
    "Website": "http://www.nowebsitetomsclub.com"
}, {
    "ID": 5,
    "CompanyName": "E-Mart",
    "Address": "3333 Beverly Rd",
    "City": "Hoffman Estates",
    "State": "Illinois",
    "Zipcode": 60179,
    "Phone": "(847) 286-2500",
    "Fax": "(847) 286-2501",
    "Website": "http://www.nowebsiteemart.com"
}, {
    "ID": 6,
    "CompanyName": "Walters",
    "Address": "200 Wilmot Rd",
    "City": "Deerfield",
    "State": "Illinois",
    "Zipcode": 60015,
    "Phone": "(847) 940-2500",
    "Fax": "(847) 940-2501",
    "Website": "http://www.nowebsitewalters.com"
}, {
    "ID": 7,
    "CompanyName": "StereoShack",
    "Address": "400 Commerce S",
    "City": "Fort Worth",
    "State": "Texas",
    "Zipcode": 76102,
    "Phone": "(817) 820-0741",
    "Fax": "(817) 820-0742",
    "Website": "http://www.nowebsiteshack.com"
}, {
    "ID": 8,
    "CompanyName": "Circuit Town",
    "Address": "2200 Kensington Court",
    "City": "Oak Brook",
    "State": "Illinois",
    "Zipcode": 60523,
    "Phone": "(800) 955-2929",
    "Fax": "(800) 955-9392",
    "Website": "http://www.nowebsitecircuittown.com"
}, {
    "ID": 9,
    "CompanyName": "Premier Buy",
    "Address": "7601 Penn Avenue South",
    "City": "Richfield",
    "State": "Minnesota",
    "Zipcode": 55423,
    "Phone": "(612) 291-1000",
    "Fax": "(612) 291-2001",
    "Website": "http://www.nowebsitepremierbuy.com"
}, {
    "ID": 10,
    "CompanyName": "ElectrixMax",
    "Address": "263 Shuman Blvd",
    "City": "Naperville",
    "State": "Illinois",
    "Zipcode": 60563,
    "Phone": "(630) 438-7800",
    "Fax": "(630) 438-7801",
    "Website": "http://www.nowebsiteelectrixmax.com"
}, {
    "ID": 11,
    "CompanyName": "Video Emporium",
    "Address": "1201 Elm Street",
    "City": "Dallas",
    "State": "Texas",
    "Zipcode": 75270,
    "Phone": "(214) 854-3000",
    "Fax": "(214) 854-3001",
    "Website": "http://www.nowebsitevideoemporium.com"
}, {
    "ID": 12,
    "CompanyName": "Screen Shop",
    "Address": "1000 Lowes Blvd",
    "City": "Mooresville",
    "State": "North Carolina",
    "Zipcode": 28117,
    "Phone": "(800) 445-6937",
    "Fax": "(800) 445-6938",
    "Website": "http://www.nowebsitescreenshop.com"
}];
  }

  GetProducts() {
    return [{
    id: "1",
    text: "Stores",
    expanded: true,
    items: [{
        id: "1_1",
        text: "Super Mart of the West",
        expanded: true,
        items: [{
            id: "1_1_1",
            text: "Video Players",
            items: [{
                id: "1_1_1_1",
                text: "HD Video Player",
                price: 220
            }, {
                id: "1_1_1_2",
                text: "SuperHD Video Player",
                price: 270
            }]
        }, {
            id: "1_1_2",
            text: "Televisions",
            items: [{
                id: "1_1_2_1",
                text: "SuperLCD 42",
                price: 1200
            }, {
                id: "1_1_2_2",
                text: "SuperLED 42",
                price: 1450
            }, {
                id: "1_1_2_3",
                text: "SuperLED 50",
                price: 1600
            }, {
                id: "1_1_2_4",
                text: "SuperLCD 55",
                price: 1350
            }, {
                id: "1_1_2_5",
                text: "SuperLCD 70",
                price: 4000
            }]
        }, {
            id: "1_1_3",
            text: "Monitors",
            items: [{
                id: "1_1_3_1",
                text: "19\"",
                items: [{
                    id: "1_1_3_1_1",
                    text: "DesktopLCD 19",
                    price: 160
                }]
            }, {
                id: "1_1_3_2",
                text: "21\"",
                items: [{
                    id: "1_1_3_2_1",
                    text: "DesktopLCD 21",
                    price: 170
                }, {
                    id: "1_1_3_2_2",
                    text: "DesktopLED 21",
                    price: 175
                }]
            }]
        }, {
            id: "1_1_4",
            text: "Projectors",
            items: [{
                id: "1_1_4_1",
                text: "Projector Plus",
                price: 550
            }, {
                id: "1_1_4_2",
                text: "Projector PlusHD",
                price: 750
            }]
        }]

    }, {
        id: "1_2",
        text: "Braeburn",
        items: [{
            id: "1_2_1",
            text: "Video Players",
            items: [{
                id: "1_2_1_1",
                text: "HD Video Player",
                price: 240
            }, {
                id: "1_2_1_2",
                text: "SuperHD Video Player",
                price: 300
            }]
        }, {
            id: "1_2_2",
            text: "Televisions",
            items: [{
                id: "1_2_2_1",
                text: "SuperPlasma 50",
                price: 1800
            }, {
                id: "1_2_2_2",
                text: "SuperPlasma 65",
                price: 3500
            }]
        }, {
            id: "1_2_3",
            text: "Monitors",
            items: [{
                id: "1_2_3_1",
                text: "19\"",
                items: [{
                    id: "1_2_3_1_1",
                    text: "DesktopLCD 19",
                    price: 170
                }]
            }, {
                id: "1_2_3_2",
                text: "21\"",
                items: [{
                    id: "1_2_3_2_1",
                    text: "DesktopLCD 21",
                    price: 180
                }, {
                    id: "1_2_3_2_2",
                    text: "DesktopLED 21",
                    price: 190
                }]
            }]
        }]

    }, {
        id: "1_3",
        text: "E-Mart",
        items: [{
            id: "1_3_1",
            text: "Video Players",
            items: [{
                id: "1_3_1_1",
                text: "HD Video Player",
                price: 220
            }, {
                id: "1_3_1_2",
                text: "SuperHD Video Player",
                price: 275
            }]
        }, {
            id: "1_3_3",
            text: "Monitors",
            items: [{
                id: "1_3_3_1",
                text: "19\"",
                items: [{
                    id: "1_3_3_1_1",
                    text: "DesktopLCD 19",
                    price: 165
                }]
            }, {
                id: "1_3_3_2",
                text: "21\"",
                items: [{
                    id: "1_3_3_2_1",
                    text: "DesktopLCD 21",
                    price: 175
                }]
            }]
        }]
    }, {
        id: "1_4",
        text: "Walters",
        items: [{
            id: "1_4_1",
            text: "Video Players",
            items: [{
                id: "1_4_1_1",
                text: "HD Video Player",
                price: 210
            }, {
                id: "1_4_1_2",
                text: "SuperHD Video Player",
                price: 250
            }]
        }, {
            id: "1_4_2",
            text: "Televisions",
            items: [{
                id: "1_4_2_1",
                text: "SuperLCD 42",
                price: 1100
            }, {
                id: "1_4_2_2",
                text: "SuperLED 42",
                price: 1400
            }, {
                id: "1_4_2_3",
                text: "SuperLED 50",
                price: 1500
            }, {
                id: "1_4_2_4",
                text: "SuperLCD 55",
                price: 1300
            }, {
                id: "1_4_2_5",
                text: "SuperLCD 70",
                price: 4000
            }, {
                id: "1_4_2_6",
                text: "SuperPlasma 50",
                price: 1700
            }]
        }, {
            id: "1_4_3",
            text: "Monitors",
            items: [{
                id: "1_4_3_1",
                text: "19\"",
                items: [{
                    id: "1_4_3_1_1",
                    text: "DesktopLCD 19",
                    price: 160
                }]
            }, {
                id: "1_4_3_2",
                text: "21\"",
                items: [{
                    id: "1_4_3_2_1",
                    text: "DesktopLCD 21",
                    price: 170
                }, {
                    id: "1_4_3_2_2",
                    text: "DesktopLED 21",
                    price: 180
                }]
            }]
        }, {
            id: "1_4_4",
            text: "Projectors",
            items: [{
                id: "1_4_4_1",
                text: "Projector Plus",
                price: 550
            }, {
                id: "1_4_4_2",
                text: "Projector PlusHD",
                price: 750
            }]
        }]

    }]
}];
  }

  getGridWidth() {
    let width = window.innerWidth / 2.25;
    console.log(width, 'grid');
    return width;
  }

  getHeight() {
    let height = window.innerHeight / 1.1;
    console.log(height, 'height');
    return height;
  }

  getTreeWidth() {
    let width = window.innerWidth / 2.25;
    console.log(width, 'tree');
    return width;
  }


}

export interface Array2 {
  A2_1: string;
  A2_2: string;
}
