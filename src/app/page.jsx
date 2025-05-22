import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]


function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        className="mt-24 sm:mt-32 lg:mt-[300px]"
      >
        <h2 className='block md:w-[590px] text-4xl font-medium sm:text-5xl text-neutral-950 mb-6'>
          <span className='text-[#c5013d]'>EDL</span>이 기술로 여는 미래
        </h2>
        <p>
        전기차 배터리 시장의 급성장과 IRA(미국 인플레이션 감축법) 등 지정학적 리스크 속에서,<br/>
        EDL은 단순한 소재 공급을 넘어, 현지 생산 중심의 글로벌 JV 체계를 구축하고 있습니다. 
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-12 w-12"
                      unoptimized
                    />
                </h3>
                {/* <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p> */}
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Technology"
        className="mt-24 sm:mt-32 lg:mt-40"
      >

        <h2 className='block md:w-[590px] text-4xl font-medium sm:text-5xl text-neutral-950 mb-6'>
          <span className='text-[#c5013d]'>EDL</span>은 기술, 공급망, 전략을 기반으로 <br/>
          전해액 생산의 변화를 주도합니다.
        </h2>
        <p>
        이디엘은 엔켐의 자회사로서 이차전지 배터리 전해액의 원재료인 고순도 리튬염을 생산하는 기업입니다. <br/>
        우리의 기술은 공장에서 시작되지만, 그 파급력은 산업 전반으로 이어집니다. <br/>
        기술과 생산, 그리고 글로벌 전략까지—EDL은 소재 산업의 미래를 설계합니다.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-160 ">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 42rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="엔켐 자체기술 (자회사 내재화 기반)">
              <p>
              · 2012년 엔켐 설립과 동시에 Salt 내재화 준비 시작 <br/>
              · 엔켐의 합성기술을 활용해 첨가제 개발 및 내재화 생산 중 < br/>
               <span className='ml-6'> · LiFSI, LiPO₂F₂ Salt 기술 지속적으로 확보 및 개선 </span>  
              </p>
              
            </ListItem>
            <ListItem title="JV (Shida) 기반 기술 협력">
            <p>
              · Shida社 양산기술 지도 및 자문 <br/>
              · 2020년 Shida社 동일 공장 건설 참여 < br/>
              · 2021년부터 지속적인 양산기술 교류
              </p>
            </ListItem>
            <ListItem title="일본 Specialist 기술 협력">
            <p>
              · 일본 Salt 3社와 교류하며 기술 지도 中 <br/>
              · 일본 기술자 영입 예정
              </p>
            </ListItem>
            <ListItem title="인수 기술 & 경험">
            <p>
              · 2021년부터 중국 Salt社들 투자/인수 위해 기술실사 진행 <br/>
              · 2021년 DFD社의 양푸 공장 건설 참여 (530억 원 투자) < br/>
              · Li社, Ji社 2개社와 인수 논의 中 < br/>
              · Salt社 인수를 통해 양산 인력 및 노하우 대거 확보 예정
              </p>
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="">
          <h1 className="text-3xl font-bold tracking-tight text-black sm:text-7xl">
            시장을 선도하는 최적의 <br/>  글로벌 생산체제를 구축합니다
          </h1>
          <p className="mt-6 text-sm sm:text-lg text-neutral-600">
          EDL은 고순도 LiPF₆를 자체 기술로 생산하며,  글로벌 파트너십과 독자적인 제조 공정을 통해 <br/>
          차세대 배터리 산업의 핵심 공급망을 구축하고 있습니다. <br/>
          지속 가능한 기술, 안정적인 공급, 그리고 세계 시장 대응력— <br/>
          우리는 소재 산업의 미래를 설계합니다.
          </p>
        </FadeIn>
      </Container>

      {/* <Clients /> */}

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        <p className='leading-10'>
       "EDL은 기존의 한계를 돌파하며, 전해액 산업의 새로운 기준을 만들고 있습니다. <br/>
        단순한 공급이 아닌, 산업의 방향을 함께 설계하는 파트너입니다."

        </p>
      </Testimonial>

      <Services />

    </RootLayout>
  )
}
