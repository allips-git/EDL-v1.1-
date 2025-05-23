import Image from 'next/image'
import Link from 'next/link'
import TrustIcon from "@/images/clients/family-fund/trust.svg"
import ExtendIcon from "@/images/clients/family-fund/extend.svg"
import ResIcon from "@/images/clients/family-fund/res.svg"
import Logo from "@/images/clients/family-fund/together.png"
import { SectionIntro } from '@/components/SectionIntro'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-dark.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-dark.svg'
import logoGreenLife from '@/images/clients/green-life/logo-dark.svg'
import logoHomeWork from '@/images/clients/home-work/logo-dark.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-dark.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-dark.svg'
import logoPhobia from '@/images/clients/phobia/logo-dark.svg'
import logoUnseal from '@/images/clients/unseal/logo-dark.svg'
import { formatDate } from '@/lib/formatDate'
import { loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'
import { StatList, StatListItem } from '@/components/StatList'
import { Container } from '@/components/Container'


function CaseStudies({ caseStudies }) {
  return (
    <Container className="my-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          비전 & 핵심가치
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-28">
 
          <FadeIn>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={TrustIcon}
                      alt=""
                      className="h-12 w-12 flex-none"
                      unoptimized
                    />
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                     신뢰성
                    </h3>
                  </div>
                 
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                  신뢰를 만드는 기업
                  </p>
                  <div className="mt-6 space-y-4 text-base text-neutral-600">
                  EDL은 고순도 LiPF₆ 생산을 위해 SHIDA의 핵심 공정을 도입하고, 모든 라인을 최적화 조건으로 설계합니다. 균일도를 우선하는 공정 설계는 품질 승인에 핵심이 됩니다. <br/>
                  1만 톤 규모의 시운전은 예정대로 진행되었고, 모든 제품은 글로벌 파트너의 품질 테스트를 선행합니다. <br/> 가장 중요한 것은 납기와 품질의 이중 안정성입니다.
                  </div>
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
                      src={ExtendIcon}
                      alt=""
                      className="h-12 w-12 flex-none"
                      unoptimized
                    />
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                     확장성
                    </h3>
                  </div>
                
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                      확장은 설계로 시작되고, 시스템으로 완성됩니다
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                  EDL은 CAPA를 늘리는 것이 아닌, 시작부터 증설을 전제로 한 공정 구조를 설계합니다. <br/>
                  1차, 2차, 3차 설비가 단계별로 연계되고, 설비 간 호환성과 품질 유지 기준이 일관되게 적용됩니다.
                  </div>
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
                      src={ResIcon}
                      alt=""
                      className="h-12 w-12 flex-none"
                      unoptimized
                    />
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                     책임감
                    </h3>
                  </div>
                 
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                  깨끗하게 만들지 못하는 공정은, 만들지 않습니다
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                  HF 회수 시스템, 국산 원료의 적극적 도입, <br/>
                  그리고 ISO 기반 공정관리는 단순히 비용이 아니라 존재의 명분입니다. <br/>
                  우리는 '지속 가능한 제조업'의 현실적 정의를 만들어갑니다.
                  </div>
                </div>
                 
              </Border>
            </article>
          </FadeIn>
      </div>
    </Container>
  )
}



// export const metadata = {
//   title: 'Our Work',
//   description:
//     'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
// }

export default function Work() {
  // let caseStudies = await loadCaseStudies()
  let caseStudies = []

  return (
    <RootLayout>
      <PageIntro
        eyebrow="About us"
      >    
        <h2 className='mt-6 block max-w-5xl text-5xl font-medium tracking-tight text-balance text-[#C5013D] sm:text-6xl'>EDL</h2>
        <p className='mb-[300px]'>
        이디엘은 엔켐의 자회사로서 이차전지 배터리 전해액의 원재료인 고순도 리튬염을 생산하는 기업입니다.
        <span className='text-red-700'>엔켐</span>의 원재료 내재화 사업 추진하여, <span className='text-red-700'>이디엘</span>은 자체 리튬염 생산 기술력을 확보 후,
        엔켐의 글로벌 4대 생산 거점(북미, 중국, 유럽, 한국)에 공급을 계획하고 있습니다.
        ['23년 8월 새만금 국가산업단지 내 착공식을 거쳐 '25년 3월 공장 완공 예정]
        이디엘은 리튬염 생산을 10,000톤/년에서 100,000톤/년 목표로 지속적인 성장을 추진할 계획입니다.
        </p>
      </PageIntro>

      <Container className="mt-40">
      <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-6">
          연혁
      </h2>
        <StatList>
        <Border as={FadeIn} position='left' className={"flex flex-col pl-8"}>
          <dd className="text-neutral-950 sm:text-xl">
           2012년~2020년
          </dd>
          <dt className="mt-2 text-sm text-neutral-600">
          2012년 : DFD社, Shida社와 <br/>
          LiPF6 거래 개시, 합성기술 공동개발 <br/>
          ...................................................................... <br/>
          2013년 : LiFSi 시양산 개시. <br/>
          Gen 2 승인 등
          합성기술내재화 <br/>
          ......................................................................<br/>
          2013년 ~ 2020년 : 다양한 합성 점가재 개발 <br/>(ESA / HS02 / KY01 /<br/>
          SPDBF4 / TMEABF4 / SC04)
          </dt>
        </Border>
        <Border as={FadeIn} position='left' className={"flex flex-col pl-8"}>
          <dd className="text-neutral-950 sm:text-xl">
          2021년~2022년
          </dd>
          <dt className="mt-2 text-sm text-neutral-600">
          2021 년 : LiPF6 양산 공장 건설 준비 시작 <br/>
          ...................................................................... <br/>
          2021 년 : Shida社 동잉 공장에 한화 약
          460억원 투자 <br/>
          49% 지분 확보 및 기술 교류 <br/>
          ......................................................................<br/>
          2022년 : DFD社양푸 공장에 한화 약 530억원 <br/>
          투자, 15% 지분확보 잊 기술교류
          </dt>
        </Border>
        <Border as={FadeIn} position='left' className={"flex flex-col pl-8"}>
          <dd className="text-neutral-950 sm:text-xl">
          2023년
          </dd>
          <dt className="mt-2 text-sm text-neutral-600">
          2023 년 1월 : Songyun社인수목적 <br/>
          기술 실사단 파견 (10명, 1개월) <br/>
 
          ...................................................................... <br/>
          2023 년 7월 : 새만금 토지 매입
          <br/>
      
          ......................................................................<br/>
          2023 년 8월 : 새만금 산단 EDL LiPF6 <br/>
          공장 착공식 <br/>
          ......................................................................<br/>
          2023   9월 : 공장 건축물 건축 허가승인
          </dt>
        </Border>
        <Border as={FadeIn} position='left' className={"flex flex-col pl-8"}>
          <dd className="text-neutral-950 sm:text-xl">
          2024년
          </dd>
          <dt className="mt-2 text-sm text-neutral-600">
          2024년 3월 건축 착공허가 <br/>
        
 
          ...................................................................... <br/>
          2024년 3월 : Shida社1자~3차 기술 
          <br/>
          연수단 파견 (총연인원 50명, 약 5개월)

          ......................................................................<br/>
          2024년 6월 : L社인수목적 기술 실사단 파견
(10명, 1 개월) <br/>

          ......................................................................<br/>
          2024년 9월 : J社인수목적 기술 실사단 파견
(10명, 1 개월) <br/>
......................................................................<br/>
2024년 12월 : 공정 설계 최종 완료
          </dt>
        </Border>
        </StatList>
      </Container>

      <CaseStudies caseStudies={caseStudies} />

      <Container className="mt-40">
      <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-6">
      ISO 인증 획득
      </h2>
        <StatList>
        <Border as={FadeIn} className={"flex flex-col pt-8"}>
          <dd className="text-neutral-950 sm:text-xl">
          2025. 1Q
          </dd>
          <dt className="mt-2 text-sm text-neutral-600">
          · ISO 9001 <br/>
          · IATF16949 교육수료
          </dt>
        </Border>
        <Border as={FadeIn} className={"flex flex-col pt-8"}>
          <dd className="text-neutral-950 sm:text-xl">
          2025. 2Q
          </dd>
          <dt className="mt-2 text-sm text-neutral-600">
          · 컨설팅 업체 미팅 및 선정 <br/>
          · TFT 수립
          </dt>
        </Border>
        <Border as={FadeIn} className={"flex flex-col pt-8"}>
          <dd className="text-neutral-950 sm:text-xl">
          2025. 3Q
          </dd>
          <dt className="mt-2 text-sm text-neutral-600">
          · 매뉴얼 완료
          <br/>
          · 프로세스 완료
          <br/>
          · 절차서 및 지침서 완료
          <br/>
          · 표준양식 완료
          </dt>
        </Border>
        <Border as={FadeIn} className={"flex flex-col pt-8"}>
          <dd className="text-neutral-950 sm:text-xl">
          2025. 4Q
          </dd>
          <dt className="mt-2 text-sm text-neutral-600">
          · ISO 9001

          <br/>
          · ISO 14001

          <br/>
          · ISO 45001

          <br/>
          · ISO 37301
          <br/>
          · IATF16949 인증 취득
          </dt>
        </Border>
        <Border as={FadeIn} className={"flex flex-col pt-8"}>
          <dd className="text-neutral-950 sm:text-xl">
          2026. 1Q~2Q
          </dd>
          <dt className="mt-2 text-sm text-neutral-600">
          · Al양산


          <br/>
          <span className='ml-4'>·</span> 엔켐 PPAP 승인 <br/>
          <span className='ml-4'>·</span> A 고객사 PPAP 승인
          <br/>
          <span className='ml-4'>·</span> B 고객사 PPAP 승인
       

         
          </dt>
        </Border>

        </StatList>
      </Container>
      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"       
      >
        "저희는 엔켐과 중앙첨단소재가 함께합니다"

        <figcaption className="mt-10">
             <img src="/images/together.png" alt="chuang,enchem" />
            </figcaption>
      </Testimonial>

      <div className="mt-40 rounded-4xl bg-[#666666] py-24 sm:mt-4 lg:mt-40 lg:mb-4 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
    
        invert
      >
           <h2 className='block text-4xl font-medium sm:text-5xl text-neutral-200 mb-6'>
          책임, 투명성, 존중을 바탕으로, <br/>
          우리는 같은 방향을 향해 기술을 설계합니다.
        </h2>
        <p>
        EDL은 서로 다른 전문성이 유기적으로 협업하는 환경을 지향합니다.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="책임" invert> 
          각자의 자리에서 결과를 책임지고, 스스로 문제를 해결합니다.  <br/>
          '보고를 기다리는 시간'보다 '결과를 만드는 시간'이 중요합니다.
          </GridListItem>
          <GridListItem title="투명성" invert>
          EDL의 공정도, 협업도 숨기지 않습니다. 모든 정보는 <br/>
          공유되고, 모든 기술은 이해되어야 더 나아갈 수 있습니다.
          </GridListItem>
          <GridListItem title="존중" invert> 
          우리는 서로의 전문성과 시간, 집중을 존중합니다. <br/>
          질문이 오가는 조직은 실수가 반복되지 않는 조직입니다.
          </GridListItem>
        </GridList>
      </Container>
    </div>


    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="조직도"
       
      >
          <Border></Border>

      
      </SectionIntro>

      <Container className="mt-24">
       <img src="/images/organization.png" alt="" />
      </Container>
    </div>
    
    </RootLayout>
  )
}
