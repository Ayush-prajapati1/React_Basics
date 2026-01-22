import React from 'react'
import Section1 from './component/section1/section1'
import Section2 from './component/section2/section2' 

const users=[
  {
    img:'https://imgs.search.brave.com/-slxAkK2ip4W2JthGYOci0hcDtgs4WozM-I2NGcDrjQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE5/MjI2MTEyNy9waG90/by9idXNpbmVzcy13/b21hbi11c2luZy1s/YXB0b3AuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVRpajV5/dEE5NS1Pc21zMmhI/aU5tbU1XUTlzb3JQ/RkRMWU5vZ0JucFB4/eVk9',
    intro:'',
    tag:'Satisfied'
  },
  {
    img:'https://imgs.search.brave.com/XO6SbJqS1nqNeX2d1xDmauwdbljCpgjxBy-VHLqjQoc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA1/OTY2MTQyNC9waG90/by9tYXR1cmUtbWl4/ZWQtcmFjZS1idXNp/bmVzcy1tYW4uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVVB/VkJleW9EX0xrQ2gx/TXpWYVdXMVNSMWl3/Sy1Wa1BEWFdNSDJv/MndMOE09',
    intro:'',
    tag:'Undeserved'
  },
  {
    img:'https://imgs.search.brave.com/sBS0gnbaZBN9sjOe9wBTy3wO_9b33dmFdE7eJe7Fpik/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjIw/NzE2MjA5Ni9waG90/by9mb2N1c2VkLXBy/b2Zlc3Npb25hbC13/b21hbi13b3JraW5n/LW9uLWxhcHRvcC1h/dC1kZXNrLWluLW1v/ZGVybi13b3Jrc3Bh/Y2Uud2VicD9hPTEm/Yj0xJnM9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVczYUQzZ2daR3Fm/QjRVM1F2VXl1WEtR/TjZiN0NnTS1pb2V2/dGNqek9ZVG89',
    intro:'',
    tag:'Underbanked'
  },
  {
    img:'https://imgs.search.brave.com/Lsh7Lu1Avl_w7dfVCHVhXXRZitWlDN119s2gRL5ZsRI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI3/NzUzMzE4MC9waG90/by95b3VuZy1pbmRp/YW4tYnVzaW5lc3N3/b21hbi11c2luZy1k/aWdpdGFsLXRhYmxl/dC1pbi1vZmZpY2Uu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXFXdXhhbmlZRm85/UnFsbjdOWGE2QzNv/ZUFnZm5SaG1YbGR5/QWdaOWpxaG89',
    intro:'',
    tag:'Understimate'
  }
]

const App = () => {
  return (
    <div >
  <Section1 users={users}/>
  <Section2/>
    </div>
  )
}

export default App