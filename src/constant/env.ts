export const deploymentURL = process.env.NEXT_PUBLIC_DEPLOYMENT_URL
  ? `${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}`
  : process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export const fullName = 'Mathias Michel';
export const twitter = '@m91michel';
export const blogLink = 'mathias.rocks/blog';
export const siteName = 'mathias.rocks';
export const defaultLogo = '/images/logo.png';
