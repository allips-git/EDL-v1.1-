import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'
import {Testimonial} from "@/components/Testimonial"

function Culture() {
  return (
    <div className="mt-40 rounded-4xl bg-[#666666] py-24 sm:mt-32 lg:my-40 lg:py-32">
      <SectionIntro
        eyebrow="Project strategy"
    
        invert
      >
           <h2 className='block md:w-[590px] text-4xl font-medium sm:text-5xl text-neutral-200 mb-6'>
          <span className='text-[#c5013d]'>EDL</span>은 국내 전해액 원재료의
          SPECIAL 공급망을 설계합니다.
        </h2>
        <p>
        EDL은 단순한 생산 공장을 넘어 우리는 Enchem, 중앙첨단소재을 기반을 두고, <br/>
        성장 모멘텀을 구축하여I RA 대응, 글로벌 공급처 분산, 관세 절감까지 공급을 "전략적으로" 만들어 갑니다.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Li-Salt JV" invert> <br/>
          IRA 대응형 원재료의 안정적 공급처 <br/>
          고순도 Salt 기반 LiPF₆ 정제 원료 확보
          </GridListItem>
          <GridListItem title="E-LYTE 공급" invert> <br/>
          Enchem 네트워크 기반 전해액 고객사 확대 <br/>
          EV 제조사와 직접 연계된 수요망 확보
          </GridListItem>
          <GridListItem title="CELL MAKER OEM 협업" invert> <br/>
          해외 전해액 고객사와 맞춤 OEM 생산 구조 <br/>
          공장 부지 및 설비 기반 연계 운영
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'project',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro eyebrow="project" title="사업영역">
        <p className='mb-[300px]'>
        EDL은 전해액 핵심 원료인 LiPF₆의 안정적인 공급을 위해, 새만금 국가산단에 연 20,000톤 규모의 
        공장을 설계하고 증설 중입니다. 단계형으로 설계된 확장형 구조를 통해, 기술, 생산, 공급망까지 <br />
        모두 갖춘 글로벌 원소재 생산 체계를 구축하고 있습니다.
        </p>
      </PageIntro>

      <Container>

      <div className="">
        <h3 className='my-6 block max-w-5xl font-display text-5xl font-bold tracking-tight text-balance text-neutral-950 sm:text-4xl'>새만금 프로젝트</h3>
        <p>
        리튬염(LiPF₆)은 전해액의 주요 구성 요소로, 국내 생산 능력의 확대가 시급한 상황입니다. <br />
        EDL은 이러한 시장의 요구에 부응하여 리튬염의 국산화를 추진하고 있습니다.<br />
        새만금 국가산업단지에 위치한 EDL의 생산시설은 국내외 배터리 제조사와의 협력을 통해 안정적인 공급망을 구축하고 있습니다
        </p>
      </div>

      </Container>

      <Container className='mt-20'>
        <div className='flex flex-col gap-12 sm:flex-row'>
          <img src="/images/biz.png" alt="" />

          <div className='flex flex-col gap-8'>


            <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-4">
               
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display font-medium text-neutral-950">
                  사업명칭
                  </p>
                  <div className="mt-2 space-y-6 text-base text-neutral-600">
                  · 새만금 리튬염사업
                  </div>
                </div>
                 
           </Border>




            <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-4">
   
            <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
            <p className="font-display font-medium text-neutral-950">
            주요 생산품
            </p>
            <div className="mt-2 space-y-6 text-base text-neutral-600">
              · 배터리 재료 : LiPF6
            </div>
    </div>
     
</Border>




            <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-4">

            <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
              <p className="font-display font-medium text-neutral-950">
              사업분류코드
              </p>
              <div className="mt-2 space-y-6 text-base text-neutral-600">
                 · 기타 기초 무기화학물질 제조업
              </div>
            </div>

            </Border>

            <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-4">

            <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
            <p className="font-display font-medium text-neutral-950">
            부지면적
            </p>
            <div className="mt-2 space-y-6 text-base text-neutral-600">
             · 전체 면적 : 112,397㎡ (34,000 평) <br/>
              · 연면적 1차 : 40,000㎡ (12,000 평) <br/>
              · 연면적 2차 : 28,000㎡ (8,000 평)
             </div>
          </div>

            </Border>

            <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-4">

<div className="col-span-full lg:col-span-2 lg:max-w-2xl">
<p className="font-display font-medium text-neutral-950">
공사 기간
</p>
<div className="mt-2 space-y-6 text-base text-neutral-600">
 · 1차 : 24년 5월 ~ 26년 3월 <br/>
  · 2차 : 26년 4월 ~ 27년 6월
 </div>
</div>

</Border>






          </div>

          

         </div>
      </Container>


      <Container className="mt-16">
      </Container>

      <Culture />


      <Container className="mt-40">
      <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-16">
      EDL 프로젝트의 핵심 요소
      </h2>
        <StatList>
          <div>
              <img src="/images/Icon.svg" alt="" />
              <p className='font-display text-2xl font-semibold text-neutral-950 mt-12 mb-4'>확장형 설계</p>
              <dt className='text-sm text-neutral-600'>
              1차 → 3차까지 일관된 구조로 <br/>
              설계된 증설 계획
              </dt>
          </div>
          <div>
              <img src="/images/Icon-1.svg" alt="" />
              <p className='font-display text-2xl font-semibold text-neutral-950 mt-12 mb-4'>JV 기반</p>
              <dt className='text-sm text-neutral-600'>
              SHIDA, DFD 등과의  <br/>
              글로벌 합작 운영
              </dt>
          </div>
          <div>
              <img src="/images/Icon-2.svg" alt="" />
              <p className='font-display text-2xl font-semibold text-neutral-950 mt-12 mb-4'>고순도 공정</p>
              <dt className='text-sm text-neutral-600'>
              AHF 기반 고순도 LiPF₆ 생산 기술
              </dt>
          </div>
          <div>
              <img src="/images/Icon-3.svg" alt="" />
              <p className='font-display text-2xl font-semibold text-neutral-950 mt-12 mb-4'>수출형 공급망</p>
              <dt className='text-sm text-neutral-600'>
              IRA 대응, <br/>
              북미/유럽 공급 기반 확보
              </dt>
          </div>
       
        </StatList>
      </Container>

      <Container className="mt-40">
      <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-16">
      주요 타임라인
      </h2>
        <StatList>
        <Border as={FadeIn} className={"flex flex-col pt-8"}>
          <dd className="text-neutral-950 sm:text-xl">
          2023
          </dd>
          <dt className="mt-2 text-sm text-neutral-600">
          · 새만금 부지 확보 <br/>
          · EDL LiPF6 공장 착공식
          </dt>
        </Border>
        <Border as={FadeIn} className={"flex flex-col pt-8"}>
          <dd className="text-neutral-950 sm:text-xl">
          2024
          </dd>
          <dt className="mt-2 text-sm text-neutral-600">
          · 기술 연수단 및 실사단 파견<br/>
          · 주요 장비 발주 및 납품 <br/>
          · 착공 및 기초 공사
          </dt>
        </Border>
        <Border as={FadeIn} className={"flex flex-col pt-8"}>
          <dd className="text-neutral-950 sm:text-xl">
          2025
          </dd>
          <dt className="mt-2 text-sm text-neutral-600">
          · 설비 설치
          <br/>
          · 기계/전기 마감
          <br/>
          · 기계/전기 마감
         
          </dt>
        </Border>
        <Border as={FadeIn} className={"flex flex-col pt-8"}>
          <dd className="text-neutral-950 sm:text-xl">
          2026
          </dd>
          <dt className="mt-2 text-sm text-neutral-600">
          · 2차 증설 관련 설계 및 구매 착수

          <br/>
          · LiPF6 생산량 10,000 톤/연

          <br/>
          · LiF 생산량 1,800 톤/연
         
          </dt>
        </Border>
        <Border as={FadeIn} className={"flex flex-col pt-8"}>
          <dd className="text-neutral-950 sm:text-xl">
          2027
          </dd>
          <dt className="mt-2 text-sm text-neutral-600">
          · 2차 완공 예정 (6월 목표) <br/>
          · LiPF6 생산량 10,000 톤/연 <br/>
          · LiF 생산량 1,800 톤/연

          
       

         
          </dt>
        </Border>

        </StatList>
      </Container>

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"       
      >
        “EDL은 대규모 리튬솔트 공장을 <br/>
        세계적 공장으로 자리매김하기 위한 PJT 을 가동 중입니다.”

        <p className='text-lg mt-16'>
        · 글로벌 NO.1 솔트기업 - 리튬염 제조 설비 운영 노하우(기술설비) <br/>
        · 합작법인 - 공장 건설 및 운영(운영관리) <br/>
        · 글로벌 고객사 - 리튬염 공급망 제공(글로벌 수주) <br/>
        · 우호펀드 / 매출 / 론(증설투자) 
        </p>
        
      </Testimonial>


     

    </RootLayout>
  )
}
