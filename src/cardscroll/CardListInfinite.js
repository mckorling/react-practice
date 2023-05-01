import Card from "./Card";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonCard from "./SkeletonCard";
import SkeltonCardList from "./SkeletonCardList";


const CardListInfinite = () => {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    console.log('fetching again')
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await response.json();

    const dogImages = [];
    for (let i = 0; i < 20; i++) {
      const dogResponse = await fetch("https://dog.ceo/api/breeds/image/random");
      const dogData = await dogResponse.json();
      dogImages.push(dogData.message);
    }
    const newCards = jsonData.slice(0,20).map((card, index) => (
        <Card
        imgSrc={dogImages[index]}
        imgAlt="Randomly generated"
        description={card.body}
        title={card.title}
        link="cardPage"
        buttonText="Learn More"
        key={index + cards.length} // get error because ids will be duplicates with other calls
        // in real life, there would be unique ids and this error wouldn't happen
        />
    ))

    setCards(cards.concat(newCards));
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <h1>View Cards</h1>
      <InfiniteScroll
        dataLength={cards.length}
        next={fetchData}
        hasMore={true}
        loader={<SkeltonCardList/>}
      >
        <section className="card-list">{cards}</section>
      </InfiniteScroll>
      
      
    </div>
  )
}

export default CardListInfinite;