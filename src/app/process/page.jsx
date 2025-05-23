import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import { Border } from '@/components/Border'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { RootLayout } from '@/components/RootLayout'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}





function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our core technology values"
       
      >

        <h4 className='block md:w-[590px] text-4xl font-medium sm:text-5xl mb-8 text-neutral-950'>
        제조 경쟁력의 본질은, <br/>
        기술을 품은 구조입니다.
        </h4>
        <p>
        우리는 공정 설계, 원가 구조, 글로벌 인증 대응까지 고려한 ‘전방위 제조 전략’을 구현한 <br/>
        기술 기업입니다. 다섯 가지 핵심 구조는, 우리가 왜 선택받는지를 증명합니다.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="원천 기술.">
          Central Glass사의 기반 기술을 도입해, EDL만의 조건에 맞춰 지속적인 개선을 추진합니다. 고정밀 반응과 내수 안정성을 모두 고려한 고도화 기술입니다.
          </GridListItem>
          <GridListItem title="제조 공법.">
          PCI₃/PCI₅ 기반의 이중 공정 대응이 가능해, 고객사 요청에 따라 유연하게 대응할 수 있는 생산 유연성을 확보하고 있습니다.
          </GridListItem>
          <GridListItem title="기술력.">
          SHIDA 설비를 기반으로 독자 기술을 더해, 생산 안정성, 공정 효율성, 시험 기간 단축을 모두 실현했습니다.
          </GridListItem>
          <GridListItem title="원가 경쟁력.">
          LiF 내재화(In-House)를 통해 원자재의 약 40%를 자급하고 있으며, IRA 요건 충족으로 세제 혜택까지 확보할 수 있는 구조입니다.
          </GridListItem>
          <GridListItem title="인증 및 현지화.">
          IRA 준수 (비중국산 원료), Utility 안정지역 확보, 장기적 원자재 현지화 대응까지 모든 밸류체인이 기술 위에 연결되어 있습니다.
          </GridListItem>
          
        </GridList>
      </Container>
    </div>
  )
}

// export const metadata = {
//   title: 'Our Technology',
//   description:
//     'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
// }

export default function Process() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Our Technology" title="기술력">
        <p className='mb-[300px]'>
        EDL은 전해액 핵심 원료인 LiPF₆를 국내 독자 기술로 생산하는 기업입니다. <br/>
        우리는 고순도 제품을 위한 반응·정제·결정화의 5단계 공정 기술과, 국내 유일의 Salt 내재화 기술을 <br/>
        바탕으로 지속 가능한 소재 생산의 미래를 만들어 갑니다.
        </p>
      </PageIntro>

      <Container>

<div className="">
  <h3 className='my-6 block max-w-5xl text-5xl tracking-tight text-balance text-neutral-950 sm:text-4xl'>기술 개요</h3>
  <p>
  LiPF₆는 리튬이온 배터리 전해액의 핵심 구성 물질로, 이온 이동성과 전기화학적 안정성을 동시에 만족시켜야 하는 고순도 정제물입니다. <br/>
  EDL은 AHF 기반 합성 공정 및 저수분 환경 반응 조건을 확보해 글로벌 품질 기준에 부합하는 LiPF₆를 공급합니다.
  </p>
</div>
  <p className='mt-12'>사용분야</p>

<TagList className="mt-4">
        <TagListItem>EV 배터리 (NCM, LFP 등)</TagListItem>
        <TagListItem>ESS 및 IT 배터리</TagListItem>
        <TagListItem>고메너지밀도 전해액 적용</TagListItem>
      
      </TagList>
</Container>

<Container className='mt-40'>

  <div className='flex flex-col gap-16 lg:flex-row lg:justify-between'>
  <div>
<h3 className='mb-16 block max-w-5xl font-display text-5xl tracking-tight text-balance text-neutral-950 sm:text-4xl'>제조 공정</h3>
<div className='flex lg:gap-16 flex-col lg:flex-row gap-16'>
  <div>
  <p>
EDL의 LiPF₆ 생산 공정은 5단계로 명확하게 구분되어 있으면서도, <br/>
각 단계마다 고도의 반응 조건 제어와 정제 기술이 적용되어 <br/>
고순도·고안정성 제품을 만들어냅니다.
  </p>

  <p className='my-10'>
  원료 단계부터 저수분 환경을 유지하고, <br/>
  반응기 내부 조건은 고정밀 제어 알고리즘으로 운영되며, <br/>
  정제/결정화 단계에서는 결정 구조의 일관성과 분산 안정성을 확보합니다.
  </p>

  <p>
  이 모든 공정은 최소한의 오염, 최대한의 순도를 위해 설계되었으며 <br/>
  폐수와 폐가스를 최소화하는 친환경 구조까지 포함됩니다.
  </p>
  </div>

  </div>

</div>
  <img src="/images/tech.png" alt="" />
    
  </div>


</Container>


