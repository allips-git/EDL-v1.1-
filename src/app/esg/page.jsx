import Image from 'next/image'
import imageLaptop from '@/images/laptop.jpg'
import { Blockquote } from '@/components/Blockquote'
import imageMeeting from '@/images/meeting.jpg'
import { List, ListItem } from '@/components/List'
import clsx from 'clsx'
import { useId } from 'react'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { loadArticles } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'
import {Testimonial} from "@/components/Testimonial"
import { TagList, TagListItem } from '@/components/TagList'
import imageWhiteboard from '@/images/environment.jpg'
import { StylizedImage } from '@/components/StylizedImage'

const shapes = [
  {
    width: 655,
    height: 680,
    path: 'M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z',
  },
  {
    width: 719,
    height: 680,
    path: 'M89.827 9.245A11.5 11.5 0 0 1 101.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 138.87 151H75.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Zm-64 321A11.5 11.5 0 0 1 37.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 472H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128ZM526.795 470a15.999 15.999 0 0 0-15.689 12.862l-32.032 160.159c-4.3 21.502-23.18 36.979-45.107 36.979H115.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C177.096 91.477 195.975 76 217.902 76h318.465c29.028 0 50.8 26.557 45.107 55.021l-33.768 168.841c-1.98 9.901 5.592 19.138 15.689 19.138h17.075l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 644.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 681.87 311H623c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 554.87 470h-28.075Z',
  },
  {
    width: 719,
    height: 680,
    path: 'M632.827 9.245A11.5 11.5 0 0 1 644.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 681.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-95.832 479.159c-4.3 21.502-23.18 36.979-45.107 36.979H178.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C240.096 91.477 258.975 76 280.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm0 479A11.5 11.5 0 0 1 644.104 479h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 681.87 630h-63.366c-7.257 0-12.7-6.639-11.277-13.755l25.6-128ZM37.104 159a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C-1.196 303.361 4.247 310 11.504 310H74.87a11.5 11.5 0 0 0 11.277-9.245l24.76-123.798a.03.03 0 0 1 .052-.012c.015.021.048.012.052-.014C114.016 158.98 120.134 151 143 151h58.87a11.5 11.5 0 0 0 11.277-9.245l25.6-128C240.17 6.64 234.727 0 227.47 0h-63.366a11.5 11.5 0 0 0-11.277 9.245l-24.754 123.771c-.002.011-.016.015-.024.006-.007-.009-.021-.005-.023.007-3.469 18.452-13.551 25.107-24.88 25.981-.848.065-1.699 0-2.549-.009l-.127-.001H37.104Z',
  },
]

