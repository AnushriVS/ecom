// import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../service/api.service';
// import { CartService } from '../service/cart.service';

// @Component({
//   selector: 'app-gift',
//   templateUrl: './gift.component.html',
//   styleUrl: './gift.component.scss'
// })
// export class GiftComponent implements OnInit{

//   gifts = [
//     { 
//       id: 10, 
//       title: 'Card1', 
//       image: 'assets/gifts/gift1.png', 
//       description: 'description', 
//       alt: 'Image 7', 
//       price: 220, 
//       quantity: '1' ,
//       total: 220
//     },
//     { 
//       id: 11, 
//       title: 'gift2', 
//       image: 'assets/gifts/gift2.png', 
//       description: 'description', 
//       alt: 'Image 8', 
//       price: 1500, 
//       quantity: '1' ,
//       total:1500
//     },
//     { 
//       id: 12, 
//       title: 'gift3', 
//       image: 'assets/gifts/gift3.png', 
//       description: 'description',
//       alt: 'Image 9', 
//       price: 50, 
//       quantity: '1' ,
//       total: 50
//     },
//     { 
//       id: 12, 
//       title: 'gift3', 
//       image: 'assets/gifts/gift4.png', 
//       description: 'description',
//       alt: 'Image 9', 
//       price: 50, 
//       quantity: '1' ,
//       total: 50
//     },
//     { 
//       id: 12, 
//       title: 'gift3', 
//       image: 'assets/gifts/gift5.png', 
//       description: 'description',
//       alt: 'Image 9', 
//       price: 50, 
//       quantity: '1' ,
//       total: 50
//     },
//     { 
//       id: 12, 
//       title: 'gift3', 
//       image: 'assets/gifts/gift.png', 
//       description: 'description',
//       alt: 'Image 9', 
//       price: 50, 
//       quantity: '1' ,
//       total: 50
//     },
//      { 
//       id: 12, 
//       title: 'gift3', 
//       image: 'assets/gifts/gift.png', 
//       description: 'description',
//       alt: 'Image 9', 
//       price: 50, 
//       quantity: '1' ,
//       total: 50
//     },
//     { 
//       id: 12, 
//       title: 'gift3', 
//       image: 'assets/gifts/gift.png', 
//       description: 'description',
//       alt: 'Image 9', 
//       price: 50, 
//       quantity: '1' ,
//       total: 50
//     },
    
    
//   ];
//   searchKey:string="";
//   constructor(private api: ApiService, private cartService: CartService) { }

//   ngOnInit(): void {

//     this.cartService.search.subscribe((val: any)=>{
//       this.searchKey = val;
//     })
//   }

//   addtoCart(item: any) {
//     this.cartService.addtoCart(item);
//     window.alert('Your product has been added to the cart!');
//   }

// }

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.scss']
})
export class GiftComponent implements OnInit {
  gifts = [
    { 
      id: 10, 
      title: 'Card1', 
      image: 'assets/gifts/gift1.png', 
      description: 'description', 
      alt: 'Image 7', 
      price: 220, 
      quantity: '1' ,
      total: 220,
      customMessage: '',
      userImage: ''
    },
    { 
      id: 11, 
      title: 'gift2', 
      image: 'assets/gifts/gift2.png', 
      description: 'description', 
      alt: 'Image 8', 
      price: 1500, 
      quantity: '1' ,
      total:1500,
      customMessage: '',
      userImage: ''
    },
    { 
      id: 12, 
      title: 'gift3', 
      image: 'assets/gifts/gift3.png', 
      description: 'description', 
      alt: 'Image 9', 
      price: 1500, 
      quantity: '1' ,
      total:1500,
      customMessage: '',
      userImage: ''
    },
    { 
      id: 13, 
      title: 'gift4', 
      image: 'assets/gifts/gift4.png', 
      description: 'description', 
      alt: 'Image 10', 
      price: 1500, 
      quantity: '1' ,
      total:1500,
      customMessage: '',
      userImage: ''
    },
    // { 
    //   id: 14, 
    //   title: 'gift5', 
    //   image: 'assets/gifts/gift5.png', 
    //   description: 'description', 
    //   alt: 'Image 10', 
    //   price: 1500, 
    //   quantity: '1' ,
    //   total:1500,
    //   customMessage: '',
    //   userImage: ''
    // },
  ];
  searchKey: string = "";
  generatedWish: string = "";
  generatedAnniversaryWish: string = "";
  generatedHolidayWish: string="";
  generatedGetWellWish: string="";
  generatedThankYouWish :string="";
  generatedCongratulationsWish: string="";
  generatedSympathyWish :string="";
  generatedFriendshipWish :string="";
  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  addtoCart(item: any) {
    this.cartService.addtoCart(item);
    window.alert('Your product has been added to the cart!');
  }

