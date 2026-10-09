import { site } from './site';
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

/**
 * TCPA call/text consent disclosure. The form renders `smsConsentLead` followed by
 * links to the Privacy Policy and Terms; `smsConsentText` is the same wording as plain
 * text and is what gets logged with each submission.
 */
export const smsConsentLead = `By checking this box, I agree that ${site.name} may contact me at the phone number I provided by call or text message, including by automated technology, about my request and ${site.name} services. Consent is not a condition of purchase. Message and data rates may apply. Message frequency varies. Reply STOP to opt out and HELP for help.`;

export const smsConsentText = `${smsConsentLead} See our Privacy Policy and Terms.`;
