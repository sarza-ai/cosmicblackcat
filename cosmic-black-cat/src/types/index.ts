// ─── Product types ──────────────────────────────────────────────
export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  hoverImage?: string;
  category: ProductCategory;
  intention: Intention[];
  chakra?: Chakra[];
  energyTags: string[];
  isNew?: boolean;
  isBestseller?: boolean;
  isStaffPick?: boolean;
  isLowStock?: boolean;
  stockCount?: number;
  shortDescription: string;
}

export type ProductCategory =
  | 'crystals'
  | 'candles'
  | 'incense'
  | 'herbs-oils'
  | 'tarot-oracle'
  | 'books'
  | 'altar-tools'
  | 'jewelry'
  | 'bath-body'
  | 'local-artisan'
  | 'brooms'
  | 'apothecary';

export type Intention =
  | 'love'
  | 'protection'
  | 'abundance'
  | 'clarity'
  | 'healing'
  | 'grounding'
  | 'psychic'
  | 'shadow-work';

export type Chakra =
  | 'root'
  | 'sacral'
  | 'solar-plexus'
  | 'heart'
  | 'throat'
  | 'third-eye'
  | 'crown';

// ─── Intention card type ────────────────────────────────────────
export interface IntentionCard {
  id: Intention;
  label: string;
  description: string;
  symbol: string;
  gradient: string;
  accentColor: string;
  href: string;
}

// ─── Event type ─────────────────────────────────────────────────
export interface StoreEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  price: number | 'free';
  spotsRemaining?: number;
  href: string;
}

// ─── Cart types ─────────────────────────────────────────────────
export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}
