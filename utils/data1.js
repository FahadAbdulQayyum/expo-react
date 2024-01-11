const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const slideList = Array.from({ length: 30 }).map((_, i) => {
    return {
        id: i,
        image: `https://picsum.photos/1440/2842?random=${i}`,
        title: `This is the title! ${i + 1}`,
        subtitle: `This is the subtitle ${i + 1}!`,
    };
});