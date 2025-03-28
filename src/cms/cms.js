import CMS from "decap-cms-app"
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('boarding', AboutPagePreview)
CMS.registerPreviewTemplate('camps', AboutPagePreview)
CMS.registerPreviewTemplate('horse-shows', AboutPagePreview)
CMS.registerPreviewTemplate('lessons', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
