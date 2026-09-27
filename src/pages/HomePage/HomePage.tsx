import Banner from "../../components/Banner/Banner"
import BannerSection from "../../components/BannerSection/BannerSection"
import Categories from "../../components/Categories/Categories"
import Products from "../../components/Products/Products"
import Search from "../../components/Search/Search"


const HomePage = () => {
  return (
    <div>

      <BannerSection/>
      <Search/>
      <Categories/>
      <Products />
      <Banner/>

    </div>
  )
}

export default HomePage