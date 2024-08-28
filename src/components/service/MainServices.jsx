import { serviceData } from "../../../lib"
import ServiceCard from "../ServiceCard"

const MainServices = () => {
  return (
    <div className="max-w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between grid-rows-2 gap-3">
            {
                serviceData.map((data, key)=>(
                        <ServiceCard key={key} name={data.name} icon={data.icon} detail={data.detail}  />
                ))
            }
        </div>
  )
}

export default MainServices