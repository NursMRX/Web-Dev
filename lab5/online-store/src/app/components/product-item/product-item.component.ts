import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-item-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl:    './product-item.component.css',
})
export class ProductItemComponent {

  @Input() product!: Product;

  /** Сообщает родителю какой товар удалить */
  @Output() deleteProduct = new EventEmitter<number>();

  likeAnimating = false;
  confirmDelete = false;

  // ── Like ───────────────────────────────────────────────────────────────────
  onLike() {
    this.product.likes++;
    this.likeAnimating = true;
    setTimeout(() => (this.likeAnimating = false), 400);
  }

  // ── Delete ─────────────────────────────────────────────────────────────────
  onDeleteClick() {
    this.confirmDelete = true;
  }

  confirmYes() {
    this.deleteProduct.emit(this.product.id);
  }

  confirmNo() {
    this.confirmDelete = false;
  }

  // ── Stars ──────────────────────────────────────────────────────────────────
  getStars(): boolean[] {
    return Array.from({ length: 5 }, (_, i) => i < Math.round(this.product.rating));
  }

  // ── Share ──────────────────────────────────────────────────────────────────
  shareWhatsApp() {
    const text = encodeURIComponent(
      `Check out this product on TechZone!\n*${this.product.name}*\nЦена: ${this.product.price} ₸\n${this.product.link}`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareTelegram() {
    const url  = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(`${this.product.name} — ${this.product.price} ₸ | TechZone`);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}