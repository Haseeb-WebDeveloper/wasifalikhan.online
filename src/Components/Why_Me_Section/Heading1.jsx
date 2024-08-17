import PropTypes from 'prop-types';

function Heading1({Name}) {
    return (
        <h1 className="text-white font-suit md:text-[80px]  text-[30px] leading-[1.3] tracking-tighter">
            <span className="text-lightGreen">So</span>, why work <br />
            <span className="pl-16">with {Name}?</span>
        </h1>
    )
}

Heading1.propTypes = {
    Name: PropTypes.string.isRequired,
};

export default Heading1