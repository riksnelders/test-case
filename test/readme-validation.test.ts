import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('README.md Test Note Validation', () => {
  const readmePath = path.resolve(__dirname, '../readme.md');
  const readmeContent = fs.readFileSync(readmePath, 'utf-8');

  it('should contain a test note section', () => {
    expect(readmeContent).toContain('## Test Notes');
  });

  it('test note should be at least 3 sentences long', () => {
    const testNoteSection = readmeContent.split('## Test Notes')[1]
      .split('##')[0]
      .trim();
    
    const sentences = testNoteSection.split(/[.!?]+/).filter(s => s.trim().length > 0);
    
    expect(sentences.length).toBeGreaterThanOrEqual(3);
  });

  it('test note should not be too long (max 500 characters)', () => {
    const testNoteSection = readmeContent.split('## Test Notes')[1]
      .split('##')[0]
      .trim();
    
    expect(testNoteSection.length).toBeLessThanOrEqual(500);
  });

  it('test note should contain meaningful content', () => {
    const testNoteSection = readmeContent.split('## Test Notes')[1]
      .split('##')[0]
      .trim();
    
    const meaningfulKeywords = [
      'test', 'testing', 'coverage', 'framework', 
      'validate', 'quality', 'verify', 'check'
    ];

    const hasKeywords = meaningfulKeywords.some(keyword => 
      testNoteSection.toLowerCase().includes(keyword)
    );

    expect(hasKeywords).toBe(true);
  });
});