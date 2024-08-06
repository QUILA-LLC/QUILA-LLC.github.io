import React, { useEffect } from 'react';
import qrCode from '../assets/images/QR.png';
import whatsappIcon from '../assets/images/icon1.svg'; // Import the colorful icon
import '../assets/styles/CustomStyles.css';

const QRSection = () => {
  useEffect(() => {
    const notificationBadge = document.querySelector('.notification-badge-anim');
    const messageText = document.querySelector('.message-text-anim');

    const showNotification = setTimeout(() => {
      notificationBadge.classList.add('show');
    }, 500);

    const hideNotification = setTimeout(() => {
      notificationBadge.classList.remove('show');
    }, 2000);

    const showMessage = setTimeout(() => {
      messageText.classList.add('show');
    }, 2500);

    return () => {
      clearTimeout(showNotification);
      clearTimeout(hideNotification);
      clearTimeout(showMessage);
    };
  }, []);

  return (
    <div className="qr-section">
      <div className="learning-message">
        <div className="whatsapp-icon whatsapp-icon-anim">
          <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-color-icon" />
          <div className="notification-badge notification-badge-anim">1</div>
        </div>
        <div className="message-text message-text-anim">Let's start learning</div>
      </div>
      <img src={qrCode} alt="QR Code" className="qr-code" />
      <div className="connect-message-wrapper">
        <span className="message-part1">Just a message away!</span>
        <span className="message-part2">
          Connect with us today.
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-color-icon" />
          </a>
        </span>
      </div>
    </div>
  );
};

export default QRSection;