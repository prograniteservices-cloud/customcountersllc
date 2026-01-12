import { LucideIcon } from 'lucide-react';
export interface ServiceItem { title: string; description: string; icon: LucideIcon; }
export interface Testimonial { id: number; name: string; role: string; content: string; rating: number; }
export interface PortfolioItem { id: number; imageUrl: string; title: string; category: string; }
export interface NavLink { label: string; href: string; }
