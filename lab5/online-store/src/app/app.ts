import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from '../services/product.service';
import { Category } from './models/category.model';
import { Product }  from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl:    './app.css',
})
export class AppComponent implements OnInit {

  categories: Category[] = [];
  selectedCategory: Category | null = null;
  visibleProducts:  Product[]       = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.categories = this.productService.categories;
  }

  selectCategory(cat: Category) {
    this.selectedCategory = cat;
    this.visibleProducts  = this.productService
      .getProductsByCategory(cat.id)
      .map(p => ({ ...p }));
  }

  isSelected(cat: Category): boolean {
    return this.selectedCategory?.id === cat.id;
  }

  /** Возврат на главную — сбрасываем выбранную категорию */
  goHome() {
    this.selectedCategory = null;
    this.visibleProducts  = [];
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onDeleteProduct(productId: number) {
    this.visibleProducts = this.visibleProducts.filter(p => p.id !== productId);
  }
}