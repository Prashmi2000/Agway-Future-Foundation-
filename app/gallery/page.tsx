import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { GalleryGrid } from '@/components/gallery-grid'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Moments of seva captured in photos — meals served, children educated, elders cared for and communities uplifted by AGWAY Future Foundation.',
}

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Moments"
        title="Gallery"
        description="Glimpses of the smiles, service and impact we create together."
      />
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <GalleryGrid />
      </section>
    </>
  )
}
