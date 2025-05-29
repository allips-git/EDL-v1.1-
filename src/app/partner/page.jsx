import Jojang from "@/images/jojang.png"
import Hung from "@/images/hung.png"
import Pol from "@/images/pol.png"
import Edl from "@/images/edl.jpeg"
import Jangga from "@/images/jangga.png"
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
import Image from 'next/image'
import Korea from "@/images/korea.png"
import Cheon from "@/images/cheon.png"
import Pan from "@/images/pan.png"
import America from "@/images/america.png"
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
      <PageIntro eyebrow="About parent company" title="Enchem">
        <p className='mb-[300px]'>
        EDL은 (주)엔켐의 자회사로서 글로벌 전해질 소재 산업의 미래를 함께 설계합니다.
        모회사와의 유기적인 기술 협력과 공급망 연계를 기반으로 전해질 핵심 원료인 LiPF₆의 독자 기술 개발과 양산을 수행하고 있습니다. 엔켐이 보유한 글로벌 생산 인프라와 고객 네트워크는 EDL의 기술 상용화와 시장 확장을 위한 든든한 토대가 되고 있으며, 양사는 전지 소재 산업의 지속 가능한 미래를 위해 전략적으로 협력하고 있습니다.
        </p>
      </PageIntro>


      <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <PageIntro eyebrow="Our partner">
      <h2 className='block text-4xl font-medium sm:text-4xl text-neutral-900 mb-6'>
      EDL은 (주)엔켐의 자회사로서 <br/>
      글로벌 전해질 소재 산업의 미래를 함께 설계합니다.
        </h2>
        <p className='mb-[200px]'>
        EDL의 모회사 엔켐은 미국, 캐나다, 폴란드, 헝가리, 인도네시아, 중국 등 세계 주요 거점에 사업장을 운영하고 있으며, 국내 생산기술을 중심으로 글로벌 공급망을 확장해 나가고 있습니다.
        </p>
      </PageIntro>

      <Container className='mb-40'>
       <img src="/images/partnermap.png" alt="파트너십지도" />
      </Container>


    <Container className="mt-100">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
        글로벌 사업장 현황     
           </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-28">
 
          <FadeIn>
            <article>
              <Border className="grid grid-cols-2 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={Korea}
                      alt="한국천안공장"
                    //   className="h-12 w-12 flex-none"
                      unoptimized
                      className="w-[501px] h-60"
                    />
                 
                  </div>
                 
                </div>
                <div className="col-span-full lg:col-span-1 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                  한국 - 제천공장
                  </p>
                  <div className="mt-6 space-y-4 text-base text-neutral-600">
                    <div className='w-full sm:flex justify-between'>
                        <p>주소</p>
                        <p>27159)
                        충북 제천시 바이오밸리로 107(왕암동 944)</p>
                    </div>
                    <div className='w-full sm:flex justify-between'>
                        <p>전화</p>
                        <p>043) 653-0910</p>
                    </div>
                    <div className='w-full sm:flex justify-between'>
                        <p>팩스</p>
                        <p>043) 653-0914</p>
                    </div>
                  </div>
                </div>
                 
              </Border>
              
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="grid grid-cols-2 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={Cheon}
                      alt="한국천안공장"
                    //   className="h-12 w-12 flex-none"
                      unoptimized
                    />
                 
                  </div>
                 
                </div>
                <div className="col-span-full lg:col-span-1 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                  한국 - 천안공장
                  </p>
                  <div className="mt-6 space-y-4 text-base text-neutral-600">
                    <div className='w-full sm:flex justify-between'>
                        <p>주소</p>
                        <p>31214)
                        충청남도 천안시 동남구 풍세면 풍세산단5로 17 (용정리 984)</p>
                    </div>
                    <div className='w-full sm:flex justify-between'>
                        <p>전화</p>
                        <p>041) 568-9080</p>
                    </div>
                    <div className='w-full sm:flex justify-between'>
                        <p>팩스</p>
                        <p>041) 568-9089</p>
                    </div>
                  </div>
                </div>
                 
              </Border>
              
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="grid grid-cols-2 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={Pan}
                      alt="한국판교사무실"
                    //   className="h-12 w-12 flex-none"
                      unoptimized
                    />
                 
                  </div>
                 
                </div>
                <div className="col-span-full lg:col-span-1 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                  한국 - 판교 사무실
                  </p>
                  <div className="mt-6 space-y-4 text-base text-neutral-600">
                    <div className='w-full sm:flex justify-between'>
                        <p>주소</p>
                        <p className="w-[500px]">13488)
                        경기도 성남시 분당구 대왕판교로712번길 22 (삼평동 696-1번지), 글로벌 R&D센터 B동 3층</p>
                    </div>
                    <div className='w-full sm:flex justify-between'>
                        <p>전화</p>
                        <p>041)568-9080</p>
                    </div>
                    <div className='w-full sm:flex justify-between'>
                        <p>팩스</p>
                        <p>031)522-0510</p>
                    </div>
                  </div>
                </div>
                 
              </Border>
              
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="grid grid-cols-2 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={Edl}
                      alt="edl사무실"
                      unoptimized
                      className="h-70"
                    />
                 
                  </div>
                 
                </div>
                <div className="col-span-full lg:col-span-1 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                  주식회사 이디엘
                  </p>
                  <div className="mt-6 space-y-4 text-base text-neutral-600">
                    <div className='w-full sm:flex justify-between'>
                        <p>주소</p>
                        <p>전라북도 군산시 새만금산단3로 302</p>
                    </div>
                    <div className='w-full sm:flex justify-between'>
                        <p>전화</p>
                        {/* <p>041) 568-9080</p> */}
                    </div>
                    <div className='w-full sm:flex justify-between'>
                        <p>팩스</p>
                        {/* <p>041) 568-9089</p> */}
                    </div>
                  </div>
                </div>
                 
              </Border>
              
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="grid grid-cols-2 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={America}
                      alt="한국판교사무실"
                      unoptimized
                    />
                 
                  </div>
                 
                </div>
                <div className="col-span-full lg:col-span-1 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                  북미 - 미국법인
                  </p>
                  <div className="mt-6 space-y-4 text-base text-neutral-600">
                    <div className='w-full sm:flex justify-between'>
                        <p>주소</p>
                        <p>648 Highway 334, Commerce, GA 30530</p>
                    </div>
                    <div className='w-full sm:flex justify-between'>
                        <p>전화</p>
                        {/* <p>041) 568-9080</p> */}
                    </div>
                    <div className='w-full sm:flex justify-between'>
                        <p>팩스</p>
                        {/* <p>041) 568-9089</p> */}
                    </div>
                  </div>
                </div>
                 
              </Border>
              
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="grid grid-cols-2 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    {/* <Image
                      src={America}
                      alt="한국판교사무실"
                      unoptimized
                    /> */}
                 
                  </div>
                 
                </div>
                <div className="col-span-full lg:col-span-1 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                  북미 - 캐나다법인
                  </p>
                  <div className="mt-6 space-y-4 text-base text-neutral-600">
                    <div className='w-full sm:flex justify-between'>
                        <p>주소</p>
                        <p>340 E Big Beaver Rd, Troy, MI 48083</p>
                    </div>
                    <div className='w-full sm:flex justify-between'>
                        <p>전화</p>
                        {/* <p>041) 568-9080</p> */}
                    </div>
                    <div className='w-full sm:flex justify-between'>
                        <p>팩스</p>
                        {/* <p>041) 568-9089</p> */}
                    </div>
                  </div>
                </div>
                 
              </Border>
              
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="grid grid-cols-2 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={Pol}
                      alt="한국판교사무실"
                      unoptimized
                    />
                 
                  </div>
                 
                </div>
                <div className="col-span-full lg:col-span-1 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                  유럽 - 폴란드법인
                  </p>
                  <div className="mt-6 space-y-4 text-base text-neutral-600">
                    <div className='w-full sm:flex justify-between'>
                        <p>주소</p>
                        <p>Poland Wroclaw 55-040</p>
                    </div>
                    <div className='w-full sm:flex justify-between'>
                        <p>전화</p>
                        {/* <p>041) 568-9080</p> */}
                    </div>
                    <div className='w-full sm:flex justify-between'>
                        <p>팩스</p>
                        {/* <p>041) 568-9089</p> */}
                    </div>
                  </div>
                </div>
                 
              </Border>
              
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="grid grid-cols-2 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={Hung}
                      alt="한국판교사무실"
                      unoptimized
                    />
                 
                  </div>
                 
                </div>
                <div className="col-span-full lg:col-span-1 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                  유럽 - 헝가리법인
                  </p>
                  <div className="mt-6 space-y-4 text-base text-neutral-600">
                    <div className='w-full sm:flex justify-between'>
                        <p>주소</p>
                        <p>Hungary, Komárom, Irinyi János utca 3, 2903</p>
                    </div>
                    <div className='w-full sm:flex justify-between'>
                        <p>전화</p>
                        {/* <p>041) 568-9080</p> */}
                    </div>
                    <div className='w-full sm:flex justify-between'>
                        <p>팩스</p>
                        {/* <p>041) 568-9089</p> */}
                    </div>
                  </div>
                </div>
                 
              </Border>
              
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="grid grid-cols-2 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    {/* <Image
                      src={Hung}
                      alt="한국판교사무실"
                      unoptimized
                    /> */}
                 
                  </div>
                 
                </div>
                <div className="col-span-full lg:col-span-1 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                  유럽 - 인도네시아법인
                  </p>
                  <div className="mt-6 space-y-4 text-base text-neutral-600">
                    <div className='w-full sm:flex justify-between'>
                        <p>주소</p>
                        <p className="w-[500px]">Jl.Gunung Mandala, Ruko Paragon, Blok A No.88-B, Cibatu, Cikarang Selatan, Kab.Bekasi, Jawa Barat, Indonesia.</p>
                    </div>
                    <div className='w-full sm:flex justify-between'>
                        <p>전화</p>
                        {/* <p>041) 568-9080</p> */}
                    </div>
                    <div className='w-full sm:flex justify-between'>
                        <p>팩스</p>
                        {/* <p>041) 568-9089</p> */}
                    </div>
                  </div>
                </div>
                 
              </Border>
              
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="grid grid-cols-2 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={Jangga}
                      alt="한국판교사무실"
                      unoptimized
                    />
                 
                  </div>
                 
                </div>
                <div className="col-span-full lg:col-span-1 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                  중국 - 장가항
                  </p>
                  <div className="mt-6 space-y-4 text-base text-neutral-600">
                    <div className='w-full sm:flex justify-between'>
                        <p className="w-[28px]">주소</p>
                        <p className="w-[500px]">No. 7, Bohai Road, Yangzijiang International Chemical Industrial Park, Jiangsu</p>
                    </div>
                    <div className='w-full sm:flex justify-between'>
                        <p>전화</p>
                        {/* <p>041) 568-9080</p> */}
                    </div>
                    <div className='w-full sm:flex justify-between'>
                        <p>팩스</p>
                        {/* <p>041) 568-9089</p> */}
                    </div>
                  </div>
                </div>
                 
              </Border>
              
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="grid grid-cols-2 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={Jojang}
                      alt="한국판교사무실"
                      unoptimized
                    />
                 
                  </div>
                 
                </div>
                <div className="col-span-full lg:col-span-1 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                  중국 - 조장
                  </p>
                  <div className="mt-6 space-y-4 text-base text-neutral-600">
                    <div className='w-full sm:flex justify-between'>
                        <p className="w-[28px]">주소</p>
                        <p className="w-[500px]">No. 999, Fuyuan 6th Road, Zaozhuang City, Shandong Province</p>
                    </div>
                    <div className='w-full sm:flex justify-between'>
                        <p>전화</p>
                        {/* <p>041) 568-9080</p> */}
                    </div>
                    <div className='w-full sm:flex justify-between'>
                        <p>팩스</p>
                        {/* <p>041) 568-9089</p> */}
                    </div>
                  </div>
                </div>
                 
              </Border>
              
            </article>
          </FadeIn>





      </div>
    </Container>

    </div>
    </RootLayout>
  )
}
