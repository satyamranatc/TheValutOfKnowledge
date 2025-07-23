import React from 'react';
import './Home.css';
import { BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div className="home-hero">
      <div className="home-content">
        <BookOpen className="book-icon" size={48} />
        <h1>The Vault of Knowledge</h1>
        <p className="tagline">
          Discover the best handpicked books across Fiction, Non-Fiction, Horror, Tech, and Self-Help.
        </p>
        <p className="description">
          Built by <strong>Node Alchemist Pvt. Ltd.</strong>, this platform lets <strong>readers</strong> explore and read,
          while <strong>managers</strong> can easily manage the book library.
        </p>
        <a href="/books" className="cta-button">Explore Books</a>
      </div>
    </div>
  );
}
