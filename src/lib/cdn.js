const SITE_ASSETS =
  'https://cdn.prod.website-files.com/61477f2c24a826836f969afe/'
const CMS_ASSETS =
  'https://cdn.prod.website-files.com/61702af2e3966e09c4101538/'

export const asset = (file) => `${SITE_ASSETS}${file}`
export const cmsAsset = (file) => `${CMS_ASSETS}${file}`
