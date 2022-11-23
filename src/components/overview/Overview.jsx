import React from 'react'
import "./overview.scss"
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

export default function Overview() {

  const data = [
    {
      data2: 2000,
      data1: 2400
    },
    {
      data2: 4000,
      data1: 1398
    },
    {
      data2: 5000,
      data1: 12800
    },
    {
      data2: 8780,
      data1: 3908
    },
    {
      data2: 9890,
      data1: 4800
    },
    {
      data2: 11390,
      data1: 3800
    },
    {
      data2: 3490,
      data1: 4300
    },
  ]

  return (
    <>
      <div className='overview'>

        <div className='overview__title'>
          <h3> Overview </h3>
          <div className='title__button'>
            <button> Month </button>
            <button> Year </button>
          </div>
        </div>

        <div className='overview__info'>

          <div className='outer'>
            <div className='info__out'>
              <h4> Total Balance </h4>
            </div>
            <div className='info__in'>
              <h4> USD </h4>
              <h3> 17.3M </h3>
            </div>
          </div>

          <div className='outer'>
            <div className='info__out'>
              <h4> Revenue </h4>
            </div>
            <div className='info__in'>
              <h4> USD </h4>
              <h3> 14k </h3>
            </div>
          </div>

        </div>

        <div className='overview__graph'>
        <ResponsiveContainer width="95%" height={50}>
            <AreaChart data={data} margin={{top: 10}}>
              <defs>
                <linearGradient id='colorview' x1="0" y1="0" x2="0" y2="1">
                  <stop offset="30%" stopColor='#ff4d6d' stopOpacity={0.4} />
                  <stop offset="85%" stopColor='#ff4d6d11' stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <Tooltip />
              <Area type="monotone" dataKey="data2" stroke="#ee3b3b" fill='url(#colorview)' />
              <Area type="monotone" dataKey="data1" stroke="#ee3b3b" fill='url(#colorview)' />
            </AreaChart>
        </ResponsiveContainer>
        </div>

        <div className='overview__insights'>

          <div className='insight'>
            <h4> Invoices </h4>
            <div>
              <h3> 34 </h3>
              <h4> Unpaid </h4>
            </div>
          </div>

          <div className='insight'>
            <h4> Transactions </h4>
            <div>
              <h3> 737 </h3>
              <h4> Completed </h4>
            </div>
          </div>

        </div>

        <div className='overview__expand'>
          <button> Expand Chart </button>
        </div>
      </div>
    </>
  )
}
