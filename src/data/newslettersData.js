// src/data/newslettersData.js

export const newsletterData = {
    "american-relief-act": {
      title: "American Relief Act, 2025",
      html: `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <title>RepReport Newsletter</title>
          <style>
              body {
          margin: 0; 
          padding: 0;
          font-family: 'Times New Roman', serif; /* Ensures proper Times New Roman usage */
          background-color: #ffffff;
          line-height: 1.8; /* Increased line spacing */
        }
        .body-section {
          font-family: 'Times New Roman', serif; /* Ensures consistent font in sections */
          line-height: 1.8; /* Consistent line spacing for sections */
        }
        .spaced {
                  margin-bottom: 20px;
        }
        p, li {
          font-size: 17px;
          line-height: 1.8; /* Adds line spacing for paragraph and list items */
        }
            .wrapper {
              width: 100%;
              table-layout: fixed;
              background-color: #ffffff;
              padding: 20px 0;
            }
            .main-content {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
            }
            h1, h2{
              margin: 0; 
              padding: 0;
              font-size: 22px;
            }
            p{
              margin: 0; 
              padding: 0;
              font-size: 20px;
            }
      
             p {
                  margin: 0;
                  color: #000; /* Ensure text is black */
                  text-decoration: none; /* Prevent links from being inferred */
              }
            h3{
              margin: 0; 
              padding: 0;
              font-size: 20px;
            }
            a {
              color: #007bff;
              text-decoration: none;
            }
            .header {
              background-color: black;
              padding: 20px;
              text-align: center;
              font-size: 24px;
              font-weight: bold;
              font-family: 'Times New Roman', serif;
              color: white;
              border-radius: 25px;
            }
            .body-section {
              padding: 20px 30px;
            }
            .hero-image img {
              display: block;
              width: 100%;
              height: auto;
            }
            .bill-summary {
              margin: 10px 0;
            }
            .bill-summary li {
              margin: 0 0 10px 0;
            }
            .footer {
              text-align: center;
              font-size: 14px;
              color: #666666;
              padding: 10px;
            }
            .party-label {
              margin: 15px 0 0 0;
              font-size: 16px;
            }
            @media only screen and (max-width: 600px) {
              /* Let the main-content width shrink on mobile */
              .main-content {
                width: 90% !important;
                max-width: 90% !important;
                margin: 0 auto !important;
              }
            
              /* Remove the forced left margin on the bullet table */
              table[style*="margin-left: 20px"] {
                margin-left: 0 !important;
              }
            }
          </style>
        </head>
        <body>
          <table class="wrapper" width="100%" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center">
                <table class="main-content" width="600" cellspacing="0" cellpadding="0">
                  <!-- HEADER -->
                  <tr>
                    <td class="header" >
                      Your Rep. Has Voted! (RepReport)
                    </td>
                  </tr>
                      <tr>
            <td class="body-section">
              <p class="spaced">Good Evening,</p>
              <p>Your Congressional Rep. has just voted on the following bills: </p>
              <table style="width: 100%; border-spacing: 0; margin-left: 20px;"><tr><td style="padding: 5px 0; color: #000; font-size: 20px;">• <i>American Relief Act, 2025</i></td></tr><tr><td style="padding: 5px 0; color: #000; font-size: 20px;">• <i>Continuing Appropriations and Extensions Act, 2025</i></td></tr></table>
      
              <div class="hero-image" style="margin-top: 20px;">
                <!-- Replace with your own hosted image URL or Base64 data -->
                <img src="cid:capitol_cid" alt="Embedded Image" />
              </div>
                  <hr style="border: 0; border-top: 3px solid #ccc; margin: 40px 0;" />
            </td>
          </tr>
      
      
      
          <!-- Single Bill Section -->
          <tr>
            <td class="body-section">
              <h3 style="text-decoration: underline; font-weight: bold;">American Relief Act, 2025 Summary:</h3>
              <ul class="bill-summary">
                <li>The bill provides stopgap appropriations so federal agencies and programs remain funded and operational until March 14, 2025. This includes extra amounts for national security priorities—like shipbuilding, cybersecurity, and emergency preparedness—and ensures uninterrupted government services.</li>
                <li>Substantial supplemental funding is designated to address natural disasters (such as hurricanes, wildfires, and floods) and support rebuilding efforts. This aid spans multiple agencies (e.g., USDA, FEMA, Corps of Engineers, NOAA) to assist affected communities, bolster agricultural programs, repair federal facilities, and strengthen critical infrastructure.</li>
                <li>The bill prolongs certain Medicare and telehealth flexibilities, extends funding for community health centers, expands diabetes prevention programs, and continues sexual risk avoidance education. It also renews important agricultural and nutrition programs—such as commodity, dairy, and conservation programs—thereby providing ongoing support to farmers and rural communities through 2025.</li>
              </ul>
      
              <p style="margin-top: 20px; font-weight: bold;"">
                Your Rep., <strong>*|MMERGE9|*</strong>, 
                voted: <span>*|REPVOTE1|*</span>.
              </p>
            </td>
          </tr>
           <!-- New Graphic Section -->
      
                 <tr>
            <td class="body-section">
              <div style="text-align: center; margin: 20px;">
                <h3 style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">Partisan Breakdown</h3>
                <ul style="list-style: none; padding: 0;">
                  <li style="margin-bottom: 5px;">
                    <span style="font-size: 20px; margin-right: 10px;">🐘</span>Republicans: 83% Yea, 17% Nay
                  </li>
                  <li>
                    <span style="font-size: 20px; margin-right: 10px;">🐴</span>Democrats: 23% Yea, 77% Nay
                  </li>
                </ul>
              </div>
                  <hr style="border: 0; border-top: 3px solid #ccc; margin: 40px 0;" />
            </td>
          </tr>
      
          
      
          <!-- Single Bill Section -->
          <tr>
            <td class="body-section">
              <h3 style="text-decoration: underline; font-weight: bold;">Continuing Appropriations and Extensions Act, 2025 Summary:</h3>
              <ul class="bill-summary">
                <li>This bill continues funding for federal agencies through December 20, 2024 (or until full-year appropriations are enacted), ensuring government operations do not lapse.</li>
                <li>It renews or extends a number of expiring authorities and programs, including veteran care initiatives, health programs, and certain Department of Homeland Security responsibilities.</li>
                <li>It allocates additional resources for specific needs, such as Secret Service protective operations, nutrition assistance (WIC and Commodity Assistance), disaster relief, and other targeted priorities.</li>
              </ul>
      
              <p style="margin-top: 20px; font-weight: bold;"">
                Your Rep., <strong>*|MMERGE9|*</strong>, 
                voted: <span>*|REPVOTE2|*</span>.
              </p>
            </td>
          </tr>
           <!-- New Graphic Section -->
      
                 <tr>
            <td class="body-section">
              <div style="text-align: center; margin: 20px;">
                <h3 style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">Partisan Breakdown</h3>
                <ul style="list-style: none; padding: 0;">
                  <li style="margin-bottom: 5px;">
                    <span style="font-size: 20px; margin-right: 10px;">🐘</span>Republicans: 83% Yea, 17% Nay
                  </li>
                  <li>
                    <span style="font-size: 20px; margin-right: 10px;">🐴</span>Democrats: 23% Yea, 77% Nay
                  </li>
                </ul>
              </div>
                  <hr style="border: 0; border-top: 3px solid #ccc; margin: 40px 0;" />
            </td>
          </tr>
      
                      <!-- FOOTER / SIGNUP SECTION -->
                  <tr>
                    <td class="body-section" style="text-align: center;">
                      <p style="text-align: center; margin-top: 20px; font-size: 14px; color: black;">
        Forwarded this? <a href="https://repreport.vercel.app/" style="text-decoration: underline; color: #007bff; font-weight: bold;">Sign Up Here</a>
      </p>
      <p style="text-align: center; font-size: 14px; color: black;">
        <a href="https://repreport.vercel.app/" style="text-decoration: none; color: #000;">https://repreport.vercel.app/</a>
      </p>
      
                    </td>
                  </tr>
                  <tr>
                    <td class="footer">
                      &copy; 2025 RepReport. All rights reserved.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
      `
    },
    
  };
  