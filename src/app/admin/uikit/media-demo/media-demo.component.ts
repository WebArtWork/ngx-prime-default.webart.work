import { Component, signal } from '@angular/core';
import { Button } from '@wawjs/ngx-prime/button';
import { Carousel } from '@wawjs/ngx-prime/carousel';
import { Galleria } from '@wawjs/ngx-prime/galleria';
import { Image } from '@wawjs/ngx-prime/image';
import { Tag } from '@wawjs/ngx-prime/tag';

interface CarouselProduct {
	name: string;
	image: string;
	price: number;
	inventoryStatus: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
}

interface GalleriaImage {
	itemImageSrc: string;
	thumbnailImageSrc: string;
	alt: string;
}

const CAROUSEL_PRODUCTS: CarouselProduct[] = [
	{ name: 'Bamboo Watch', image: 'bamboo-watch.jpg', price: 65, inventoryStatus: 'INSTOCK' },
	{ name: 'Black Watch', image: 'black-watch.jpg', price: 72, inventoryStatus: 'INSTOCK' },
	{ name: 'Blue Band', image: 'blue-band.jpg', price: 79, inventoryStatus: 'LOWSTOCK' },
	{ name: 'Blue T-Shirt', image: 'blue-t-shirt.jpg', price: 29, inventoryStatus: 'OUTOFSTOCK' },
	{ name: 'Bracelet', image: 'bracelet.jpg', price: 15, inventoryStatus: 'INSTOCK' },
];

const GALLERIA_IMAGES: GalleriaImage[] = Array.from({ length: 9 }, (_, i) => {
	const n = i + 1;
	return {
		itemImageSrc: `https://primefaces.org/cdn/primeng/images/galleria/galleria${n}.jpg`,
		thumbnailImageSrc: `https://primefaces.org/cdn/primeng/images/galleria/galleria${n}s.jpg`,
		alt: `Gallery image ${n}`,
	};
});

const CAROUSEL_RESPONSIVE_OPTIONS = [
	{ breakpoint: '1024px', numVisible: 3, numScroll: 3 },
	{ breakpoint: '768px', numVisible: 2, numScroll: 2 },
	{ breakpoint: '560px', numVisible: 1, numScroll: 1 },
];

const GALLERIA_RESPONSIVE_OPTIONS = [
	{ breakpoint: '1024px', numVisible: 5 },
	{ breakpoint: '960px', numVisible: 4 },
	{ breakpoint: '768px', numVisible: 3 },
	{ breakpoint: '560px', numVisible: 1 },
];

@Component({
	selector: 'app-media-demo',
	imports: [Carousel, Button, Galleria, Image, Tag],
	templateUrl: './media-demo.component.html',
})
export class MediaDemoComponent {
	protected readonly products = signal(CAROUSEL_PRODUCTS);
	protected readonly images = signal(GALLERIA_IMAGES);
	protected readonly carouselResponsiveOptions = CAROUSEL_RESPONSIVE_OPTIONS;
	protected readonly galleriaResponsiveOptions = GALLERIA_RESPONSIVE_OPTIONS;

	protected getSeverity(status: CarouselProduct['inventoryStatus']) {
		switch (status) {
			case 'INSTOCK':
				return 'success';
			case 'LOWSTOCK':
				return 'warn';
			case 'OUTOFSTOCK':
				return 'danger';
			default:
				return 'success';
		}
	}
}
