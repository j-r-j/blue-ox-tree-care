import { services } from './services';

/** Path (before base prefix) of the estimate form. Every "Free Estimate" CTA links here. */
export const estimateFormPath = '/contact#estimate';

/**
 * Where the lead form POSTs. Set at build time; leave empty to fall back to mailto.
 * Works with Formspree, Basin, Getform, FormSubmit (/ajax/ URL), Web3Forms, or any
 * endpoint that accepts a JSON POST.
 */
export const leadFormEndpoint = (import.meta.env.PUBLIC_LEAD_FORM_ENDPOINT ?? '').trim();

/** Optional key sent as `access_key` (needed by Web3Forms; ignored by others). */
export const leadFormAccessKey = (import.meta.env.PUBLIC_LEAD_FORM_ACCESS_KEY ?? '').trim();

export const serviceOptions = [
  ...services.map((service) => service.shortTitle),
  'Not sure / Other',
];

export const contactMethods = ['Call', 'Text', 'Email'] as const;
