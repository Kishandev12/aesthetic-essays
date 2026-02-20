const REQUIRED_STRING_FIELDS = ['title', 'author', 'date', 'readTime', 'category', 'excerpt'];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function coerceEssay(rawEssay, index) {
  const location = `essay at index ${index}`;
  assert(rawEssay && typeof rawEssay === 'object' && !Array.isArray(rawEssay), `${location} must be an object`);

  const normalized = {
    id: Number(rawEssay.id),
    title: typeof rawEssay.title === 'string' ? rawEssay.title.trim() : '',
    author: typeof rawEssay.author === 'string' ? rawEssay.author.trim() : '',
    date: typeof rawEssay.date === 'string' ? rawEssay.date.trim() : '',
    readTime: typeof rawEssay.readTime === 'string' ? rawEssay.readTime.trim() : '',
    category: typeof rawEssay.category === 'string' ? rawEssay.category.trim() : '',
    excerpt: typeof rawEssay.excerpt === 'string' ? rawEssay.excerpt.trim() : '',
    likes: Number.isFinite(Number(rawEssay.likes)) ? Number(rawEssay.likes) : 0,
  };

  assert(Number.isInteger(normalized.id) && normalized.id > 0, `${location} has invalid id`);

  for (const field of REQUIRED_STRING_FIELDS) {
    assert(normalized[field].length > 0, `${location} is missing required field: ${field}`);
  }

  assert(Number.isInteger(normalized.likes) && normalized.likes >= 0, `${location} has invalid likes`);

  return normalized;
}

export function validateEssays(rawEssays) {
  assert(Array.isArray(rawEssays), 'essays source must be an array');

  const validatedEssays = rawEssays.map(coerceEssay);
  const uniqueIds = new Set(validatedEssays.map((essay) => essay.id));
  assert(uniqueIds.size === validatedEssays.length, 'essay ids must be unique');

  return validatedEssays;
}
