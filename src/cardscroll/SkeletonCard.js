import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import './cards.css'

const SkeletonCard = () => {
  return (
      <div className="card-skeleton">
        <div className="col">
          <Skeleton width={200} height={200} style={{ marginBottom: ".6rem" }}/>
          <Skeleton count={2} style={{ marginBottom: ".6rem" }} />
          <Skeleton count={5} style={{ marginBottom: ".6rem" }} />
        </div>
      </div>
    );

}

export default SkeletonCard;