import { FaRegStar, FaStar } from "react-icons/fa6";

export const starCreator = () => {
  const stars = Math.ceil( Math.random() * 5 );
  return Array.from( { length: 5 }, ( _, index ) => {
    if ( index + 1 <= stars ) {
      return <FaStar key={ `star ${index}` } />;
    } else {
      return <FaRegStar key={ `empty star ${index}` } />;
    }
  } );
};