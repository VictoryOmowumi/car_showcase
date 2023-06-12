"use client"
import { useEffect, useState } from 'react'
import { CustomFilters, Hero, SearchBar, CarCard, ShowMore } from '@/components'
import { fetchCars } from '@/utils'
import Image from 'next/image'
import { HomeProps } from '@/types'
import { fuels, yearsOfProduction } from '@/constants'
export default  function Home({ searchParams }: HomeProps) {
const [allCars, setAllCars] = useState([])
const [loading, setLoading] = useState(false)

const [manufacturer, setManufacturer] = useState("")

const [model, setModel] = useState("")

const [year, setYear] = useState(2022)

const [fuel, setFuel] = useState("")
const [limit, setLimit] = useState(10)


const getCars = async () => {
  setLoading(true)
  try {
    const cars = await fetchCars({ manufacturer, model, year, fuel, limit })
    setAllCars(cars)
    setLoading(false)
  } catch (error) {
  } finally {
    setLoading(false)
  }
}

useEffect(() => {
  getCars()
}, [manufacturer, model, year, fuel, limit])



  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
     <Hero />
     <div className="mt-12 padding-x padding-y max-width" id='discover'>
            <div className="home__text-container">
              <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
              <p className="text-gray-500 mt-4">
                Explore our wide range of cars from different brands and models.
                </p>
            </div>
            <div className="home__filters">
                <SearchBar 
                  setManufacturer={setManufacturer}
                  setModel={setModel}
                />
                  <div className="home__filter-container">
                  <CustomFilters options={fuels} setFilter={setFuel} />
                    <CustomFilters options={yearsOfProduction} setFilter={setYear} />
                  </div>
                  <div className="clear__filters">
                    <button onClick={() => {
                      setManufacturer("")
                      setModel("")
                      setFuel("")
                      setYear(2022)
                    }} className="text-gray-500">Clear Filters</button>

                  </div>
              </div>
        
          {
           allCars.length > 0 ? (
              <section>
                <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/loader.svg"
                  alt="loading"
                  width={50}
                  height={50}
                  className="object-contain"  
                  />
              </div>
            )
                }
            <ShowMore
              pageNumber={limit  / 10}
              isNext={limit  > allCars.length}
              setLimit={setLimit}
            />
              </section>
            ) : (
              <section className="flex flex-col items-center justify-center">
               
                <h1 className="text-2xl font-bold mt-4">Oops, No cars found</h1>
              </section>
            )

          }
    
    </div>
    </main>
  )
}
