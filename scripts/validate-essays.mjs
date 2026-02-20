import { essays as rawEssays } from '../src/essays.js';
import { validateEssays } from '../src/essayValidation.js';

try {
  validateEssays(rawEssays);
  console.log(`Validated ${rawEssays.length} essays successfully.`);
} catch (error) {
  console.error('Essay validation failed.');
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
