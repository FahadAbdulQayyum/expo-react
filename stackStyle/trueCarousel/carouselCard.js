function Carousel() {
    return (
        <FlatList
            data={slideList}
            style={{ flex: 1 }}
            renderItem={({ item }) => {
                return <Slide data={item} />;
            }}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    );
}