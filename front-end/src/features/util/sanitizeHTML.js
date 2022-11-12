import DOMPurify from 'dompurify';

export default function sanitizeHTML(dirty) {
  return DOMPurify.sanitize(dirty);
}