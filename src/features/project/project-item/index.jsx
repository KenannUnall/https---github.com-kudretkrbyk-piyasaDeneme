import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

ProjectItem.propTypes = {
    item: PropTypes.object,
};

function ProjectItem(props) {
    const { item } = props;

    return (
        <div className="group relative overflow-hidden rounded-lg">
            <img src={item.img} alt="crybox" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <Link
                    to="/nft-item"
                    className="w-full p-4 text-white font-bold font-chakra text-lg hover:text-[#14C2A3] transition-colors"
                >
                    {item.title}
                </Link>
            </div>
        </div>
    );
}

export default ProjectItem;