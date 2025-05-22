import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { formatDate } from '@/lib/formatDate'
import { loadArticles } from '@/lib/mdx'

export const metadata = {
  title: 'Our value',
  description:
    'Stay up-to-date with the latest industry news as our marketing teams finds new ways to re-purpose old CSS tricks articles.',
}

export default async function Blog() {
  let articles = await loadArticles()

  return (
    <RootLayout>
      <PageIntro eyebrow="Our value" title="WHY EDL?">
        <p>
        EDL은 국내 유일 Salt 내재화 기술과 글로벌 인증 대응 시스템을 기반으로 <br/>
        전해액 원료 산업에서 유일한 기술 + 전략 통합형 기업입니다.
        </p>
      </PageIntro>

      <Container className="mt-[300px] sm:mt-32 lg:mt-40">
      <h3 className='mb-6 block max-w-5xl font-display text-5xl tracking-tight text-balance text-neutral-950 sm:text-2xl'>핵심가치</h3>
        {/* <div className="space-y-24 lg:space-y-32">
          {articles.map((article) => (
            <FadeIn key={article.href}>
              <article>
                <Border className="pt-16">
                  <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-2xl font-semibold text-neutral-950">
                        <Link href={article.href}>{article.title}</Link>
                      </h2>
                      <dl className="lg:absolute lg:top-0 lg:left-0 lg:w-1/3 lg:px-4">
                        <dt className="sr-only">Published</dt>
                        <dd className="absolute top-0 left-0 text-sm text-neutral-950 lg:static">
                          <time dateTime={article.date}>
                            {formatDate(article.date)}
                          </time>
                        </dd>
                        <dt className="sr-only">Author</dt>
                        <dd className="mt-6 flex gap-x-4">
                          <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                            <Image
                              alt=""
                              {...article.author.image}
                              className="h-12 w-12 object-cover grayscale"
                            />
                          </div>
                          <div className="text-sm text-neutral-950">
                            <div className="font-semibold">
                              {article.author.name}
                            </div>
                            <div>{article.author.role}</div>
                          </div>
                        </dd>
                      </dl>
                      <p className="mt-6 max-w-2xl text-base text-neutral-600">
                        {article.description}
                      </p>
                      <Button
                        href={article.href}
                        aria-label={`Read more: ${article.title}`}
                        className="mt-8"
                      >
                        Read more
                      </Button>
                    </div>
                  </div>
                </Border>
              </article>
            </FadeIn>
          ))}
        </div> */}

      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-28">
 
          <FadeIn>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      // src={TrustIcon}
                      alt=""
                      className="h-12 w-12 flex-none"
                      unoptimized
                    />
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                    기술력
                    </h3>
                  </div>
                 
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                  기술은 스펙이 아니라 설계입니다.            
                  </p>
                  <div className="mt-6 space-y-4 text-base text-neutral-600">
                  EDL은 LiPF₆을 만드는 기술을 넘어,  반응 효율·공정 제어·입자 제어까지 전 과정을 하나의 설계 단위로 <br/>
                  통합합니다. 기술이 아니라, 기술 구조를 갖춘 기업 — 그게 바로 EDL의 차별성입니다.
                  </div>
                  <ul className='mt-8 text-neutral-600'>
                    <li style={{listStyle:"disc"}} className='ml-6'>국내 유일 전해액 원료 자체 기술 보유</li>
                    <li style={{listStyle:"disc"}} className='ml-6'>SHIDA 설비 기반에 독자 설계 추가</li>
                    <li style={{listStyle:"disc"}} className='ml-6'>고순도 제조공정 및 자동 제어 시스템</li>

                  </ul>
                </div>
                 
              </Border>
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      // src={ExtendIcon}
                      alt=""
                      className="h-12 w-12 flex-none"
                      unoptimized
                    />
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                    IRA 대응력
                    </h3>
                  </div>
                
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                  ‘대응’이 아닌, ‘기준’을 설계합니다.        
                  </p>
                  <div className="mt-6 space-y-4 text-base text-neutral-600">
                  EDL은 IRA 요건을 충족하는 것을 목표로 하지 않습니다. 우리는 처음부터 LiF 내재화, Utility 위치, 원료  <br/>
                  Traceability까지 글로벌 인증에 적합한 구조를 기준으로 설계합니다. 우리가 만든 기준은, 산업의 새로운 <br/>
                  기준이 됩니다.
                  </div>
                  <ul className='mt-8 text-neutral-600'>
                    <li style={{listStyle:"disc"}} className='ml-6'>LiF 내재화 → 원재료 기준 IRA 요건 충족</li>
                    <li style={{listStyle:"disc"}} className='ml-6'>PF₆ 기준 40% 이상 내재화율 확보</li>
                    <li style={{listStyle:"disc"}} className='ml-6'>Utility/공장 위치 기준 북미 수출 대응 설계</li>

                  </ul>
                </div>
              </Border>
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      // src={ResIcon}
                      alt=""
                      className="h-12 w-12 flex-none"
                      unoptimized
                    />
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                    공급 안정성
                    </h3>
                  </div>
                 
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                  지속 가능한 공급은, 전략입니다.   
                  </p>
                  <div className="mt-6 space-y-4 text-base text-neutral-600">
                  생산능력보다 중요한 건 공급의 ‘신뢰도’입니다. EDL은 한국, 중국, 유럽, 북미 4개 거점 JV를 기반으로   <br/>
                  현지 대응·물류 효율·고객 맞춤 생산까지 하나의 공급 전략 체계를 운영합니다. 단순한 물량이 아닌,  <br/>
                  예측 가능한 공급이 우리의 경쟁력입니다.
                  </div>
                  <ul className='mt-8 text-neutral-600'>
                    <li style={{listStyle:"disc"}} className='ml-6'>글로벌 4개 거점 JV 설립 (북미/중국/유럽/한국)</li>
                    <li style={{listStyle:"disc"}} className='ml-6'>PCI₃/PCI₅ 제조 전환 유연성</li>
                    <li style={{listStyle:"disc"}} className='ml-6'>수요처 맞춤 설계·생산 가능</li>

                  </ul>
                </div>
                 
              </Border>
            </article>
          </FadeIn>
      </div>
      </Container>

    </RootLayout>
  )
}
