import React from 'react'
import { View } from "react-native"
import Carousel, {
    Pagination
} from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './carouselCardItem'
import data from '../utils/data'

const CarouselCards = () => {
    const isCarousel = React.useRef(null)

    const [index, setIndex] = React.useState(0)

    return (
        <View>
            <Carousel
                layout="tinder"
                layoutCardOffset={9}
                ref={isCarousel}
                data={data}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                // inactiveSlideShift={1}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
            />

            <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)'
                }
                }
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
            />
        </View>
    )
}


export default CarouselCards