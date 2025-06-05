const fs = require('fs');
const path = require('path');

describe('README Documentation', () => {
  let readmeContent;

  beforeAll(() => {
    readmeContent = fs.readFileSync(path.resolve(__dirname, '../readme.md'), 'utf8');
  });

  test('README should contain test overview section', () => {
    expect(readmeContent).toContain('## Testing Overview');
  });

  test('Test overview should have multiple sections', () => {
    const requiredSections = [
      'Test Strategy',
      'Test Frameworks',
      'Running Tests',
      'Continuous Integration',
      'Contributing to Testing'
    ];

    requiredSections.forEach(section => {
      expect(readmeContent).toContain(`### ${section}`);
    });
  });

  test('Test note should be comprehensive', () => {
    const minTestNoteLength = 500; // Ensures substantial content
    expect(readmeContent.length).toBeGreaterThan(minTestNoteLength);
  });

  test('README includes code block for running tests', () => {
    expect(readmeContent).toMatch(/```bash\nnpm test/);
  });
});