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

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We work closely with our clients to understand their{' '}
          <strong className="font-semibold text-neutral-950">needs</strong> and
          goals, embedding ourselves in their every day operations to understand
          what makes their business tick.
        </p>
        <p>
          Our team of private investigators shadow the company director’s for
          several weeks while our account managers focus on going through their
          trash. Our senior security experts then perform social engineering
          hacks to gain access to their{' '}
          <strong className="font-semibold text-neutral-950">business</strong>{' '}
          accounts — handing that information over to our forensic accounting
          team.
        </p>
        <p>
          Once the full audit is complete, we report back with a comprehensive{' '}
          <strong className="font-semibold text-neutral-950">plan</strong> and,
          more importantly, a budget.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Blood samples</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Forensic audit</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based off of the discovery phase, we develop a comprehensive roadmap
          for each product and start working towards delivery. The roadmap is an
          intricately tangled mess of technical nonsense designed to drag the
          project out as long as possible.
        </p>
        <p>
          Each client is assigned a key account manager to keep lines of
          communication open and obscure the actual progress of the project.
          They act as a buffer between the client’s incessant nagging and the
          development team who are hard at work scouring open source projects
          for code to re-purpose.
        </p>
        <p>
          Our account managers are trained to only reply to client emails after
          9pm, several days after the initial email. This reinforces the general
          aura that we are very busy and dissuades clients from asking for
          changes.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Studio were so regular with their progress updates we almost began to
        think they were automated!
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          About halfway through the Build phase, we push each project out by 6
          weeks due to a change in{' '}
          <strong className="font-semibold text-neutral-950">
            requirements
          </strong>
          . This allows us to increase the budget a final time before launch.
        </p>
        <p>
          Despite largely using pre-built components, most of the{' '}
          <strong className="font-semibold text-neutral-950">progress</strong>{' '}
          on each project takes place in the final 24 hours. The development
          time allocated to each client is actually spent making augmented
          reality demos that go viral on social media.
        </p>
        <p>
          We ensure that the main pages of the site are{' '}
          <strong className="font-semibold text-neutral-950">
            fully functional
          </strong>{' '}
          at launch — the auxiliary pages will, of course, be lorem ipusm shells
          which get updated as part of our exorbitant{' '}
          <strong className="font-semibold text-neutral-950">
            maintenance
          </strong>{' '}
          retainer.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          Our projects always have 100% test coverage, which would be impressive
          if our tests weren’t as porous as a sieve.
        </ListItem>
        <ListItem title="Infrastructure">
          To ensure reliability we only use the best Digital Ocean droplets that
          $4 a month can buy.
        </ListItem>
        <ListItem title="Support">
          Because we hold the API keys for every critical service your business
          uses, you can expect a lifetime of support, and invoices, from us.
        </ListItem>
      </List>
    </Section>
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
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            The first part of any partnership is getting our designer to put
            your logo in our template. The second step is getting them to do the
            colors.
          </GridListItem>
          <GridListItem title="Efficient">
            We pride ourselves on never missing a deadline which is easy because
            most of the work was done years ago.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every business has unique needs and our greatest challenge is
            shoe-horning those needs into something we already built.
          </GridListItem>
          <GridListItem title="Honest">
            We are transparent about all of our processes, banking on the simple
            fact our clients never actually read anything.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients that go beyond
            just delivering a product, allowing us to invoice them for decades.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Technology',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

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
  <h3 className='my-6 block max-w-5xl font-display text-5xl font-bold tracking-tight text-balance text-neutral-950 sm:text-4xl'>기술 개요</h3>
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

