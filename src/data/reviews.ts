export interface ReviewQuote {
  author: string;
  text: string;
  rating?: number;
  date?: string;
}

export interface ReviewsData {
  /** Display rating from Google Business Profile — do not invent. */
  rating: number;
  /** Total review count from Google Business Profile — do not invent. */
  count: number;
  /** Curated quote cards — empty until real quotes are added. */
  quotes: ReviewQuote[];
}

export const reviews: ReviewsData = {
  rating: 5.0,
  count: 11,
  quotes: [],
};
