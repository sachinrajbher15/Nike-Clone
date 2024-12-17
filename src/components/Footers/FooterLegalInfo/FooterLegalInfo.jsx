import React from 'react'
import '../FooterLegalInfo/FooterLegalInfo.css'
function FooterLegalInfo() {
    const currYear = new Date().getFullYear();
    return (
        <div className='legal-info-footer-container'>
            <ul>
                <li>@ {currYear} Nike, Inc. All rights reserved</li>
                <li>Guides</li>
                <li>Terms of Sale</li>
                <li>Terms of Use</li>
                <li>Nike Privacy Policy</li>
            </ul>
        </div>
    )
}

export default FooterLegalInfo