  onImageUpload(event: any, gift: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        gift.userImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  printCard(gift: any) {
    const printWindow = window.open('', '', 'height=600,width=800');
    if (printWindow) {
      printWindow.document.write('<html><head><title>Print Card</title></head><body>');
      printWindow.document.write(`<div><img src="${gift.image}" alt="${gift.alt}" style="width:100%; height:auto;"></div>`);
      if (gift.userImage) {
        printWindow.document.write(`<div><img src="${gift.userImage}" alt="User Image" style="width:100%; height:auto; margin-top:10px;"></div>`);
      }
      printWindow.document.write(`<div><p>${gift.customMessage}</p></div>`);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    }
  }

  generateWishes() {
    const wishes = [
      "Wishing you a day filled with love and cheer. Happy Birthday!",
      "May your birthday be the start of a year filled with good luck, good health, and much happiness.",
      "Sending you smiles for every moment of your special day. Have a wonderful time and a very happy birthday!",
      "Hope your special day brings you all that your heart desires! Here's wishing you a day full of pleasant surprises.",
      "On your birthday, may your heart be filled with joy and your life with laughter.",
      "Wishing you a beautiful day with good health and happiness forever. Happy birthday!"
    ];
    this.generatedWish = wishes[Math.floor(Math.random() * wishes.length)];
  }

  generateAnniversaryWish() {
    const anniversaryWishes = [
      "Congratulations on another year spent together. Here's to many more!",
      "May your love continue to grow stronger with each passing year. Happy anniversary!",
      "Wishing you both a lifetime of love and happiness. Happy anniversary!",
      "Cheers to the beautiful bond you share. Happy anniversary!",
      "May your anniversary be a day to remember as you celebrate the love you share. Happy anniversary!",
      "Celebrating the love you share today and every day. Happy anniversary!"
    ];
  
    this.generatedAnniversaryWish = anniversaryWishes[Math.floor(Math.random() * anniversaryWishes.length)];
  }
  
  generateHolidayWish() {
    const holidayWishes = [
      "Warm wishes for a joyous holiday season filled with peace and happiness!",
      "May the spirit of the holidays bring you joy, love, and light.",
      "Wishing you and your loved ones a magical holiday season and a happy new year!",
      "May your holidays be filled with laughter, love, and cherished memories.",
      "Sending you warm wishes for a festive holiday season and a bright new year!"
    ];
    this.generatedHolidayWish = holidayWishes[Math.floor(Math.random() * holidayWishes.length)];
  }

  generateGetWellWish() {
    const getWellWishes = [
      "Sending healing thoughts and prayers your way. Get well soon!",
      "Wishing you a speedy recovery and good health. Take care!",
      "Thinking of you and hoping you feel better soon. Take it easy and get well!",
      "Sending you lots of love and positive vibes for a quick recovery. Get well soon!",
      "Hoping you feel better with each passing day. Take care and get well soon!"
    ];
    this.generatedGetWellWish = getWellWishes[Math.floor(Math.random() * getWellWishes.length)];
  }

  generateThankYouWish() {
    const thankYouWishes = [
      "Your kindness means the world to me. Thank you so much!",
      "I'm deeply grateful for your generosity and thoughtfulness. Thank you!",
      "Your support and encouragement have made a world of difference. Thank you for everything!",
      "I can't thank you enough for your help and support. You're truly amazing!",
      "Sending you a heartfelt thank you for your kindness and support. I truly appreciate it!"
    ];
    this.generatedThankYouWish = thankYouWishes[Math.floor(Math.random() * thankYouWishes.length)];
  }

  generateCongratulationsWish() {
    const congratulationsWishes = [
      "Congratulations on your achievement! You deserve all the success and happiness.",
      "You've worked hard for this moment, and it's paying off. Congratulations!",
      "Cheers to your success! Here's to celebrating your achievements and many more to come.",
      "Your dedication and determination have led you to this moment. Congratulations!",
      "Well done! Your accomplishments are truly inspiring. Congratulations!"
    ];
    this.generatedCongratulationsWish = congratulationsWishes[Math.floor(Math.random() * congratulationsWishes.length)];
  }

  // Function to generate sympathy wish
  generateSympathyWish() {
    const sympathyWishes = [
      "I'm deeply sorry for your loss. My thoughts are with you during this difficult time.",
      "Sending you love and strength as you navigate through this challenging time. My deepest condolences.",
      "May fond memories bring you comfort and peace during this time of sorrow. My heartfelt sympathy.",
      "Thinking of you and your family during this difficult time. Sending you love and support.",
      "Wishing you peace and healing as you grieve the loss of your loved one. My sincerest condolences."
    ];
    this.generatedSympathyWish = sympathyWishes[Math.floor(Math.random() * sympathyWishes.length)];
  }

  // Function to generate friendship wish
  generateFriendshipWish() {
    const friendshipWishes = [
      "Cheers to the beautiful bond of friendship we share. Here's to many more memories together!",
      "You're not just a friend, you're family. Grateful for our friendship and the laughs we share.",
      "Thank you for being the friend who's always there. Here's to many more adventures together!",
      "Life is better with friends like you by my side. Grateful for our friendship every day.",
      "Sending a little love and appreciation your way for being such an amazing friend. Thank you!"
    ];
    this.generatedFriendshipWish = friendshipWishes[Math.floor(Math.random() * friendshipWishes.length)];
  }
  copyToClipboard(text: string) {
    const textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    alert('Copied to clipboard!');
  }
}

