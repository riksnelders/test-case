import { describe, it, expect } from 'vitest';
import fs from 'fs';

describe('README Documentation', () => {
  const readmeContent = fs.readFileSync('readme.md', 'utf-8');

  it('should contain test status sections', () => {
    expect(readmeContent).toContain('## Testing Status');
    expect(readmeContent).toContain('### Current Test Coverage');
    expect(readmeContent).toContain('### Testing Approach');
    expect(readmeContent).toContain('### Next Steps');
  });

  it('should have meaningful test status information', () => {
    const testStatusSections = [
      'Initial Status',
      'Test Framework',
      'Coverage',
      'Continuous integration',
      'test-driven development'
    ];

    testStatusSections.forEach(section => {
      expect(readmeContent).toContain(section);
    });
  });
});