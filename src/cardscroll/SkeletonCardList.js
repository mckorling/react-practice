import SkeletonCard from "./SkeletonCard";
import './cards.css'

const SkeltonCardList = () => {
  const skelCards = [];
  for (let i = 0; i < 20; i++) {
    skelCards.push(<SkeletonCard key={i} />)
  };

  return (
    <div>
      {skelCards}
    </div>
  )
  
}

export default SkeltonCardList;