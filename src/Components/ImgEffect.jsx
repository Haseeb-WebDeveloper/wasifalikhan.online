import PropTypes from 'prop-types';

function ImgEffect({ image }) {
 

  return (
    <figure>
      <img
        className="shery-img h-[30rem] object-top object-cover w-[100%] rounded-lg"
        src="/wasif_Ali_Khan.png"
        alt={image}
      />
    </figure>
  );
}

ImgEffect.propTypes = {
  image: PropTypes.string,
};

export default ImgEffect;