function Section({ title, imageSrc, children, shape = 0, className, ...props }) {
  let id = useId()
  let { width, height, path } = shapes[shape]
    return (
      <Container className="group/section [counter-increment:section]">
        <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
          <div className="flex justify-center">
            <FadeIn className="w-135 flex-none lg:w-180">
            <div
      className={clsx(
        className,
        'relative flex aspect-719/680 h-full w-full',
      )}
    >
      <svg viewBox={`0 0 ${width} ${height}`} fill="none" className="h-full">
        <g clipPath={`url(#${id}-clip)`} className="group">
          <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
            <foreignObject width="660px" height={height}>
             <img src={imageSrc} alt="" style={{width:"755px", height:"680px"}}/>
            </foreignObject>
          </g>
          <use
            href={`#${id}-shape`}
            strokeWidth="2"
            className="stroke-neutral-950/10"
          />
        </g>
        <defs>
          <clipPath id={`${id}-clip`}>
            <path
              id={`${id}-shape`}
              d={path}
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
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

function Discover({ shape = 0, className, ...props }) {
 
    return (
      <Section title="환경 (Environment)" imageSrc="/images/environment.jpg" shape={shape}>
        
  

        <div className="space-y-6 text-base text-neutral-600">
          <p>
          EDL은 전 공정에 ISO 14001 환경경영체계를 적용하여, 탄소 배출 저감과 자원순환을 실천합니다. 
          고순도 LiPF₆ 제조 과정에서 유해화학물질 발생을 최소화하며, 친환경 원료와 공정 개선을 
          지속적으로 도입하고 있습니다. 
          </p>
          <p>
          온실가스 저감설비와 폐기물 재활용 시스템을 적극 운영하며, 전력 사용 효율화와 에너지 절감을 통해 탄소중립 목표 달성을 앞당기고 있습니다.
          </p>
          <p>
          또한 글로벌 환경규제 변화에 발맞춰 선제적으로 대응함으로써, 미래 세대를 위한 지속 가능한 생산기반을 다져가고 있습니다.
          </p>
        </div>
  
        
        <TagList className="mt-4">
          <TagListItem>환경경영 실현</TagListItem>
          <TagListItem>환경경영 정착운영 </TagListItem>
          <TagListItem>환경법규 준수 </TagListItem>
          <TagListItem>지속적인 환경개선 실행 </TagListItem>
          <TagListItem>자원 재활용 최대화, 오염물질 배출 최소화
          </TagListItem>
        </TagList>
      </Section>
    )
  }

  function Compliance() {
    return (
      <Section title="준법 (Compliance)" imageSrc="/images/comp.jpg">
        <div className="space-y-6 text-base text-neutral-600">
          <p>
          EDL은 준법을 경영의 기본 가치로 삼아, 모든 사업 활동에서 국내외 법령 및 윤리 기준을 철저히 준수합니다.
          </p>
          <p>
          컴플라이언스 전담조직을 중심으로 자율준수 프로그램을 운영하고, 부패방지·공정거래·정보보안 등 분야별 규정을 정기적으로 교육하고 점검합니다.
          </p>
          <p>
          리스크 관리 매뉴얼을 바탕으로 전사적 모니터링 시스템을 가동하며, 사전 예방 중심의 법규 대응력을 확보해 갑니다.
          투명하고 책임 있는 기업문화를 통해 장기적인 기업가치를 지켜나갑니다.
          </p>
        </div>

      </Section>
    )
  }
  
  function Build() {
    return (
      <Section title="사회 (Social)" imageSrc="/images/social.jpg">
        <div className="space-y-6 text-base text-neutral-600">
          <p>
          EDL은 모든 임직원이 안전하고 건강한 환경에서 일할 수 있도록 ISO 45001 기반의 안전보건 체계를 구축하고 있습니다. 현장 중심의 위험예방 활동을 강화하고, 정기적인 안전교육 및 점검을 통해 무재해 사업장을 지향합니다.
          </p>
          <p>
          또한 공급망 내 협력사와의 ESG 가이드라인 공유를 통해, 함께 성장할 수 있는 산업 생태계를 조성합니다.
          </p>
          <p>
          지역사회와의 연계를 위한 환경캠페인 참여, 친환경 기술 설명회 등 사회적 책임 이행에도 힘쓰며, 열린 소통을 통한 지속 가능한 관계를 형성하고 있습니다.
          </p>
        </div>

        <TagList className="mt-8">
          <TagListItem>사내 재해율 0% 달성 </TagListItem>
          <TagListItem>안전보건 법규준수 </TagListItem>
          <TagListItem>안전보건교육 년 4회 이상 실시 </TagListItem>
        </TagList>
       
      </Section>
    )
  }

  function Deliver() {
    return (
      <Section title="윤리경영 (Ethical Management)" imageSrc="/images/ethic.jpg">
        <div className="space-y-6 text-base text-neutral-600">
          <p>
          EDL은 윤리와 준법을 경영의 핵심 가치로 삼아, 투명한 기업문화와 사회적 책임을 실천합니다. 협력사 및 이해관계자와의 부당한 금품 수수와 편의 제공을 철저히 금지하며, 반사회적 세력과의 연관도 단호히 차단합니다. 제품 개발부터 폐기까지 환경 영향을 최소화하고, 품질과 정보보안을 철저히 관리하여 고객 신뢰를 강화합니다.
          </p>
          <p>
          더불어 아동·강제 노동 금지, 성희롱 방지, 지역사회 참여 등 윤리적 기업 시민으로서의 책임을 이행하며, 모든 구성원이 정직하고 책임 있는 태도로 행동하도록 내부 윤리 기준을 지속적으로 강화하고 있습니다.
          </p>
         
        </div>
        
      
        <List className="mt-8">
          <ListItem title="투명 경영">
          금품 및 편의 제공 금지, 반사회적 세력 차단, 
          접대 기준 준수 등 윤리적 행동규범을 명확히 정의하고 실천합니다.
          </ListItem>
          <ListItem title="상생 협력">
          우월적 지위를 이용한 부당 행위를 금지하고, 협력사와 
          상호 존중 기반의 공정한 거래관계를 유지하며 동반 성장을 추구합니다.
          </ListItem>
          <ListItem title="환경 책임">
          생산 전 과정에서 유해물질을 배제하고, 
          에너지 절감 및 오염 저감을 통해 환경보호를 적극 실천합니다.
          </ListItem>
          <ListItem title="품질 경영">
          고객 만족을 위한 무결점 생산체계 확립과
          품질 개선 프로세스를 통해 글로벌 기준의 완성도 높은 제품을 공급합니다.
          </ListItem>
          <ListItem title="정보 보안">
          고객 및 협력사에 대한 정보에 대해 보안을 철저히 합니다.
          </ListItem>
          <ListItem title="사회적 책임">
          기업 시민으로서 인권 존중, 차별 금지, 지역사회 기여 활동을 통해 
          포용적이고 지속가능한 사회 형성에 앞장섭니다.
          </ListItem>
        </List>
      </Section>
    )
  }
  
// export const metadata = {
//   title: 'project',
//   description:
//     'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
// }

export default function About() {
  let blogArticles = []

  return (
    <RootLayout>
      <PageIntro eyebrow="ESG">
      <h2 className='mt-6 block max-w-5xl text-5xl font-medium tracking-tight text-neutral-900 sm:text-5xl'>지속 가능한 소재 산업의 <br/>
      미래를 위한 책임 있는 실천</h2>

        <p className='mb-[300px] mt-4'>
        EDL은 ESG 경영 원칙을 지키며, 친환경 제조, 사람 중심의 안전경영, 투명한 지배구조를 통해 <br/>지속 가능한 성장을 추구합니다.
        </p>
      </PageIntro>

   
      <div className='mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40'>

        <Discover/>
        <Build/>
        <Compliance/>
        <Deliver/>
      </div>

      <Container className="mt-40">
      <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-6">
      Net-zero Roadmap      </h2>
        <StatList>
        <Border as={FadeIn} className={"flex flex-col pt-8"}>
          <dd className="text-neutral-950 sm:text-xl">
          2022          </dd>
          <dt className="mt-2 text-sm text-neutral-600">
          · Net-zero Roadmap <br/>
          · 공정 효율성 확보
          </dt>
        </Border>
        <Border as={FadeIn} className={"flex flex-col pt-8"}>
          <dd className="text-neutral-950 sm:text-xl">
          2025
          </dd>
          <dt className="mt-2 text-sm text-neutral-600">
          · Distribution 부하 개선 <br/>
          · 이송 방법, 이송거리 개선
          </dt>
        </Border>
        <Border as={FadeIn} className={"flex flex-col pt-8"}>
          <dd className="text-neutral-950 sm:text-xl">
          2030         
           </dd>
          <dt className="mt-2 text-sm text-neutral-600">
          · RE-100, 재생에너지로 전환
          <br/>
          · 협력사 부하개선
        
          </dt>
        </Border>
        <Border as={FadeIn} className={"flex flex-col pt-8"}>
          <dd className="text-neutral-950 sm:text-xl">
          2035
          </dd>
          <dt className="mt-2 text-sm text-neutral-600">
          · Net-zero 확보

         
          </dt>
        </Border>
      

        </StatList>
      </Container>

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"       
      >
       “EDL은 ESG 경영을 통해 리튬염 소재 산업의 <br/>
       새로운 기준을 만들어갑니다.”
      
      </Testimonial>




      <Container className="mt-40">

      </Container>

      <Container className="mt-40">

      </Container>


     

    </RootLayout>
  )
}
