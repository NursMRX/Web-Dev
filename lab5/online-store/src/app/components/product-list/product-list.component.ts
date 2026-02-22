import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl:    './product-list.component.css',
})
export class ProductListComponent {

  @Input() set products(value: Product[]) {
    this._products = value;
    this.showAll = false; // сбрасываем при смене категории
  }
  get products(): Product[] { return this._products; }
  private _products: Product[] = [];

  @Output() deleteProduct = new EventEmitter<number>();

  readonly previewCount = 8;
  showAll = false;

  get visibleProducts(): Product[] {
    return this.showAll
      ? this._products
      : this._products.slice(0, this.previewCount);
  }

  get hiddenCount(): number {
    return this._products.length - this.previewCount;
  }

  toggleShowAll() { this.showAll = !this.showAll; }

  onDelete(productId: number) {
    this.deleteProduct.emit(productId);
  }
}