import { essays as rawEssays } from './essays';
import { validateEssays } from './essayValidation';

export const essays = validateEssays(rawEssays);
