import React from 'react'
import '../FooterSupport/FooterSupport.css'

function FooterSupport() {
    return (
        <div className='support-footer-container'>
            <div className="support-footer-list-container">
                <h2 className='support-footer-header'>Resources</h2>
                <ul>
                    <li>Find A Store</li>
                    <li>Become A Member</li>
                    <li>Send Us Feedback</li>
                </ul>
            </div>
            <div className="support-footer-list-container">
                <h2 className='support-footer-header'>Help</h2>
                <ul>
                    <li>Get Help</li>
                    <li>Order Status</li>
                    <li>Delivery</li>
                    <li>Returns</li>
                    <li>Payment Options</li>
                    <li>Contact Us On Nike.com Inquiries</li>
                    <li>Contact Us On All Other Inquiries</li>
                </ul>
            </div>
            <div className="support-footer-list-container">
                <h2 className='support-footer-header'>Company</h2>
                <ul>
                    <li>About Nike</li>
                    <li>News</li>
                    <li>Careers</li>
                    <li>Investors</li>
                    <li>Sustainability</li>
                </ul>
            </div>
            <div className="support-footer-list-container">
                <h2 className='support-footer-country'>@India</h2>
            </div>
        </div>
    )
}

export default FooterSupport
