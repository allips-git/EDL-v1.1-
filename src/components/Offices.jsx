import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="천안공장" invert={invert}>
        충남 천안시 동남구 풍세면
        풍세산단5로 17 <br/>
         (용정리 984)
          <br />
        </Office>
      </li>
      <li>
        <Office name="제천 본사" invert={invert}>
        충북 제천시 바이오밸리로 107
        </Office>
      </li>
    </ul>
  )
}