{/* 
<div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
</div> */}


<Container className='mt-40'>
        <div className='flex flex-col justify-between items-start lg:flex-row'>
          <div className='flex flex-col gap-8'>


            <Border className="grid gap-x-8 gap-y-8 pt-2">
               
                <div className="col-span-full flex gap-24 justify-between lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display font-medium text-neutral-950 w-[73.05px]">
                  합성방식
                  </p>
                  <div className="space-y-6 text-base text-neutral-600">
                  액상 PCI₃ & 고상 PCI₅ 대응 / Continuous & Batch식
                  </div>
                </div>
                 
            </Border>

            <Border className="grid gap-x-8 gap-y-8 pt-2">
               
               <div className="col-span-full flex justify-between gap-24 lg:col-span-2 lg:max-w-2xl">
                 <p className="font-display font-medium text-neutral-950">
                 결정화 공정
                 </p>
                 <div className="space-y-6 text-base text-neutral-600">
                 5단 Agitator / -40℃ 운전 / 결정 시간 단축 (5hr ↓) <br/>
                  / 균일한 결정 사이즈 (200~250㎛)
                 </div>
               </div>
                
           </Border>

           <Border className="grid gap-x-8 gap-y-8 pt-2">
               
               <div className="col-span-full flex justify-between gap-24 lg:col-span-2 lg:max-w-2xl">
                 <p className="font-display font-medium text-neutral-950 w-[73.05px]">
                 공정제어
                 </p>
                 <div className="space-y-6 text-base text-neutral-600">
                 DCS 자동제어 시스템 / 운전 효율성 20% 향상
                 </div>
               </div>
                
           </Border>

           <Border className="grid gap-x-8 gap-y-8 pt-2">
               
               <div className="col-span-full flex justify-between gap-24 lg:col-span-2 lg:max-w-2xl">
                 <p className="font-display font-medium text-neutral-950">
                 정제 & 건조
                 </p>
                 <div className="space-y-6 text-base text-neutral-600">
                 Cone Type Batch 방식 / 폐설정 無 / 고순도 유지
                 </div>
               </div>
                
           </Border>

           <Border className="grid gap-x-8 gap-y-8 pt-2">
               
               <div className="col-span-full flex justify-between gap-24 lg:col-span-2 lg:max-w-2xl">
                 <p className="font-display font-medium text-neutral-950">
                 기술 내재화
                 </p>
                 <div className="space-y-6 text-base text-neutral-600">
                 SHIDA 설비 + 자체 기술 혼합 운용 / 전 공정 내재화
                 </div>
               </div>
                
           </Border>

           <Border className="grid gap-x-8 gap-y-8 pt-2">
               
               <div className="col-span-full flex justify-between gap-24 lg:col-span-2 lg:max-w-2xl">
                 <p className="font-display font-medium text-neutral-950">
                 원가 경쟁력
                 </p>
                 <div className="space-y-6 text-base text-neutral-600">
                 LiF 내재화(자체공급), IRA 대응 가능 / PF₆ 원자재 수입 최소화
                 </div>
               </div>
                
           </Border>

           <Border className="grid gap-x-8 gap-y-8 pt-2">
               
               <div className="col-span-full flex justify-between gap-24 lg:col-span-2 lg:max-w-2xl">
                 <p className="font-display font-medium text-neutral-950">
                 설비 경쟁력
                 </p>
                 <div className="space-y-6 text-base text-neutral-600">
                 PCI₃/PCI₅ 생산 전환 유연성 보유 / Utility 최적화
                 </div>
               </div>
                
           </Border>
          </div>
          {/* <img src="/images/biz.png" alt="" /> */}

          <div>
          <h3 className='mb-16 block max-w-5xl font-display text-5xl tracking-tight text-balance text-neutral-950 sm:text-4xl'>기술 경쟁력</h3>
<div className='flex lg:gap-16 flex-col lg:flex-row gap-16'>
  <div>
  <p>
  EDL은 LiPF₆ 제조 전 과정에 걸쳐 설비, 운전 조건, 원료 내재화, IRA 대응까지  <br/>
  “기술 중심의 통합 생산 시스템”을 확보하고 있습니다.
  </p>

  <p className='my-10'>
  원료 단계부터 저수분 환경을 유지하고, <br/>
  반응기 내부 조건은 고정밀 제어 알고리즘으로 운영되며, <br/>
  정제/결정화 단계에서는 결정 구조의 일관성과 분산 안정성을 확보합니다.
  </p>

  <p>
  EDL은 단순한 제조라인을 넘어서 고순도 제품을 위한 정밀 조건 설계, <br/>
  실제 수율 최적화, 생산 안정성 확보를 통해 타사 대비 차별화된 기술 경쟁력을 확보합 <br/>
  니다.
  </p>
  </div>

</div>
          </div>


          

         </div>
      </Container>

      <Values />

    </RootLayout>
  )
}
