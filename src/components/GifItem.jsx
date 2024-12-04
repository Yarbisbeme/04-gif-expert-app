
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useColor } from '../hooks';

export const GifItem = ({ title, url }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { shadowColor } = useColor(url);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>

            <div 
                className="card" 
                onClick={handleImageClick}
            >
                <img src={url} alt={title} />
            </div>

            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div
                        className="modal-content"
                        style={{
                            boxShadow: `0px 10px 50px ${shadowColor}`, 
                        }}
                    >
                        <img src={url} alt={title} />
                        <p>{title}</p>
                    </div>
                </div>
            )}
        </>
    );
};

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}