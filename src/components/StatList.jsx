import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

export function StatList({ children, ...props }) {
  return (
    <FadeInStagger {...props}>
      <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col">
        {children}
      </dl>
    </FadeInStagger>

  )
}

// export function StatListItem({ label, value }) {
//   return (
//     <Border as={FadeIn} position="left" className="flex flex-col-reverse pl-8">
//       <dt className="mt-2 text-sm text-neutral-600">{label}</dt>
//       <dd className="text-neutral-950 sm:text-xl">
//         {value}
//       </dd>
//     </Border>
//   )
// }

export function StatListItem({ label, value }) {
  return (
    <Border as={FadeIn} position="left" className="flex flex-col-reverse pl-8">
      <dt className="mt-2 text-sm text-neutral-600">
      2012년 : DFD社, Shida社와
      LiPF6 거래 개시, 합성기술 공동개발
      ......................................................................
      2013년 : LiFSi 시양산 개시.
      Gen 2 승인 등
      합성기술내재화
      ......................................................................
      2013년 ~ 2020년 : 다양한 합성 점가재 개발 (ESA / HS02 / KY01 /
      SPDBF4 /
      TMEABF4 / SC04)
      </dt>
      <dd className="text-neutral-950 sm:text-xl">
        {value}
      </dd>
    </Border>
  )
}
