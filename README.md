#MIT SLOAN PM Hackathon submission

# Englight Chrome Extension

Enlight Chrome extension is an AI-powered accessibility tool that allows blind and visually impaired business owners to access insights from online business web applications such as Google Analytics for their e-commerce websites. Once started, it automatically scrolls through the page, takes snapshots, caches them, and sends them as input to a multimodal LLM to extract the text and images to provide a contextual understanding of the active webpage.

Englight v1.0 is an MVP of this that allows the user to install the extension in Google Chrome, and once started by selecting the extension, it automatically accesses the content of the active tab, and scans by automatically scrolling the page to take snapshots of the webpage and caches the images to be processed by the llm. 

## Installation

To install this extension, follow these steps:

### Prerequisites

- Google Chrome browser.

### Loading the Extension

1. **Download the Extension**:  
   - Clone the repository to your local machine using `git` or download the ZIP file and extract it.

      ```bash
      git clone http://github.com/joachimaare/enlight_mvp_v1.git
      ```

   - If you downloaded as a ZIP, unzip the content to a directory of your choice.

2. **Open Chrome**:  
   - Navigate to `chrome://extensions/` in your Chrome browser.

3. **Enable Developer Mode**:  
   - Enable "Developer mode" by ticking the checkbox in the upper-right corner.
   - 
![Screenshot 2024-02-22 134223](https://github.com/joachimasare/enlight_mvp_v1/assets/47057544/c358ff95-54f6-41d4-a34e-90e6f840b1de)

4. **Load the Extension**:  
   - Click on the "Load unpacked" button.
   - Navigate to the directory where you cloned or unzipped the extension.
   - Select the directory and click "Open".
   - 
![Screenshot 2024-02-22 134238](https://github.com/joachimasare/enlight_mvp_v1/assets/47057544/f2386216-100f-435e-bfc8-59d512bd9d23)

The extension should now be installed in your Chrome browser.

![Screenshot 2024-02-22 134251](https://github.com/joachimasare/enlight_mvp_v1/assets/47057544/f2b2f73e-ae46-41f2-87d2-01b53f0c68ce)

## Usage

To use the Full Page Capture extension, simply click on its icon in the Chrome toolbar while you are on the page you wish to capture. The extension will start capturing the visible part of the page and then automatically scroll and capture the rest of the page. Once the capture process is complete, you will see the screenshots logged in the console.
![Screenshot 2024-02-22 134307](https://github.com/joachimasare/enlight_mvp_v1/assets/47057544/575b01e9-c453-423b-8fd1-e6789ef12f99)

![Screenshot 2024-02-22 134318](https://github.com/joachimasare/enlight_mvp_v1/assets/47057544/33b30bad-2ecb-4093-b59d-6ef74c1ef281)

![Screenshot 2024-02-22 134336](https://github.com/joachimasare/enlight_mvp_v1/assets/47057544/ca79d040-6605-4833-bb5c-bd141867a896)

## Verifying Captured Images

1. **Initiate the Capture Process**: Click on the extension's icon in the Chrome toolbar to begin capturing the webpage. This pops up a 'Start' button that can be accessed via the tab key or by clicking on it.    The extension now automatically scrolls through the webppage to take snapshots of the entire page to be processed by the multimodal LLM.  

2. **Access the Extension's 'service worker' to view the image logs taken**:
   - Navigate to `chrome://extensions/` in your Chrome browser.
   - Locate the Full Page Capture extension in the list.
   - Click on the `background activity/logs` link for the Enlight extension, which might be labeled as `service worker` or similar. This will open the Developer Tools for the background service worker of the 
     extension.
  
     ![Screenshot 2024-02-23 043341](https://github.com/joachimasare/enlight_mvp_v1/assets/47057544/44ec76f0-a1aa-4d32-998e-76b03f7254fa)

3. **View Captured Images**:
   - In the Developer Tools window, click on the "Console" tab.
   - You should see logs for each screenshot taken, formatted as Data URLs beginning with `data:image/png;base64,` followed by the image data in base64 encoding.
  
     ![Screenshot 2024-02-23 043359](https://github.com/joachimasare/enlight_mvp_v1/assets/47057544/fed1f86c-64ff-4ffb-a70d-23cdee6969f2)

   - The number of logs will correspond to the number of screenshots taken as the extension scrolled through the page.

4. **Check for Completion**:
   - Once the extension has finished scrolling through the entire page and capturing screenshots, you should see a final log entry indicating that the process is complete, such as "Capture complete."
     
     ![Screenshot 2024-02-23 044922](https://github.com/joachimasare/enlight_mvp_v1/assets/47057544/6af258c6-260f-4fa7-ba83-57a148cddaed)
     
   - Copy and paste any of the image urls into the address bar to view the captured image.

     ![Screenshot 2024-02-23 043412](https://github.com/joachimasare/enlight_mvp_v1/assets/47057544/e6a74d9e-f884-4f51-b7cf-8924648dd9e0)

     ![Screenshot 2024-02-23 043422](https://github.com/joachimasare/enlight_mvp_v1/assets/47057544/0f3ae18e-ce2e-4767-a140-0d16a303b5b2)


These steps confirm that the extension operates correctly by taking and caching the screenshots. These images are not saved as files but are held in memory for user data privacy & security and to save local storage space.

## User Privacy, Security, and Consent
**Consent for Content Capture:** At the initial setup, users are explicitly asked for their consent to capture and analyze the content of the web pages they visit. 
(Adherence to GDPR Article 6(1)(a), GDPR Article 7 - Conditions for Consent)

**Selective Content Capture:** Utilizing ‘chrome.tabs.captureVisibleTab’, the extension captures only the content of the active tab, excluding any sensitive information (that may be in the menu bar, taskbar region, or other opened tabs). This method ensures that only relevant webpage content is processed, safeguarding user privacy and minimizing data exposure.
(Adherence to GDPR Article 5 - Principles Relating to Processing of Personal Data)

**Secure Data Handling:** All data captured and processed by the extension, from screenshots to AI-generated insights, are handled securely. Data transmission to any external servers for processing is encrypted, and strict data protection measures are in place to comply with privacy regulations and ensure the confidentiality and integrity of user data.
(Adherence to GDPR Article 32 - Security of Processing)

## Proprietary
 This code is temporarily made public only for submission to and access by the MIT SLOAN PM Hackathon team.


