import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss']
})

export class BestSellersComponent implements OnInit {

  
  dresses = [
    { id: 100, title:'Ethereal Charm: Pink Frock', image: 'assets/dress/pink.jpeg', 
    description:'Crafted with soft, flowing fabric, its delicate silhouette is accentuated by intricate lace detailing, making it a perfect choice for any special occasion.',
    alt: 'Image 1', price:1 ,quantity:'1',total:2000},
    { id: 200, title:'Elegant Simplicity: The Blue Blossom Frock',image: 'assets/dress/blue.jpeg',
    description:"Wrap yourself in effortless charm with our Blue Blossom Frock. Crafted from soft, sky-blue fabric, its minimalist design exudes timeless elegance. Perfect for any occasion, this frock is a must-have addition to your wardrobe.",
    alt: 'Image 2', price: 1500,quantity:'1',total:1500},
    { 
      id: 300, 
      title: 'Whimsical White: Lace Dream Frock', 
      image: 'assets/dress/white.jpeg', 
      description: 'Its whimsical charm is heightened by intricate lace overlays, promising to captivate hearts at any event.', 
      alt: 'Image 3',  price: 2100,quantity: '1',total:2100
    },
    { 
      id: 400, 
      title: 'Enchanting Emerald: Green Goddess Frock', 
      image: 'assets/dress/green.jpeg', 
      description: 'Channel your inner goddess with our Green Goddess Frock. Its enchanting emerald hue and flowing silhouette evoke a sense of natural beauty and elegance.', 
      alt: 'Image 4', price: 2000, quantity: '1' ,total:2000
    },
    { 
      id: 500, 
      title: 'Timeless Classic: Black Beauty Frock', 
      image: 'assets/dress/black.png', 
      description: 'Embrace sophistication with our Black Beauty Frock, a timeless classic for every wardrobe. Its sleek design and versatile style make it a go-to choice for any occasion.', 
      alt: 'Image 5', price: 1500, quantity: '1' ,total:1500
    },
    { 
      id: 600, 
      title: 'Passionate Red: Scarlet Siren Frock', 
      image: 'assets/dress/red.png', 
      description: 'Ignite your passion with our Scarlet Siren Frock in vibrant red. Its daring hue and figure-flattering fit ensure all eyes are on you, making a bold statement wherever you go.', 
      alt: 'Image 6', price: 2100, quantity: '1' , total: 2100
    }
  ];

  provisions = [
    { 
      id: 700, 
      title: 'Golden Harvest: Whole Wheat Flour', 
      image: 'assets/provisions/wheat.png', 
      description: 'Experience the goodness of our Whole Wheat Flour, made from premium quality wheat grains. Packed with nutrients and freshness, its the perfect choice for wholesome baking and cooking.', 
      alt: 'Image 7', 
      price: 220, 
      quantity: '1' ,
      total: 220
    },
    { 
      id: 800, 
      title: 'Royal Treat: Basmati Rice', 
      image: 'assets/provisions/rice.png', 
      description: 'Indulge in the royal taste of our Basmati Rice, known for its long grains and exquisite aroma. Whether its for biryanis, pulaos, or simple steamed rice, this premium rice guarantees culinary perfection.', 
      alt: 'Image 8', 
      price: 1500, 
      quantity: '1' ,total:1500
    },
    { 
      id: 900, 
      title: 'Nutrient-Rich: Ragi Flour', 
      image: 'assets/provisions/ragi.png', 
      description: 'Boost your health with our Ragi Flour, a powerhouse of nutrients and energy. With its earthy flavor and versatility its an ideal choice for making nutritious rotis, dosas, and porridges',
      alt: 'Image 9', 
      price: 50, 
      quantity: '1' ,
      total: 50
    },
    
  ];
  searchKey:string="";
  constructor(private router: Router, private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {

    this.cartService.search.subscribe((val: any)=>{
      this.searchKey = val;
    })
  }

  addtoCart(item: any) {
    this.cartService.addtoCart(item);
    window.alert('Your product has been added to the cart!');
  }

}











