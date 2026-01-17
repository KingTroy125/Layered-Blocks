import fs from 'fs'
import path from 'path'

export interface Block {
    slug: string
    title: string
    category: string
    preview: string
    code: string
}

function loadCode(filePath: string): string {
    const fullPath = path.join(process.cwd(), filePath)
    return fs.readFileSync(fullPath, 'utf-8')
}

export const blocks: Block[] = [
    {
        slug: 'hero-section',
        title: 'one',
        category: 'hero-section',
        preview: '/preview/hero-section/one',
        code: loadCode('app/preview/hero-section/one/page.tsx'),
    },

    {
        slug: 'logo-cloud',
        title: 'one',
        category: 'logo-cloud',
        preview: '/preview/logo-cloud/one',
        code: loadCode('app/preview/logo-cloud/one/page.tsx'),
    },

    {
        slug: 'features',
        title: 'one',
        category: 'features',
        preview: '/preview/features/one',
        code: loadCode('app/preview/features/one/page.tsx'),
    },
    {
        slug: 'features',
        title: 'two',
        category: 'features',
        preview: '/preview/features/two',
        code: loadCode('app/preview/features/two/page.tsx'),
    },
    {
        slug: 'content',
        title: 'one',
        category: 'content',
        preview: '/preview/content/one',
        code: loadCode('app/preview/content/one/page.tsx'),
    },
    {
        slug: 'content',
        title: 'seven',
        category: 'content',
        preview: '/preview/content/seven',
        code: loadCode('app/preview/content/seven/page.tsx'),
    },
    {
        slug: 'content',
        title: 'two',
        category: 'content',
        preview: '/preview/content/two',
        code: loadCode('app/preview/content/two/page.tsx'),
    },
    {
        slug: 'content',
        title: 'three',
        category: 'content',
        preview: '/preview/content/three',
        code: loadCode('app/preview/content/three/page.tsx'),
    },
    {
        slug: 'content',
        title: 'four',
        category: 'content',
        preview: '/preview/content/four',
        code: loadCode('app/preview/content/four/page.tsx'),
    },
    {
        slug: 'content',
        title: 'five',
        category: 'content',
        preview: '/preview/content/five',
        code: loadCode('app/preview/content/five/page.tsx'),
    },
    {
        slug: 'content',
        title: 'six',
        category: 'content',
        preview: '/preview/content/six',
        code: loadCode('app/preview/content/six/page.tsx'),
    },
    {
        slug: 'stats',
        title: 'one',
        category: 'stats',
        preview: '/preview/stats/one',
        code: loadCode('app/preview/stats/one/page.tsx'),
    },
    {
        slug: 'stats',
        title: 'two',
        category: 'stats',
        preview: '/preview/stats/two',
        code: loadCode('app/preview/stats/two/page.tsx'),
    },
    {
        slug: 'stats',
        title: 'three',
        category: 'stats',
        preview: '/preview/stats/three',
        code: loadCode('app/preview/stats/three/page.tsx'),
    },
    {
        slug: 'stats',
        title: 'four',
        category: 'stats',
        preview: '/preview/stats/four',
        code: loadCode('app/preview/stats/four/page.tsx'),
    },
    {
        slug: 'team',
        title: 'one',
        category: 'team',
        preview: '/preview/team/one',
        code: loadCode('app/preview/team/one/page.tsx'),
    },
    {
        slug: 'team',
        title: 'two',
        category: 'team',
        preview: '/preview/team/two',
        code: loadCode('app/preview/team/two/page.tsx'),
    },

    {
        slug: 'testimonials',
        title: 'one',
        category: 'testimonials',
        preview: '/preview/testimonials/one',
        code: loadCode('app/preview/testimonials/one/page.tsx'),
    },
    {
        slug: 'testimonials',
        title: 'two',
        category: 'testimonials',
        preview: '/preview/testimonials/two',
        code: loadCode('app/preview/testimonials/two/page.tsx'),
    },
    {
        slug: 'testimonials',
        title: 'six',
        category: 'testimonials',
        preview: '/preview/testimonials/six',
        code: loadCode('app/preview/testimonials/six/page.tsx'),
    },
    {
        slug: 'testimonials',
        title: 'seven',
        category: 'testimonials',
        preview: '/preview/testimonials/seven',
        code: loadCode('app/preview/testimonials/seven/page.tsx'),
    },
    {
        slug: 'testimonials',
        title: 'eight',
        category: 'testimonials',
        preview: '/preview/testimonials/eight',
        code: loadCode('app/preview/testimonials/eight/page.tsx'),
    },
    {
        slug: 'testimonials',
        title: 'nine',
        category: 'testimonials',
        preview: '/preview/testimonials/nine',
        code: loadCode('app/preview/testimonials/nine/page.tsx'),
    },
    {
        slug: 'call-to-action',
        title: 'one',
        category: 'call-to-action',
        preview: '/preview/call-to-action/one',
        code: loadCode('app/preview/call-to-action/one/page.tsx'),
    },
    {
        slug: 'call-to-action',
        title: 'two',
        category: 'call-to-action',
        preview: '/preview/call-to-action/two',
        code: loadCode('app/preview/call-to-action/two/page.tsx'),
    },
    {
        slug: 'call-to-action',
        title: 'three',
        category: 'call-to-action',
        preview: '/preview/call-to-action/three',
        code: loadCode('app/preview/call-to-action/three/page.tsx'),
    },
    {
        slug: 'footer',
        title: 'two',
        category: 'footer',
        preview: '/preview/footer/two',
        code: loadCode('app/preview/footer/two/page.tsx'),
    },
    {
        slug: 'footer',
        title: 'three',
        category: 'footer',
        preview: '/preview/footer/three',
        code: loadCode('app/preview/footer/three/page.tsx'),
    },
    {
        slug: 'footer',
        title: 'five',
        category: 'footer',
        preview: '/preview/footer/five',
        code: loadCode('app/preview/footer/five/page.tsx'),
    },
    {
        slug: 'pricing',
        title: 'one',
        category: 'pricing',
        preview: '/preview/pricing/one',
        code: loadCode('app/preview/pricing/one/page.tsx'),
    },
    {
        slug: 'pricing',
        title: 'two',
        category: 'pricing',
        preview: '/preview/pricing/two',
        code: loadCode('app/preview/pricing/two/page.tsx'),
    },
    {
        slug: 'pricing',
        title: 'three',
        category: 'pricing',
        preview: '/preview/pricing/three',
        code: loadCode('app/preview/pricing/three/page.tsx'),
    },
    {
        slug: 'pricing',
        title: 'four',
        category: 'pricing',
        preview: '/preview/pricing/four',
        code: loadCode('app/preview/pricing/four/page.tsx'),
    },
    {
        slug: 'pricing',
        title: 'five',
        category: 'pricing',
        preview: '/preview/pricing/five',
        code: loadCode('app/preview/pricing/five/page.tsx'),
    },

    {
        slug: 'faqs',
        title: 'one',
        category: 'faqs',
        preview: '/preview/faqs/one',
        code: loadCode('app/preview/faqs/one/page.tsx'),
    },

    {
        slug: 'faqs',
        title: 'two',
        category: 'faqs',
        preview: '/preview/faqs/two',
        code: loadCode('app/preview/faqs/two/page.tsx'),
    },

    {
        slug: 'login',
        title: 'one',
        category: 'login',
        preview: '/preview/login/one',
        code: loadCode('app/preview/login/one/page.tsx'),
    },
    {
        slug: 'login',
        title: 'two',
        category: 'login',
        preview: '/preview/login/two',
        code: loadCode('app/preview/login/two/page.tsx'),
    },

]

export const categories = [...new Set(blocks.map((b) => b.category))]