<Container className='mt-[100px]'>
<h3 className='my-6 block max-w-5xl font-display text-5xl tracking-tight text-balance text-neutral-950 sm:text-4xl'>제조 공정</h3>
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
  <section className="w-[431px]">
        <div className="">
          <ul className="relative flex flex-col gap-12">
              <li className="flex gap-4 items-center">
                  <h1 className="text-[20px] text-[#C5013D] mt-2">원료투입</h1>
                  <div className="mb-4 mr-4">
                    <div className="size-5 border-[3px] rounded-full border-gray-500 bg-white absolute z-10 flex items-center justify-center">
                      <div className="bg-gray-500 rounded-full size-2"></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <img src="images/arrow.png" alt="" />
                  </div>
                  <div className="flex flex-col gap-8 pt-1 font-medium">
                    <p className="text-sm"><span className="text-[#c5013d]">01 </span>LiPF6 의 무기질
                      원료 투입</p>
                  </div>
              </li>
              <li className="flex gap-4 items-center">
                  <h1 className="text-[20px] text-[#C5013D] w-[69px] text-end mt-2">반응</h1>
                  <div className="mb-4 mr-4">
                    <div className="size-5 border-[3px] rounded-full border-gray-500 bg-white absolute z-10 flex items-center justify-center">
                      <div className="bg-gray-500 rounded-full size-2"></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <img src="images/arrow.png" alt="" />
                  </div>
                  <div className="flex flex-col gap-8 pt-1 font-medium">
                    <p className="text-sm"><span className="text-[#c5013d]">02 </span>반응기 내부에 원료들이 반응 할 수 있는 <br/>
환경을 구성해줘서 원료들이 반응하여 <br/>
LiPF6로 합성</p>
                  </div>
              </li>
              <li className="flex gap-4 items-center">
              <h1 className="text-[20px] text-[#C5013D] w-[69px] text-end mt-2">정제</h1>
                  <div className="mb-4 mr-4">
                    <div className="size-5 border-[3px] rounded-full border-gray-500 bg-white absolute z-10 flex items-center justify-center">
                      <div className="bg-gray-500 rounded-full size-2"></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <img src="images/arrow.png" alt="" />
                  </div>
                  <div className="flex flex-col gap-8 pt-1 font-medium">
                    <p className="text-sm"><span className="text-[#c5013d]">03 </span>초기 반응된 LiPF6 내부에는 미반응 <br/>
                    물질등이 많이 포함되기에 정제를 통해 순수한  <br/>
                    LiPF6만 획득</p>
                  </div>
              </li>
              <li className="flex gap-4 items-center">
              <h1 className="text-[20px] text-[#C5013D] w-[69px] text-end mt-2">결정화</h1>

                  <div className="mb-4 mr-4">
                    <div className="size-5 border-[3px] rounded-full border-gray-500 bg-white absolute z-10 flex items-center justify-center">
                      <div className="bg-gray-500 rounded-full size-2"></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <img src="images/arrow.png" alt="" />
                  </div>
                  <div className="flex flex-col gap-8 pt-1 font-medium">
                    <p className="text-sm"><span className="text-[#c5013d]">04 </span>액체상태의 LiPF6를 저온에서 결정을 <br/>
                    이룰 수 있도록 하여 소금, 설탕과 같이 결정화</p>
                  </div>
              </li>
              
              <li className="flex gap-4 items-center">
              <h1 className="text-[20px] text-[#C5013D] w-[69px] text-end mt-2">제품화</h1>

                  <div className="mb-4 mr-4">
                    <div className="size-5 border-[3px] rounded-full border-gray-500 bg-white absolute z-10 flex items-center justify-center">
                      <div className="bg-gray-500 rounded-full size-2"></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <img src="images/arrow.png" alt="" />
                  </div>
                  <div className="flex flex-col gap-8 pt-1 font-medium">
                    <p className="text-sm"><span className="text-[#c5013d]">05</span> 결정화가 완료된 LiPF6 건조,결정화가 <br/>
                     완료된
                    LiPF6 건조, 캐니스터에 충전하여 <br/>
                    포장 후 제품화 </p>
                  </div>
              </li>
              
              <div className='w-[1px] h-[470px] bg-[#c5013d] absolute top-[10px] left-[94px]'></div>
 
          </ul>

        </div>

      </section>

</div>


</Container>


{/* 
<div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
</div> */}

      <Values />

      <ContactSection />
    </RootLayout>
  )
}
