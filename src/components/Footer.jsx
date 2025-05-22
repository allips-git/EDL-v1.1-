import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo, Logomark } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'Work',
    links: [
      { title: 'FamilyFund', href: '/work/family-fund' },
      { title: 'Unseal', href: '/work/unseal' },
      { title: 'Phobia', href: '/work/phobia' },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/work',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Process', href: '/process' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact us', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <li>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              COMPANY
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
                <li className="mt-4">
                  회사 소개서 다운로드
                </li>
            </ul>
          </li>

          <li>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              CONTACT
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
                <li className="mt-4">
                  Email enchem@enchem.kr
                </li>
                <li className="mt-4">
                Tel 041-568-9080
                </li>
                <li className="mt-4">
                Fax 041-568-9089
                </li>
            </ul>
          </li>
      </ul>
    </nav>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Address
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
      천안 공장 : 충남 천안시 동남구 풍세면
      풍세산단5로 17 (용정리 984)
      </p>
      <p className="mt-4 text-sm text-neutral-700">제천 본사 : 충북 제천시 바이오밸리로 107</p>
    
    </form>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-60">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logomark className="h-8" fillOnHover />
          </Link>
          <p className="text-sm text-neutral-700">
            © (주식회사) 이디엘. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
