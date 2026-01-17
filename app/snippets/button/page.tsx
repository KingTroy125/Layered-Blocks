import SnippetPreview from '@/components/SnippetPreview'
import { Badge } from '@/components/ui/badge'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Shadcn Button Snippets',
    description: 'Custom shadcn buttons for your marketing website.',
}

export default function ButtonsPage() {
    return (
        <div className="*:has-[[data-state=open]]:bg-muted/25 *:hover:bg-muted/25 grid grid-cols-2 divide-x divide-y divide-dashed *:relative *:flex *:aspect-square *:items-center *:justify-center *:p-12 sm:grid-cols-2 lg:grid-cols-3 lg:*:aspect-video 2xl:mx-auto 2xl:max-w-7xl">
            <div className="group [--color-primary:var(--color-blue-600)] dark:[--color-primary-foreground:var(--color-white)]">
                {/* Badge */}
                    <div className="mb-4 flex items-center justify-start gap-3">
                        <div className="h-px w-12 bg-gradient-to-l from-primary/30 to-transparent sm:w-20" />
                        <Badge variant="hero" className="group">
                            <span className="text-sm font-normal">Join us</span>
                        </Badge>
                        <div className="h-px w-12 bg-gradient-to-r from-primary/30 to-transparent sm:w-20" />
                    </div>
                <div className={actionClasses}>
                    <SnippetPreview description={getButtonVariantDescription('default')} {...formatButtonVariantCode('default', 'from-primary/85 to-primary text-primary-foreground inset-shadow-2xs inset-shadow-white/25 bg-linear-to-b dark:from-primary/75 dark:bg-linear-to-t border border-zinc-950/35 shadow-md shadow-zinc-950/20 ring-0 transition-[filter] duration-200 hover:brightness-110 active:brightness-95 dark:border-0 dark:border-zinc-950/50')} />
                </div>
            </div>
        </div>
    )
}

const formatButtonVariantCode = (variant: ButtonProps['variant'], code: string) => {
    const displayedCode = `variant: {
    ${variant}: '${code}',
},`
    return {
        codeToCopy: code,
        displayedCode,
    }
}

const getButtonVariantDescription = (variant: ButtonProps['variant']) => {
    return `Add these Utilities to your button component's \`${variant}\` variant to apply this style configuration`
}

const actionClasses = 'lg:scale-55 absolute inset-x-0 bottom-4 mx-auto size-fit duration-200 lg:opacity-0 lg:group-hover:scale-100 lg:group-hover:opacity-100'
