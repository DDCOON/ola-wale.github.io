import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
	stuff = [
		{
			name:'Gifr',subtitle:'extracts an mp4 from gifs.com without the watermark using web scraping and converts it back to .gif using ffmpeg',link:'http://dev.owale.co/gifr/',images:['/assets/images/gifr1.jpg']
		},
		{
			name:'Poke(test?)',subtitle:'Index of Pokemons cross-referenced with their stats and item\'s held using PokeApi.co',link:'http://dev.owale.co/poketest/',images:['/assets/images/pk1.jpg','/assets/images/pk2.jpg','/assets/images/pk3.jpg']
		},
		{
			name:'appeal',subtitle:'WordPress Blog Theme',link:'https://themeforest.net/item/appeal-a-news-blog-shop-wordpress-theme/17355806',images:['https://ola-wale.github.io/images/1.png']
		},
		{
			name:'June',subtitle:'Personal AngularJs Template',link:'http://owale.co/June',images:['/assets/images/june.jpg']
		},
		{
			name:'Typewrite.js',subtitle:'Javascript Library',link:'http://ola-wale.github.io/typewritejs',images:[]
		},
		{
			name:'BitBay-Sell-Bot',subtitle:'BitBay Bitcoin Trading Bot',link:'https://github.com/ola-wale/BitBay-Sell-Bot',images:[]
		},
		{
			name:'The Future Web',subtitle:'WordPress Blog Theme similar to TheNextWeb\'s',link:'http://owale.co/tfw/demo',images:['/assets/images/tfw.JPG']
		},
		{
			name:'Note8',subtitle:'Angularjs Note App (school project :/)',link:'http://dev.owale.co/note8',images:['/assets/images/n81.jpg','/assets/images/n82.jpg','/assets/images/n83.jpg','/assets/images/n84.jpg']
		},
	];
	age = new Date().getFullYear()-1998;
  constructor() {

	}

  ngOnInit() {
  }

}
