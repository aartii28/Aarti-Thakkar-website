import { Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-coffee-dark/5 bg-cream">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <Coffee className="w-5 h-5 text-coffee-medium" />
          <span className="font-serif font-bold">Aarti Thakkar</span>
        </div>
        
        <div className="text-sm text-coffee-medium">
          © {new Date().getFullYear()} Aarti Thakkar. All rights reserved.
        </div>
        
        <div className="flex gap-6 text-sm font-medium text-coffee-medium">
          <a href="#" className="hover:text-coffee-dark transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-coffee-dark transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
