import React from "react";
import "./Disclosures.css";

export default function Disclosures() {
    return ( 
        <div className="disclosures--container">
            <div className="disclosures--content__container">
                <div className="disclosures--content">
                    <div className="disclosures--title__container">
                        <p className="disclosures--title">Disclosures:</p>
                        <img src={require('./Components/img/logo.png')} alt="" className="disclosures--img" />        
                    </div>
                    <div className="disclosures--text__container">
                        <ol className="disclosures--list">
                            <li><strong>Accuracy of Information:</strong> The information provided on this website is for general informational purposes only and should not be considered as financial advice. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information provided. Users are advised to verify the information with other reliable sources and consult a qualified financial professional before making any investment decisions.</li>
                            <br/>
                            <li><strong>Risk of Investment:</strong> Investing in stocks and other financial instruments involves inherent risks. The value of investments may fluctuate, and past performance is not indicative of future results. Users are solely responsible for their investment decisions and should carefully consider their financial situation, risk tolerance, and investment objectives before making any transactions.</li>
                            <br/>
                            <li><strong>Third-Party Content:</strong> This website may contain links to third-party websites, articles, or other resources for additional information or convenience. We do not endorse or control the content, products, or services provided by these third-party sources. Users should review the terms of use and privacy policies of any third-party websites before engaging with them.</li>
                            <br/>
                            <li><strong>Advertisements:</strong> This website may display advertisements from third-party advertisers. These advertisements are provided for informational purposes and should not be considered as endorsements or recommendations. We do not guarantee the accuracy or reliability of the products or services advertised. Users should conduct their own research and exercise due diligence before engaging with any advertisers.</li>
                            <br/>
                            <li><strong>Financial Disclosure:</strong> The operators of this website may have financial interests or positions in the stocks or companies mentioned on the website. These interests may influence the information and content provided. However, we strive to maintain objectivity and provide unbiased information to the best of our abilities.</li>
                            <br/>
                            <li><strong>Technical Limitations:</strong> While we make efforts to ensure the smooth operation of this website, we do not guarantee uninterrupted access or error-free functionality. We shall not be held liable for any technical issues, including but not limited to server downtime, data loss, or any other technical problems that may occur.</li>
                            <br/>
                            <li><strong>User Conduct:</strong> Users of this website are expected to adhere to the terms of service and conduct themselves in a responsible manner. Any misuse, unauthorized access, or violation of applicable laws and regulations will not be tolerated.</li>
                            <br/>
                            <li><strong>Legal Disclaimer:</strong> This disclosures section does not override or limit any other disclaimers, terms, or policies stated elsewhere on this website. The use of this website constitutes acceptance of these disclosures and all other applicable terms and policies.</li>
                        </ol>
                    </div>
                </div>
                <div className="disclosures--img__container">
                </div>
            </div>
        </div>
     );
}
